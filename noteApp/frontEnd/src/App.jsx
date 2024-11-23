import { Link } from "react-router-dom";
import "./App.css";
import { NoteComponent } from "./components/noteComponent/NoteComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import Note from "./components/note/Note";
import { IoMdAdd } from "react-icons/io";

//configuring routes

function App() {
  const initialNote = [
    {
      title: "manual title",
      content: "manual content",
    },
  ];
  const [notes, setNotes] = useState(initialNote);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/notes")
      .then((res) => {
        setNotes(res.data);
        // console.log(res.data);
      })

      .catch((err) => {
        console.log(`all data fetching err:- ${err}`);
      });
  }, [notes]);

  return (
    <>
      {/* {console.log("return ran")} */}
      {/* {console.log(notes)} */}

      <div className="navBar">
        <h2>welcome to Note Book by Dharmendra</h2>
      </div>
      <div className="mainContainer">
        <div className="sidebar">
          <h2>siedebar</h2>
        </div>
        <div className="notes">
          <Link to={"/notes"}>
            <div className="new-note">
              <button>
                <IoMdAdd />
              </button>
              {/* <small>Add New Notes</small> */}
            </div>
          </Link>
          <div className="note-container">
            {notes.map((note, index) => {
              // console.log(`app index= ${index}`);

              return <Note data={note} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
