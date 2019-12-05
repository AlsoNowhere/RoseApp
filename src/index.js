import React from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router } from "react-router-dom";

import "./less/init.less";

import App from "./components/App";

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
