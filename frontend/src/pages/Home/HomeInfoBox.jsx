import React from "react";
import {
	BsCartCheck,
	BsClockHistory,
	BsFillCreditCardFill,
} from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";

const data = [
	{
		icon: <FaShippingFast size={30} color="#8cb4f5" />,
		heading: "Free Shipping",
		text: "We offer free shipping on special products",
	},
	{
		icon: <BsFillCreditCardFill size={30} color="#f7d272" />,
		heading: "Secure Payment",
		text: "Make secure payment for your product.",
	},
	{
		icon: <BsCartCheck size={30} color="#fa82ea" />,
		heading: "Quality Products",
		text: "We sell products from only tested and proven brands.",
	},
	{
		icon: <BsClockHistory size={30} color="#82fa9e" />,
		heading: "24/7 Support",
		text: "Get access to support from our exprt support team.",
	},
];

const HomeInfoBox = () => {
	return (
		<div className="infoboxes mb-8">
			{data.map(({ index, heading, icon, text }) => {
				return (
					<div key={index} className="infobox">
						<div className="icon">{icon}</div>
						<div className="icon">
							<h4 className="text-[2rem]">{heading}</h4>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default HomeInfoBox;
