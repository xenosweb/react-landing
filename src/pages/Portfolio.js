import React, { Component } from "react";
import CTA from "../parts/CTA";
import Header from "../parts/Header";
import MiniHero from "../parts/MiniHero";
import PortfolioItems from "../parts/PortfolioItems";
import Footer from "../parts/Footer";
import portfolio from "../data/portfolio.json";

export default class Portfolio extends Component {
	componentDidMount() {
		window.title = "Portfolio &ndash; Coderaulia";
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<>
				<Header></Header>
				<MiniHero title="Portfolio" subtitle="by Coderaulia"></MiniHero>
				<PortfolioItems data={portfolio.website}></PortfolioItems>
				<CTA
					heading="Need a Website or Apps?"
					sub="Maximize and boost your
									business through internet with us."
					call="Get a Quote"
				></CTA>
				<Footer></Footer>
			</>
		);
	}
}
