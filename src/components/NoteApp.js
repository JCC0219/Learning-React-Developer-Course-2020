import React, { useEffect, useState, useReducer } from "react";
import notesReducer from "../reducers/notes";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import NotesContext from "../context/notes-context";

const NoteApp = () => {
  // console.log("Component is rendering!");

  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);

 

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) {
      dispatch({ type: "POPULATE_NOTES", notes: notesData });
      //setNotes(notesData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{notes, dispatch}}>
      <h1>Notes</h1>
      <NoteList/>
      <AddNoteForm/>
    </NotesContext.Provider>
  );
};

export { NoteApp as default };
