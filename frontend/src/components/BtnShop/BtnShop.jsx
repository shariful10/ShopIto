import React from "react";
import { useNavigate } from "react-router-dom";

const BtnShop = ({ children }) => {
	const navigate = useNavigate();

	return (
		<button
			onClick={() => navigate("/shop")}
			className="text-[1.6rem] font-normal py-[6px] px-4 mb-5 border border-transparent rounded-[3px] cursor-pointer flex justify-center items-center transition-all duration-300 text-white bg-primary hover:translate-y-[-2px]"
		>
			Shop Now
		</button>
	);
};

export default BtnShop;
