import "./Slider.scss";
import { useState } from "react";
import { sliderData } from "./slider-data";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = () => {
	const navigate = useNavigate();
	const [currentSlide, setCurrentSlide] = useState(0);

	const autoScroll = true;
	const slideLength = sliderData.length;

	let slideInterval;
	const intervalTime = 5000;

	const nextSlide = () => {
		setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
	};
	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
	};

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
									<button
										onClick={() => navigate("/shop")}
										className="text-[1.6rem] font-normal py-[6px] px-2 mb-5 border border-transparent rounded-[3px] cursor-pointer flex justify-center items-center transition-all duration-300 text-white bg-primary hover:translate-y-[-2px]"
									>
										Shop Now
									</button>
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
