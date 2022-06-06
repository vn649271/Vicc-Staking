import React from "react";

export default ({ title, className, noLine, children }) => {
  return (
    <div
      className={
        "w-full rounded-lg border-2 border-slate-200 pb-4 " + (className ? className : "")
      }
      // style={{ maxWidth: '600px' }}
    >
      <div className={`text-center font-Montserrat-ExtraBold text-white text-2xl uppercase pt-3 pb-2 ${noLine ? "" : "border-b border-dashed border-white"}`}>
        {title}
      </div>
      {children}
    </div>
  );
};
