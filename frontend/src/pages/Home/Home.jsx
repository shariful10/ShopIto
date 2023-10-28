import "./Home.scss";
import HomeInfoBox from "./HomeInfoBox";
import Slider from "../../components/Slider/Slider";
import Section from "../../components/Section/Section";
import { productData } from "../../components/Carousel/data";
import Container from "../../components/Container/Container";
import PageHeading from "../../components/PageHeading/PageHeading";
import ProductCarousel from "../../components/Carousel/ProductCarousel";
import CarouselItem from "../../components/Carousel/CarouselItem";

const Home = () => {
	const products = productData.map(({ id, name, imageurl, price, description }) => (
		<div key={id} className="">
			<CarouselItem
				name={name}
				url={imageurl}
				price={price}
				description={description}
			/>
		</div>
	));

	return (
		<>
			<Slider />
			<Section>
				<Container>
					<div>
						<HomeInfoBox />
						<PageHeading
							heading={"Latest Products"}
							btnText={"Shop Now >>>"}
						/>
						<ProductCarousel products={products} />
					</div>
				</Container>
			</Section>
		</>
	);
};

export default Home;
