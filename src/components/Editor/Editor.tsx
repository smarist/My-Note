import { FC, useState } from "react";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import Showdown from "showdown"
import classes from "./Editor.module.css";
import { EditorProps } from "./types";

const AppBar: FC<EditorProps> = ({
    currentNote,
    updateNote,
  }) => {
  const [selectedTab, setSelectedTab] = useState<any>("write")

  const converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true,
  })
  return (
    <section className={classes.editor}>
      <ReactMde
        value={currentNote}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown: string) =>
            Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        heightUnits="vh"
      />
    </section>
  );
};

export default AppBar;
