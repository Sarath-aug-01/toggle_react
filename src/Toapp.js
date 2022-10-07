import React, { Component } from "react";
import ToggleSwitch from "./Toggleswitch.js";

class App extends Component {
render() {
	return (
        <React.Fragment>
		<center>
		<ToggleSwitch label="Notifications" />
        <br></br>
		<ToggleSwitch label="View" />
		</center>
	</React.Fragment>
	);
}
}
export default App;