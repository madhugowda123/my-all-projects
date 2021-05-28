import { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import Search from './components/Search';
import { nanoid } from 'nanoid';


const App = () => {
	const [notes, setNotes] = useState([	]);

	const [searchText, setSearchText] = useState('');

//  To save our data in local storage


	// useEffect(() => {
	// 	const savedNotes = JSON.parse(
	// 		localStorage.getItem('react-notes-app-data')
	// 	);

	// 	if (savedNotes) {
	// 		setNotes(savedNotes);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	localStorage.setItem(
	// 		'react-notes-app-data',
	// 		JSON.stringify(notes)
	// 	);
	// }, [notes]);


  //adding note
	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

  //deleting note by its id
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div>
      <h1 style={{textAlign:"center"}}>ADDING NOTE</h1>
			<div className='container'>
			{/* search bar */}
				<Search handleSearchNote={setSearchText} />


        {/* note list */}
				<NoteList
      
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
          // adding note
					handleAddNote={addNote}
          // deleting note
					handleDeleteNote={deleteNote}
				/>
			</div>
      </div>
	);
};

export default App;