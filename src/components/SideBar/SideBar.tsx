import { FC } from "react";
import classes from "./SideBar.module.css";
import { SideBarProps } from "./types";
import { ReactComponent as DeleteIcon } from "../../Assets/icons8-trash.svg";
const SideBar: FC<SideBarProps> = ({
  notes = [],
  deleteNote,
  newNote,
  currentNote,
  setCurrentNoteId,
}) => {
  return (
    <section className={classes.sidebar}>
      <div className={classes["sidebar--header"]}>
        <h3>Notes</h3>
        <button className={classes["new-note"]} onClick={newNote}>
          +
        </button>
      </div>
      {notes.map((note, index) => (
        <div
          key={index}
          className={`${classes.title} ${
            note.id === currentNote ? classes["selected-note"] : ""
          }`}
          onClick={() => setCurrentNoteId(note.id)}
        >
          <h4 className={classes["text-snippet"]}>
            {note.body.split("\n")[0]}
          </h4>
          <button
            className={classes.deleteBtn}
            onClick={(e) => deleteNote(e, note.id)}
          >
            <DeleteIcon />
          </button>
        </div>
      ))}
    </section>
  );
};

export default SideBar;
