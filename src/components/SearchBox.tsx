import { ChangeEvent, ClipboardEvent, KeyboardEvent } from 'react';

type SearchBoxProps = {
	onSearchChange: (
		event:
			| ChangeEvent<HTMLInputElement>
			| KeyboardEvent<HTMLInputElement>
			| ClipboardEvent<HTMLInputElement>
	) => void;
};
const SearchBox = ({ onSearchChange }: SearchBoxProps) => {
	return (
		<div>
			<input
				type='search'
				className='pa3 ma2 ba b--greeen bg-lightest-blue'
				placeholder='search robots'
				onChange={onSearchChange}
				onKeyUp={onSearchChange}
				onPaste={onSearchChange}
				onInput={onSearchChange}
			/>
		</div>
	);
};
export default SearchBox;
