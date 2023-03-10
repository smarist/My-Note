import React, { FC, useEffect, useState } from "react";
import Split from "react-split";
import Editor from '../../components/Editor/Editor';
import Sidebar from '../../components/SideBar/SideBar';
import {nanoid} from "nanoid";
import classes from "./Notes.module.css";
import { Notes } from "./types";

const AppBar: FC = () => {
  const [notes, setNotes] = useState<Array<Notes>>(
    () => JSON.parse(localStorage.getItem("notes") as any) || []
  );

  const [currentNoteId, setCurrentNoteId] = useState<string>(
    (notes[0] && notes[0].id) || ""
  );
//   const [currentNoteId, setCurrentNoteId] = useState<any>(
//     (notes[0] && notes[0].id) || null
//   );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote: Notes = {
      id: nanoid(),
      body: " What's on your mind? ",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes] as any);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text: string) {

    setNotes((oldNotes) => {
      const newArray = [];
      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i];
        if (oldNote.id === currentNoteId) {
          newArray.unshift({ ...oldNote, body: text });
        } else {
          newArray.push(oldNote);
        }
      }
      return newArray;
    });
  }

  function deleteNote(e: React.MouseEvent<HTMLElement>, noteId: string) {
    e.stopPropagation();
    setNotes((oldNotes) => oldNotes.filter((note: Notes) => note.id !== noteId));
  }

  function findCurrentNote() {
    return (
      notes.find((note: Notes) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className={classes["split"]}>
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote().id}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor 
              currentNote={findCurrentNote().body}
              updateNote={updateNote}
              />
          )}
        </Split>
      ) : (
        <div className={classes["no-notes"]}>
          <h1>You have no notes</h1>
          <button className={classes["first-note"]} onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
};

export default AppBar;
