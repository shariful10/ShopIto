import React from "react";

const P = ({ children, className }) => {
	return (
		<div className={`${className} leading-[1.3] text-dark`}>
			{children}
		</div>
	);
};

export default P;
