import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
class App extends Component {
	constructor() {
		super();
		this.state = {
			searchField: '',
			robots: [],
		};
	}
	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}
	render() {
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name
				.toLowerCase()
				.includes(this.state.searchField.toLowerCase());
		});
		if (this.state.robots.length === 0)
			return <h1 className='tc pa5 ma7'>Loading</h1>;
		return (
			<div className='tc'>
				<h1 className='f1'>Robo Friends </h1>
				<SearchBox onSearchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}
export default App;
