import React from 'react';
import './Note.css';


class Note extends React.Component{

    constructor(props) {
      super(props);
      this.noteContent = props.noteContent;
      this.noteId = props.noteId;  

      this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(){
      const response = window.confirm('Estas seguro de eliminar?')
      if (response) {
        this.props.removeNote(this.noteId);
      } 
    }

    render(){
       return(
        <div className="Note">
        <span
        onClick = {this.handleRemove}
        >&times;</span>
        <p>{this.noteContent}</p>

        </div>
       )
    }
}

export default Note;