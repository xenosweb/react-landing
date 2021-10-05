import React, { Component } from "react";
import CTA from "../parts/CTA";
import Header from "../parts/Header";
import MiniHero from "../parts/MiniHero";
import PortfolioItems from "../parts/PortfolioItems";
import Footer from "../parts/Footer";

export default class Portfolio extends Component {
	render() {
		return (
			<>
				<Header></Header>
				<MiniHero title="Portfolio" subtitle="by Coderaulia"></MiniHero>
				<PortfolioItems></PortfolioItems>
				<CTA></CTA>
				<Footer></Footer>
			</>
		);
	}
}
