import React, { Component } from "react";
import CTA from "../parts/CTA";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import MiniHero from "../parts/MiniHero";
import Section from "../parts/Section";

export default class About extends Component {
	render() {
		return (
			<>
				<Header></Header>
				<MiniHero title="About Me" subtitle="Coderaulia"></MiniHero>
				<Section
					heading="Hello There!"
					subheading="My name is Aulia, a fulltime Web Developer from Bogor, Indonesia. I have more than 5 years experiences in web development. And done some cool projects (you can find on my portfolio page)."
				></Section>
				<CTA
					heading="Get in Touch with me!"
					sub="For professional or collaborative works, feel free to reach me."
					call="Contact me!"
				></CTA>
				<Footer></Footer>
			</>
		);
	}
}
