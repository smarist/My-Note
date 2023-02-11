import { Notes } from "../../utils/types";

export interface SideBarProps {
     notes?: Notes[],
     newNote: () => void,
     deleteNote: (e: React.MouseEvent<HTMLElement>, noteId: string) => void,
     currentNote: string,
     setCurrentNoteId: (noteId: string) => void,
}