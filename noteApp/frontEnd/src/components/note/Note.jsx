import { FcTreeStructure } from "react-icons/fc";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./Note.css";
import axios from "axios";

function Note({ data, index }) {
  const navigate = useNavigate();
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/api/delete/${data._id}`)
      .then((res) => {
        console.log(res);
        // navigate("/home");
        toast.success(res.data.msg, { position: "top-left" });
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <h3 className="title">{data.title}</h3>
      <p className="body">{data.content}</p>
      <div className="menu">
        <span>
          <TiEdit />
        </span>
        <span>
          <RiDeleteBin2Fill onClick={handleDelete} />
        </span>
        <span>
          <FcTreeStructure />
        </span>
      </div>
    </div>
  );
}

export default Note;
