import { Robot } from '../containers/App';
import Card from './Card';
type CardListProps = { robots: Robot[] }
const CardList = ({ robots }:CardListProps) => {
	return (
		<div>
			{robots.map((_, index) => {
				return (
					<Card
						key={robots[index].id}
						id={robots[index].id}
						name={robots[index].name}
						email={robots[index].email}
					/>
				);
			})}
		</div>
	);
};
export default CardList;
