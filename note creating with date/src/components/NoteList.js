import Note from './Note';
import AddNote from './AddNote';

const NoteList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list'>
            {/* handle note text,date,delete in textarea */}
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
            {/* adding note */}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NoteList;