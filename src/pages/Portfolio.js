import React, { Component } from "react";
import CTA from "../parts/CTA";
import Header from "../parts/Header";
import MiniHero from "../parts/MiniHero";
import PortfolioItems from "../parts/PortfolioItems";
import Footer from "../parts/Footer";
import portfolio from "../data/portfolio.json";
import Helmet from "react-helmet";

export default class Portfolio extends Component {
	componentDidMount() {
		window.title = "Portfolio &ndash; Coderaulia";
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<>
				<Helmet>
					<title>My Portfolio &ndash; Coderaulia</title>
					<meta property='og:locale' content='id_ID' />
					<meta property='og:type' content='website' />
					<meta
						property='og:title'
						content='My Portfolio &ndash; Coderaulia'
					/>
					<meta
						property='og:description'
						content='Elegant, SEO Friendly and Powerful Web Design for Business & Influcencer, feel free to reach me! &ndash; Coderaulia'
					/>
					<meta property='og:url' content='https://ca.xenosweb.com' />
					<meta
						property='og:site_name'
						content='Coderaulia &ndash; Elegant and Powerful Web Design for Business & Influcencer'
					/>
					<meta name='twitter:card' content='summary' />
					<meta name='twitter:domain' content='https://ca.xenosweb.com' />
					<meta
						name='twitter:title'
						content='My Portfolio &ndash; Coderaulia'
					/>
					<meta
						name='twitter:description'
						content='Elegant, SEO Friendly and Powerful Web Design for Business & Influcencer, feel free to reach me! &ndash; Coderaulia'
					/>
				</Helmet>
				<Header></Header>
				<MiniHero title='Portfolio' subtitle='by Coderaulia'></MiniHero>
				<PortfolioItems data={portfolio.website}></PortfolioItems>
				<CTA
					heading='Need a Website or Apps?'
					sub='Maximize and boost your
									business through internet with us.'
					call='Get a Quote'></CTA>
				<Footer></Footer>
			</>
		);
	}
}
