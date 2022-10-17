import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";


const Author = ({author, deleteHandler,isLiked}) => {
  const [like, setLike] = useState(isLiked);
  useEffect(() => {
  
  }, [])
  

  return (
    <li key={author._id} className="d-flex justify-content-between">
      <h6>{author.authorName}</h6>

      {like ? (
        <i
          onClick={() => setLike(!like)}
          className="fa fa-heart liked"
          aria-hidden="true"
        ></i>
      ) : (
        <i
          onClick={() => setLike(!like)}
          className="fa fa-heart-o"
          aria-hidden="true"
        ></i>
      )}

      <div>petType: {author.petType}</div>
      <div className="btn-container w-50 d-flex justify-content-evenly">
        <Link to={`/edit-author/${author._id}`} className="text-light w-50">
          <button className="btn btn-success w-100 ">Edit</button>
        </Link>

        <button
          className="btn btn-danger text-light w-25"
          onClick={(e) => {
            deleteHandler(author._id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Author;
