import "./Home.scss";
import HomeInfoBox from "./HomeInfoBox";
import Slider from "../../components/Slider/Slider";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

const Home = () => {
	return (
		<>
			<Slider />
			<Section>
				<Container>
					<div className="">
						<HomeInfoBox />
					</div>
				</Container>
			</Section>
		</>
	);
};

export default Home;
