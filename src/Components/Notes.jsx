import { useEffect, useState } from "react";
import CreateNotes from "./CreateNotes";
import styles from "./Notes.module.css";
import Note from "./Note";
import { v4 as uuid } from "uuid";
export default function Notes() {
  const [inputText, setInputText] = useState("");//to take the input text
  const [notes, setNotes] = useState([]);
  const [editToggle, setEditToggle] = useState(null);

  const editHandler = (id, text) => {
    setEditToggle(id);
    setInputText(text);
  };

  const saveHandler = () => {
    if (editToggle) {
      setNotes(
        notes.map((note) =>
          note.id === editToggle ? { ...note, text: inputText } : note
        )
      );
    } else {
      setNotes((prevNotes) => [...prevNotes, { id: uuid(), text: inputText }]);
    }
    setInputText("");
    setEditToggle(null);
  };

  const deleteHandler=(id)=>{
    const newNotes=notes.filter((n)=>n.id!=id)//to delete the elements when it is not equal
    setNotes(newNotes)

  }


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className={styles.Notes}>
      {notes.map((note) =>
        editToggle === note.id ? (
          <CreateNotes
            inputText={inputText}
            setInputText={setInputText}
            saveHandler={saveHandler}
          />
        ) : (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        )
      )}
      {editToggle === null ? (
        <CreateNotes
          inputText={inputText}
          setInputText={setInputText}
          saveHandler={saveHandler}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
