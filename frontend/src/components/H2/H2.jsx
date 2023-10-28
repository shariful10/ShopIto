import React from "react";

const H2 = ({ children, className }) => {
	return (
		<h2 className={`${className} text-h2 font-medium leading-[1.2] text-[#333] mb-4`}>{children}</h2>
	);
};

export default H2;
