import React from 'react';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>

            {/* adding text */}
			<span>{text}</span>
			<div className='note-footer'>

                {/* adding current date */}
				<small>{date}</small>

{/* button to delete perticular note */}
				<button className="delete"
					onClick={() => handleDeleteNote(id)}
					size='1.3em'
				>delete</button>
			</div>
		</div>
	);
};

export default Note;