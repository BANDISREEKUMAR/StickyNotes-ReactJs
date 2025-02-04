import styles from "./CreateNote.module.css";
export default function CreateNotes({ inputText, setInputText, saveHandler }) {
  const char = 100;
  const charLimit = char - inputText.length;
  return (
    <div className={styles.CreateNote}>
      <textarea
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        cols={10}
        rows={5}
        placeholder="Enter your thoughts...."
      ></textarea>
      <div className={styles.noteFooter}>
        <span className={styles.remElemets}>{charLimit} Left</span>
        <button className={styles.saveButton} onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
}
