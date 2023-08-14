import React, { useState,useContext } from "react";
import NotesContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition";

const AddNoteForm = () => {
  const position = useMousePosition();
  const {dispatch} = useContext(NotesContext)
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NOTE",
      title,
      body,
    });
    // setNotes([...notes, { title, body }]);
    setTitle("");
    setBody("");
  };

  return (
    <>
      <p>Add Note {position.x} - {position.y}</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <button>add Note</button>
      </form>
   </>
  );
};

export default AddNoteForm;
