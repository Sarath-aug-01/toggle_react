import React from 'react'
import App from './Toapp.js'
import './App.css';
class Counter extends React.Component {

	render() {
		return(
			<div>
				<Button text = "Display content using toggle button"> </Button>
			</div>
		)
	}
}

class Button extends React.Component{
	state = {
		textflag: false,
	}
	
	ToggleButton() {
		this.setState(
			{textflag : !this.state.textflag}
		);
	}

	render() {
		
		return(
<>
<br></br>
<div class="button">
				<button onClick={() => this.ToggleButton()}>
				{ this.state.textflag === false ? "Hide":"Show" }
				</button>
                <br></br>
                <br></br>
				{!this.state.textflag && this.props.text}
                </div>
<br></br>
			<App />
			</>
			
		)
	}
}

export default Counter;
