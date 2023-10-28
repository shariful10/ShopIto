import React from "react";

const Buttons = ({ children, className }) => {
	return (
		<button
			className={`${className} text-[1.6rem] font-normal py-[6px] px-4 mb-[5px] border border-transparent cursor-pointer flex justify-center items-center transition-all duration-300`}
		>
			{children}
		</button>
	);
};

export default Buttons;
