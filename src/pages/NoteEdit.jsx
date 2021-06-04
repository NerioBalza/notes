import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editNote, deleteNote } from "../actions";

const NotesEdit = ({ match, history, notes, editNote, deleteNote }) => {
  const [noteData, setNoteData] = useState({});

  useEffect(() => {
    notes.map((item) => {
      if (item.note_id === match.params.id) {
        setNoteData(item);
      }
      return true;
    });
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

  const handleSaveNote = () => {
    if (noteData.note_title !== "") {
      editNote(noteData);
      history.push("/");
    }
  };

  const handleDeleteNote = () => {
    deleteNote(noteData.note_id);
    history.push("/");
  };

  const handleCancelNote = () => {
    history.push("/");
  };

  return (
    <div className="edit-note">
      <section className="edit-note-nav">
        <i className="icon-back edit-note__btn" onClick={handleCancelNote}></i>
        <div>
          <i className="icon-bin edit-note__btn" onClick={handleDeleteNote}></i>
          <i className="icon-disk edit-note__btn" onClick={handleSaveNote}></i>
        </div>
      </section>
      <section className="edit-note-content">
        <div className="note-container">
          <textarea
            className="edit-note__title"
            onChange={handleChangeInput}
            id="note_title"
            placeholder="Title"
            maxLength="30"
            value={noteData.note_title}
          ></textarea>
          <textarea
            className="edit-note__text"
            onChange={handleChangeInput}
            onInput={autoGrow}
            id="note_content"
            placeholder="Note"
            value={noteData.note_content}
          ></textarea>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = {
  editNote,
  deleteNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesEdit);
