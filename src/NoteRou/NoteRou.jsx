import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Notes from '../Pages/Notes';
import NotesSignIn from '../NoteSignIn/NoteSignIn';

function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={NotesSignIn} />
        <Route path="/notes/" component={Notes} />
    </Router>
  );
}

export default AppRouter;