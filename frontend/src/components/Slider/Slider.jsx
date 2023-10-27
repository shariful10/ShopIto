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
                        <div className="content">
                           <span className="span1"></span>
                           <span className="span2"></span>
                           <span className="span3"></span>
                           <span className="span4"></span>
                           <h2>{heading}</h2>
                           <p>{desc}</p>
                           <hr />
                           <button className="text-[1.6rem] font-normal py-[6px] px-2 mb-5 border border-transparent rounded-[3px] cursor-pointer flex justify-center items-center transition-all duration-300 text-white bg-primary">Shop Now</button>
                        </div>
							</>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Slider;
