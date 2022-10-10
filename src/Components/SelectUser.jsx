import React, { useEffect, useState } from "react";
import doGet from "../service";

const SelectUser = ({ onChange, name }) => {
  const [user, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  const getUsers = async () => {
    const users = await doGet("/users");
    setUser(users);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const onChangeSelect = (e) => {
    let id = e.target.value;
    let id1 = id === "" ? "" : parseInt(id);
    setCurrentUser(id1);
    if (onChange) onChange(id1);
  };

  return (
    <select
      name={name}
      className="form-control"
      value={currentUser}
      onChange={onChangeSelect}
    >
      {user.map((item) => (
        <option value={item.id} key={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default SelectUser;
