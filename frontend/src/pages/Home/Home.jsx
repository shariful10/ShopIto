import "./Home.scss";
import HomeInfoBox from "./HomeInfoBox";
import Slider from "../../components/Slider/Slider";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import H2 from "../../components/H2/H2";
import Buttons from "../../components/Buttons/Buttons";
import Hr from "../../components/Hr/Hr";
import PageHeading from "../../components/PageHeading/PageHeading";

// const pageHeading = ({ heading, btnText }) => {
// 	return (
// 		<>
// 			<div className="flex justify-between items-center">
// 				<H2 className="font-extralight">{heading}</H2>
// 				<Buttons>{btnText}</Buttons>
// 			</div>
// 			<Hr />
// 		</>
// 	);
// };

const Home = () => {
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
					</div>
				</Container>
			</Section>
		</>
	);
};

export default Home;
