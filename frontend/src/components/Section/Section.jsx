import React from "react";

const Section = ({ children, className }) => {
	return (
		<section className={`${className} w-full py-[4rem]`}>{children}</section>
	);
};

export default Section;
