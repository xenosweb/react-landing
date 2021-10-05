import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={Landing} />
				<Route path="/portfolio" component={Portfolio} />
			</Router>
		</div>
	);
}

export default App;
