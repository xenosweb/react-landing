import React, { Component } from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import CTA from "../parts/CTA";
import Footer from "../parts/Footer";
import Featured from "../parts/Featured";

export default class Landing extends Component {
	componentDidMount() {
		window.title =
			"Coderaulia &ndash; Elegant and Powerful Web Design for Business & Influcencer";
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<>
				<Header></Header>
				<Hero></Hero>
				<Featured></Featured>
				<CTA
					heading="Boost Your Business"
					sub="Our service will help you maximize and boost your
									business through internet."
					call="Get Started"
				></CTA>
				<Footer></Footer>
			</>
		);
	}
}
