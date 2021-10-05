import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={Landing} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
			</Router>
		</div>
	);
}

export default App;
