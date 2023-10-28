import "./Home.scss";
import HomeInfoBox from "./HomeInfoBox";
import Slider from "../../components/Slider/Slider";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import H2 from "../../components/H2/H2";
import Buttons from "../../components/Buttons/Buttons";

const pageHeading = ({ heading, btnText }) => {
	<div className="flex justify-between items-center">
		<H2 className={"font-extralight"}>{heading}</H2>
		<Buttons>{btnText}</Buttons>
	</div>;
};

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
