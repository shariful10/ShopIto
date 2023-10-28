import React from "react";
import { responsive } from "./data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductCarousel = ({ products }) => {
	return (
		<div>
			<Carousel
				showDots={false}
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={3000}
				keyBoardControl={true}
				customTransition="all 500ms ease"
				transitionDuration={1000}
			>
				{products}
			</Carousel>
		</div>
	);
};

export default ProductCarousel;
