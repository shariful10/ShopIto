import "./Slider.scss";
import { useEffect, useState } from "react";
import { sliderData } from "./slider-data";
import { Link, useNavigate } from "react-router-dom";
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

	useEffect(() => {
		setCurrentSlide(0);
	}, []);

	useEffect(() => {
		if (autoScroll) {
			const auto = () => {
				slideInterval = setInterval(nextSlide, intervalTime);
			};
			auto();
		}
		return () => clearInterval(slideInterval);
	}, [currentSlide, intervalTime, autoScroll]);

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
									<p className="text-2xl font-medium">{desc}</p>
									<hr />
									<button
										onClick={() => navigate("/shop")}
										className="text-[1.6rem] font-normal py-[6px] px-4 mb-5 border border-transparent rounded-[3px] cursor-pointer flex justify-center items-center transition-all duration-300 text-white bg-primary hover:translate-y-[-2px]"
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
