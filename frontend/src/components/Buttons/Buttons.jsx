import React from "react";

const Buttons = ({ children }) => {
	return (
		<button className="text-[1.6rem] font-normal py-[6px] px-2 mb-[5px] border border-transparent cursor-pointer flex justify-center items-center transition-all duration-300 bg-grey">
			{children}
		</button>
	);
};

export default Buttons;
