import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../components/Header";
import Note from "../components/Note";

const Notes = ({ notes, history }) => {
  const [notesData, setNotesData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setNotesData(notes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (event) => {
    let str = event.target.value;
    if (str) {
      setIsSearching(true);
      setNotesData(
        notes.filter((note) => {
          return note.note_title.includes(str);
        })
      );
    } else {
      setIsSearching(false);
      setNotesData(notes);
    }
  };

  return (
    <>
      <Header history={history} />
      <div className="notes">
        <section className="notes-var">
          <input
            className="notes-var__searcher"
            type="text"
            placeholder="Search"
            onChange={handleSearch}
          />
          <Link to="/note/new">
            <i className="icon-plus notes-var__add"></i>
          </Link>
        </section>
        <section className="notes-container">
          {notesData.map((element) => (
            <Note data={element} key={element.note_id} />
          ))}
        </section>
        <div className="notes-messages">
          {!isSearching && notesData.length === 0 ? (
            <p className="message-text">
              Press{" "}
              <Link to="/note/new">
                <i className="icon-plus notes-var__add"></i>
              </Link>{" "}
              to create a note
            </p>
          ) : null}
          {isSearching && notesData.length === 0 ? (
            <p className="message-text">No notes were found.</p>
          ) : null}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
