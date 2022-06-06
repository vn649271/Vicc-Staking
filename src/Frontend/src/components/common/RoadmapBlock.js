import React from "react";

export default ({ title, className, noLine, children }) => {
  return (
    <div
      className={
        "rounded-lg roadmap-block-layout p-5" + (className ? className : "")
      }
      // style={{ maxWidth: '600px' }}
    >
		<div 
			className={`roadmap-block-title text-left font-Montserrat-Extra text-gray-700`}
		>
			{title}
		</div>
		<div className="roadmap-block-body">
			{children}
	    </div>  		
  	</div>
  );
};
