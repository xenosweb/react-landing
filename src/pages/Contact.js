import React, { Component } from "react";
import ContactForm from "../parts/ContactForm";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import MiniHero from "../parts/MiniHero";

export default class Contact extends Component {
	render() {
		return (
			<>
				<Header></Header>
				<MiniHero
					title="Contact Me!"
					subtitle="Free consultation special for you"
				></MiniHero>
				<ContactForm></ContactForm>
				<Footer></Footer>
			</>
		);
	}
}
