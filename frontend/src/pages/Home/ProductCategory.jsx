import React from "react";
import "./ProductCategory.scss";
import H3 from "./../../components/H3/H3";
import { useNavigate } from "react-router-dom";
import Buttons from "./../../components/Buttons/Buttons";

const categories = [
	{
		id: 1,
		title: "Gadgets",
		image: "https://i.ibb.co/5GVkd3m/c1.jpg",
	},
	{
		id: 2,
		title: "Womens Fashion",
		image: "https://i.ibb.co/nQKLjrW/c2.jpg",
	},
	{
		id: 3,
		title: "Sport Sneakers",
		image: "https://i.ibb.co/fNkBYgr/c3.jpg",
	},
];

const Category = ({ title, image }) => {
	const navigate = useNavigate();
	return (
		<div className="category">
			<H3>{title}</H3>
			<img src={image} alt="img" />
			<Buttons className="bg-grey rounded-[6px] mt-5" onClick={() => navigate("/shop")}>
				{"Shop Now >>>"}
			</Buttons>
		</div>
	);
};

const ProductCategory = () => {
	return (
		<div className="categories">
			{categories.map((cat) => {
				return (
					<div key={cat.id} className="flex justify-center items-center">
						<Category title={cat.title} image={cat.image} />
					</div>
				);
			})}
		</div>
	);
};

export default ProductCategory;
