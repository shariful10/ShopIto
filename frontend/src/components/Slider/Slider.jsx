import "./Slider.scss";
import { useEffect, useState } from "react";
import { sliderData } from "./slider-data";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import P from "../P/P";
import BtnShop from "../BtnShop/BtnShop";

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
									<h2 className="text-5xl">{heading}</h2>
									<P className="text-2xl font-light">{desc}</P>
									<hr />
									<BtnShop />
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
