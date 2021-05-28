import React from 'react';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
            {/* to search the perticular note by the value */}
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Search'
			/>
		</div>
	);
};

export default Search;