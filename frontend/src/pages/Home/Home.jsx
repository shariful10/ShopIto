import "./Home.scss";
import HomeInfoBox from "./HomeInfoBox";
import Slider from "../../components/Slider/Slider";
import Section from "../../components/Section/Section";
import { productData } from "../../components/Carousel/data";
import Container from "../../components/Container/Container";
import PageHeading from "../../components/PageHeading/PageHeading";
import ProductCarousel from "../../components/Carousel/ProductCarousel";
import CarouselItem from "../../components/Carousel/CarouselItem";
import ProductCategory from "./ProductCategory";
import H3 from "../../components/H3/H3";

const Home = () => {
	const products = productData.map(
		({ id, name, imageurl, price, description }) => (
			<div key={id} className="">
				<CarouselItem
					name={name}
					url={imageurl}
					price={price}
					description={description}
				/>
			</div>
		)
	);

	return (
		<>
			<Slider />
			<Section>
				<Container>
					<HomeInfoBox />
					<PageHeading
						heading={"Latest Products"}
						btnText={"Shop Now >>>"}
					/>
					<ProductCarousel products={products} />
				</Container>
			</Section>
			<Section className="bg-grey">
				<Container>
					<H3>Categories</H3>
               <ProductCategory />
				</Container>
			</Section>
		</>
	);
};

export default Home;
