import React from "react";

const H4 = ({ children, className }) => {
	return (
		<h4
			className={`${className} text-h4 font-medium leading-[1.2] text-[#333] mb-4`}
		>
			{children}
		</h4>
	);
};

export default H4;
