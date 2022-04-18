import React, { Component } from "react";
import CTA from "../parts/CTA";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import MiniHero from "../parts/MiniHero";
import Section from "../parts/Section";
import Helmet from "react-helmet";

export default class About extends Component {
	render() {
		return (
			<>
				<Helmet>
					<title>About me &ndash; Aulia</title>
					<meta property="og:locale" content="id_ID" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="About me &ndash; Aulia" />
					<meta
						property="og:description"
						content="Elegant, SEO Friendly and Powerful Web Design for Business & Influcencer, feel free to reach me! &ndash; Aulia"
					/>
					<meta property="og:url" content="https://ca.xenosweb.com" />
					<meta
						property="og:site_name"
						content="Aulia &ndash; Elegant and Powerful Web Design for Business & Influcencer"
					/>
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:domain" content="https://ca.xenosweb.com" />
					<meta name="twitter:title" content="About me &ndash; Aulia" />
					<meta
						name="twitter:description"
						content="Elegant, SEO Friendly and Powerful Web Design for Business & Influcencer, feel free to reach me! &ndash; Aulia"
					/>
				</Helmet>
				<Header></Header>
				<MiniHero
					title="About Me"
					subtitle="Aulia Satrio Wibowo"
				></MiniHero>
				<Section
					heading="Hello There!"
					subheading="My name is Aulia, curently I work as a Tech Recruiter, but I also open for web development services. I have more than 5 years experiences in web development. And done some cool projects (you can find on my portfolio page)."
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
