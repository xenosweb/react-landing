import React, { Component } from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";

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
			</>
		);
	}
}
