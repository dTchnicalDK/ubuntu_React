import { useState } from "react";
import axios from "axios";
import "./App1.css";

function App() {
  const [fileObj, setFileObj] = useState();

  const handleFile = (e) => {
    console.log("inside the file handler \n");
    setFileObj(e.target.files[0]);
  };

  //submit handler function
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImage", fileObj);

    axios
      .post("http://localhost:3000/api/upload", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(`post error : ${err}`);
      });
  };

  return (
    <>
      <h2>choose to upload ur file</h2>
      <form onSubmit={handleSubmit}>
        {/* encType="multipart/form-data" */}
        <input
          type="file"
          name="profileImage"
          onChange={(e) => {
            setFileObj(e.target.files[0]);
          }}
        />
        <button type="submit">upload</button>
      </form>
    </>
  );
}

export default App;
