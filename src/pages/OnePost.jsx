import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import doGet from "../service";

const OnePost = () => {
  const [post, setstate] = useState("");
  const [user, setUser] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getOnePost(id);
  }, []);
  const getOnePost = async (id) => {
    const onePost = await doGet("/posts/" + id);
    setstate(onePost);
    const postUser = await doGet("/users/" + onePost.userId);
    setUser(postUser);
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <div className="card">
          <div className="card-header">{user.name}</div>
          <div className="card-body">{user.phone}</div>
        </div>
      </div>
      <div className="col-md-9">
        <div className="card">
          <div className="card-header">{post.id + ". " + post.title}</div>
          <div className="card-body">{post.body}</div>
        </div>
      </div>
    </div>
  );
};

export default OnePost;
