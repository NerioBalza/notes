import React from "react";
import { Link } from "react-router-dom";

const Note = ({ data }) => {
  return (
    <Link className="note-item" to={`note/${data.note_id}/edit`}>
      <h2 className="note-item__title">{data.note_title}</h2>
      <p className="note-item__content">{data.note_content}</p>
    </Link>
  );
};

export default Note;
