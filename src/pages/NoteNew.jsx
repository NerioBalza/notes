import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { newNote } from "../actions";
import { v4 as uuidv4 } from "uuid";

const NotesNew = ({ newNote, history }) => {
  const [noteData, setNoteData] = useState({
    note_title: "",
    note_content: "",
    note_date: {
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
    },
    note_id: 0,
  });

  useEffect(() => {
    setNoteData({ ...noteData, note_id: uuidv4() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeInput = (event) => {
    let fecha = new Date();
    setNoteData({
      ...noteData,
      [event.target.id]: event.target.value,
      note_date: {
        year: fecha.getFullYear(),
        month: fecha.getMonth() + 1,
        day: fecha.getDate(),
        hour: fecha.getHours(),
        minute: fecha.getMinutes(),
      },
    });
  };

  const autoGrow = (element) => {
    if (element.target.scrollHeight > 200) {
      element.target.style.height = "5px";
      element.target.style.height = `${element.target.scrollHeight}px`;
    } else {
      element.target.style.height = "200px";
    }
  };

  const handleSaveNote = async () => {
    if (noteData.note_title !== "") {
      newNote(noteData);
      history.push("/");
    }
  };

  const handleCancelNote = () => {
    history.push("/");
  };

  return (
    <div className="new-note">
      <section className="new-note-nav">
        <i className="icon-back new-note__btn" onClick={handleCancelNote}></i>
        <i className="icon-disk new-note__btn" onClick={handleSaveNote}></i>
      </section>
      <section className="new-note-content">
        <div className="note-container">
          <textarea
            className="new-note__title"
            onChange={handleChangeInput}
            id="note_title"
            placeholder="Title"
            maxLength="30"
          ></textarea>
          <textarea
            className="new-note__text"
            onChange={handleChangeInput}
            onInput={autoGrow}
            id="note_content"
            placeholder="Note"
          ></textarea>
        </div>
      </section>
    </div>
  );
};

const mapDispatchToProps = {
  newNote,
};

export default connect(null, mapDispatchToProps)(NotesNew);
