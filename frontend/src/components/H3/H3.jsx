import React from "react";

const H3 = ({ children, className }) => {
	return (
		<h3
			className={`${className} text-h3 font-medium leading-[1.2] text-[#333] mb-4`}
		>
			{children}
		</h3>
	);
};

export default H3;