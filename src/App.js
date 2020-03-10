import React ,{Component} from 'react';
class App extends React.Component {
	state = {
		shown: true,
	};
		
	render() {		
		return (
			<div>
				<h2>this.state.shown = {this.state.shown ? "true" : "false"}</h2>
				<button onClick={() => this.setState({ shown: !this.state.shown })}>Toggle</button>
			</div>
		)
	}
}

export default App;
