import React, { Component } from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import CTA from "../parts/CTA";
import Footer from "../parts/Footer";
import Featured from "../parts/Featured";
import Helmet from "react-helmet";

export default class Landing extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<>
				<Helmet>
					<title>
						Coderaulia &ndash; Elegant and Powerful Web Design for
						Business & Influcencer
					</title>
					<meta property='og:locale' content='id_ID' />
					<meta property='og:type' content='website' />
					<meta
						property='og:title'
						content='Coderaulia &ndash; Elegant and Powerful Web Design for Business & Influcencer'
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
						content='Coderaulia &ndash; Elegant and Powerful Web Design for Business & Influcencer'
					/>
					<meta
						name='twitter:description'
						content='Elegant, SEO Friendly and Powerful Web Design for Business & Influcencer, feel free to reach me! &ndash; Coderaulia'
					/>
				</Helmet>
				<Header></Header>
				<Hero></Hero>
				<Featured></Featured>
				<CTA
					heading='Boost Your Business'
					sub='Our service will help you maximize and boost your
									business through internet.'
					call='Get Started'></CTA>
				<Footer></Footer>
			</>
		);
	}
}
