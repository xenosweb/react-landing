import React, { Component } from "react";
import ContactForm from "../parts/ContactForm";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import MiniHero from "../parts/MiniHero";
import Helmet from "react-helmet";

export default class Contact extends Component {
	render() {
		return (
			<>
				<Helmet>
					<title>Contact me for more information &ndash; Coderaulia</title>
					<meta property='og:locale' content='id_ID' />
					<meta property='og:type' content='website' />
					<meta
						property='og:title'
						content='Contact me for more information &ndash; Coderaulia'
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
						content='Contact me for more information &ndash; Coderaulia'
					/>
					<meta
						name='twitter:description'
						content='Elegant, SEO Friendly and Powerful Web Design for Business & Influcencer, feel free to reach me! &ndash; Coderaulia'
					/>
				</Helmet>
				<Header></Header>
				<MiniHero
					title='Contact Me!'
					subtitle='Free consultation special for you'></MiniHero>
				<ContactForm></ContactForm>
				<Footer></Footer>
			</>
		);
	}
}
