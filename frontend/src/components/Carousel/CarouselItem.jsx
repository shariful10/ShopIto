import { Link } from "react-router-dom";
import "./Carousel.scss";
import P from "../P/P";
import H4 from "../h4/h4";
import Buttons from "../Buttons/Buttons";
import { shortenText } from "../../utils";

const CarouselItem = ({ url, name, price, description }) => {
	return (
		<div className="carouselItem mt-5">
			<Link to="/product-details">
				<img src={url} alt="Product" className="product--image mb-5" />
				<P className="price">{price}</P>
				<H4>{shortenText(name, 18)}</H4>
				<P className="mb-m1">{shortenText(description, 26)}</P>
			</Link>
			<Buttons className="bg-primary text-white w-full rounded-[6px]">Add To Cart</Buttons>
		</div>
	);
};

export default CarouselItem;
