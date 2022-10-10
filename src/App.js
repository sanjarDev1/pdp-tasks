import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import OnePost from "./pages/OnePost";

const App = () => {
  return (
    <div className="container katta">
      <h1>Json placeholder</h1>
      <NavLink to={"/posts"}>
        <button className="btn btn-dark float-left m-1 ">Posts</button>
      </NavLink>
      <NavLink to={"/todos"}>
        <button className="btn btn-dark float-left m-1 ">Todos</button>
      </NavLink>
      <NavLink to={"/users"}>
        <button className="btn btn-dark float-left  m-1">Users</button>
      </NavLink>
      <br />
      <hr />
      <br />
      <Routes>
        <Route path={"/posts/:id"} element={<OnePost />} />
        <Route path={"/posts"} element={<Posts />} />
        <Route path={"/todos"} element={<Todos />} />
        <Route path={"/users"} element={<Users />} />
      </Routes>
    </div>
  );
};

export default App;
