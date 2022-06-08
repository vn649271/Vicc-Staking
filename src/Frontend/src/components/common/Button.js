import React, { useEffect, useState } from "react";
import cx from "classnames";

export default ({
  color = "white",
  bgColor = "primary",
  showBorder = false,
  onClick,
  className,
  children,
  uppercase = true,
}) => {

  const [buttonOutline, setButtonOutline] = useState("border-pink");

  useEffect(() => {
    let _buttonOutline = className.search("gradient-button-bg") >= 0 ? "gradient-button-bg" : "border-pink";
    setButtonOutline(_buttonOutline);
  });

  return (
    <button
      onClick={onClick}
      className={cx(
        className,
        "main-button-theme text-white font-gold-bold",
        buttonOutline,
      )}
    >
      {children}
    </button>
  );
};
