import { Link } from "react-router-dom";
import "./Carousel.scss";
import P from "../P/P";
import H4 from "../h4/h4";
import Buttons from "../Buttons/Buttons";

const CarouselItem = ({ url, name, price, description }) => {
	return (
		<div className="carouselItem">
			<Link to="/product-details">
				<img src={url} alt="Product" className="product--image" />
				<P className="price">{`$${price}`}</P>
				<H4>{name}</H4>
				<P className="mb-m1">{description}</P>
				<Buttons className="bg-primary">Add To Cart</Buttons>
			</Link>
		</div>
	);
};

export default CarouselItem;
