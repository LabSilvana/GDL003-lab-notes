import React from 'react';
import './App.css';

import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      notes: [
        {noteId: 1, noteContent: 'note1'},
        {noteId: 2, noteContent: 'note2'},
      ]
    };
    this.addNote = this.addNote.bind(this);
  }

  removeNote() {

  }

  addNote(note) {
    let { notes } = this.state;
    notes.push({
      noteId: note.length + 1,
      noteContent: note
    });
    this.setState({ notes });

  }

  render() {
  return (
      <div className="notesContainer">
        
          <div className="notesHeader">
            <h1>Scary Notes</h1>
          </div>

          <div className="notesBody">
          <ul>
          {
            
              this.state.notes.map(note =>{
                return(
                  <Note
                  noteContent={note.noteContent}
                  noteId={note.noteId}
                  key={note.noteId}
                  />
                )
              })
              
          }
          </ul>
           
          </div>

          <div className="notesFooter">
            <NoteForm addNote={this.addNote}/>
          </div>

      </div>
    );
  }
}

export default App;
