import React, { useEffect, useState } from "react";
import Todo from "../Components/Todo.jsx";
import doGet from "../service.jsx";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await doGet("/users");
    setUsers(res);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1 className="text-center">Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>User Name</th>
            <th>Website</th>
            <th>Address</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.website}</td>
              <td>{item.address.city}</td>
              <td>{item.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
