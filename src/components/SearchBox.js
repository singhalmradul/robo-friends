import React from 'react';
const SearchBox = ({ onSearchChange }) => {
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
