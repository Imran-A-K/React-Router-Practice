import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";
const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleNavigationWithButton = () =>{
    navigate(`/post/${id}`)
  }
  
  return (
    <div className="post">
      <h5>ID: {id}</h5>
      <h4>{title}</h4>
      <p>{body}</p>
      <Link to={`/post/${id}`}>Show Details</Link>
      <Link to={`/post/${id}`}>
        
        <button>View Post</button>
      </Link>
      <button onClick={handleNavigationWithButton}>View Post button handler -UseNavigate() hook</button>
    </div>
  );
};

export default Post;
