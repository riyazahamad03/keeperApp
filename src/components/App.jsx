import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(NewNotes) {
    setNotes((prevNotes) => {
      return [...prevNotes, NewNotes];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((notesItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onadd={addNote} />
      {notes.map((notesItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={notesItem.title}
            content={notesItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
