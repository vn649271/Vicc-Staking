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
    let _buttonOutline = className.search("gradient-button-bg") >= 0 ? "gradient-button-bg": "border-pink";
    setButtonOutline(_buttonOutline);
  });

  return (
    <button
      onClick={onClick}
      className={cx(
        className,
        "main-button-theme text-white",
        buttonOutline,
        // "rounded-md px-4 py-2 mx-1 font-Montserrat-ExtraBold",
        // uppercase ? "uppercase" : "",
        // showBorder ? "border" : "",
        // "bg-" + bgColor,
        // "hover:bg-" + bgColor + "-hover",
        // "hover:border-" + bgColor + "-hover",
        // "text-" + color,
        // "hover:text-" + color + "-hover",
        // "border-" + color,
        // "hover:border-" + color + "-hover"
      )}
    >
      {children}
    </button>
  );
};
