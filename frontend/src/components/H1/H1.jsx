import React from "react";

const H1 = ({ children, className }) => {
	return (
		<h1
			className={`${className} text-h1 font-medium leading-[1.2] text-[#333] mb-4`}
		>
			{children}
		</h1>
	);
};

export default H1;
