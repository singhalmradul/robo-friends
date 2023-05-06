import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {
	ChangeEvent,
	ClipboardEvent,
	KeyboardEvent,
	useEffect,
	useState,
} from 'react';
import { getData } from '../utils/data.utils';

export type Robot = { id: string; name: string; email: string };
const App = () => {
	const [searchField, setSearchField] = useState('');
	const [robots, setRobots] = useState<Robot[]>([]);
	const [filteredRobots, setFilteredRobots] = useState(robots);
	const onSearchChange = (
		event:
			| ChangeEvent<HTMLInputElement>
			| KeyboardEvent<HTMLInputElement>
			| ClipboardEvent<HTMLInputElement>
	): void => {
		const searchFieldString = (event.target as HTMLInputElement).value;
		setSearchField(searchFieldString);
	};

	useEffect(() => {
		const fetchRobots = async () => {
			const users = await getData<Robot[]>(
				'https://jsonplaceholder.typicode.com/users'
			);
			setRobots(users);
		};
		fetchRobots();
	}, []);
	useEffect(() => {
		const newFilteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		setFilteredRobots(newFilteredRobots);
	}, [searchField, robots]);

	return robots.length ? (
		<div className='tc'>
			<h1 className='f1'>Robo Friends </h1>
			<SearchBox onSearchChange={onSearchChange} />
			<Scroll>
					<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	) : (
		<h1 className='tc pa5 ma7'>Loading</h1>
	);
};

export default App;
