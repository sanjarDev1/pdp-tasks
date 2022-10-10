import React, { useEffect, useState } from "react";
import SelectUser from "../Components/SelectUser.jsx";
import Todo from "../Components/Todo.jsx";
import doGet from "../service.jsx";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [completed, setCompleted] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const [page, setPage] = useState(1);

  const filter = (userId, completed, page) => {
    return data
      .filter(
        (item, index) =>
          (item.userId == userId || !userId) &&
          (item.completed === completed || !isFiltering)
      )
      .filter((item, index) => index >= (page - 1) * 10 && index < page * 10);
  };

  const getTodos = async () => {
    const res = await doGet("/todos");
    setData(res);
    setTodos(res.filter((item, index) => index >= 0 && index < 10));
  };


  useEffect(() => {
    getTodos();
  }, []);

  const userFilter = (userId) => {
    const res = filter(userId, completed, page);
    setTodos(res);
    setCurrentUser(userId);
  };

  const handleCheck = (e) => {
    const checked = e.target.checked;
    const res = filter(currentUser, checked, page);
    setCompleted(checked);
    setTodos(res);
    setIsFiltering(true);
  };

  const reset = () => {
    setTodos(data);
    setCurrentUser("");
    setCompleted(false);
    setIsFiltering(false);
  };

  const onPrev = () => {
    setPage(page - 1);
  };

  const onNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const res = filter(currentUser, completed, page);
    setTodos(res);
  }, [page]);
  return (
    <div>
      <h1 className="text-center">Todos</h1>
      <div className="row">
        <div className="col-md-1">
          <button className="btn btn-danger btn-block" onClick={reset}>
            reset
          </button>
        </div>
        <div className="col-md-3">
         <SelectUser onChange={userFilter}/>
        </div>
        <div className="col-md-3">
          <label>
            Completed
            <input
              type={"checkbox"}
              style={{ transform: "scale(2)" }}
              checked={completed}
              onChange={handleCheck}
            />
          </label>
        </div>
      </div>
      <br />
      <br />
      <br />
      {todos.map((item, index) => (
        <Todo key={index} item={item} />
      ))}

      <div className="row my-4">
        <div className="col-md-2">
          <button className="btn btn-dark" onClick={onPrev}>
            {"<<"} prev
          </button>
        </div>
        <div className="col-md-1">
          <h1>{page}</h1>
        </div>
        <div className="col-md-2">
          <button className="btn btn-dark" onClick={onNext}>
            next {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todos;
