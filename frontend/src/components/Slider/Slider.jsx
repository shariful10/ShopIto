import React, { useState } from "react";
import styles from "./Slider.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const prevSlide = () => {};
	const nextSlide = () => {};

	return (
		<div className="slider">
			<AiOutlineArrowLeft onClick={prevSlide} className="arrow prev" />
			<AiOutlineArrowRight onClick={nextSlide} className="arrow next" />
			{sliderData.map((slide, i) => {
				const { image, heading, desc } = slide;
				return (
					<div
						key={i}
						className={i === currentSlide ? "slide current" : "slide"}
					>
						{i === currentSlide && (
							<>
								<img src={image} alt="Slide" />
							</>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Slider;
