import H2 from "../H2/H2";
import Hr from "../Hr/Hr";
import Buttons from "../Buttons/Buttons";

const PageHeading = ({ heading, btnText }) => {
	return (
		<>
			<div className="flex justify-between items-center">
				<H2 className="font-extralight">{heading}</H2>
				<Buttons className="bg-grey rounded-[4px]">{btnText}</Buttons>
			</div>
			<Hr />
		</>
	);
};

export default PageHeading;
