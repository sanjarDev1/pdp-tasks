import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostModal from "../Components/PostModal.jsx";
import SelectUser from "../Components/SelectUser.jsx";
import doGet, { doPost } from "../service.jsx";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Posts = () => {
  const filter = (userId) => {
    return data.filter((item) => item.userId == userId || userId === "");
  };

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const navigate = useNavigate();

  const getPosts = async () => {
    const res = await doGet("/posts");
    setPosts([...res]);
    setData([...res]);
  };

  const savePosts = async (data) => {
    const res = await doPost("/posts", data);
    setLoading(false);
    setModalVisible(false);
    toast("malumot saqlandi");
    setData((prev) => {
      prev.unshift(res);
      return [...prev];
    });
    setPosts((prev) => {
      prev.unshift(res);
      return [...prev];
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const openOnePost = (id) => {
    navigate("/posts/" + id);
  };

  const onChangeUser = (userId) => {
    const res = filter(userId);
    setPosts(res);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const onSubmit = (data) => {
    setLoading(true);
    data.user = user;
    savePosts(data);
  };

  const changeUser = (id) => {
    setUser(id);
  };

  return (
    <div className="posts-page">
      <h1 className="text-center">Posts</h1>
      <ToastContainer />
      <button
        className="btn btn-dark "
        style={{ float: "right" }}
        onClick={toggleModal}
      >
        Add
      </button>
      <br />
      <div className="row">
        <div className="col-md-3">
          <SelectUser onChange={onChangeUser} />
        </div>
      </div>
      <div className="row">
        {posts.map((item, index) => (
          <div key={index} className="col-md-3 my-4">
            <div
              className="card post-card"
              onClick={() => openOnePost(item.id)}
            >
              <div className="card-header bg-dark text-white ">
                {item.title}
              </div>
              <div className="card-body">{item.body}</div>
            </div>
          </div>
        ))}
      </div>

      <PostModal
        loading={loading}
        changeUser={changeUser}
        isOpen={modalVisible}
        toggle={toggleModal}
        save={onSubmit}
      />
    </div>
  );
};

export default Posts;
