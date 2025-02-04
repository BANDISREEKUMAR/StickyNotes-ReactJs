import styles from "./Note.module.css";
export default function Note({ id, text, editHandler, deleteHandler }) {
  return (
    <div className={styles.note}>

      <div className={styles.noteBody}>{text}</div>
      
      <div className={styles.noteFooter} style={{ justifyContent: "flex-end" }}>
        <button
          className={styles.editButton}
          onClick={() => editHandler(id, text)}
        >
          Edit
        </button>
        &nbsp;
        <button
          className={styles.deleteButton}
          onClick={() => deleteHandler(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
