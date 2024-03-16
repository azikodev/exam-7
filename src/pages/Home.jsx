import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import { NavLink } from "react-router-dom";

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setColumns(Object.keys(res.data));
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5 ">
      <h2>Crud App with JSON Server</h2>
      <NavLink to="/add" className="btn btn-success my-3 bg-red-700">
        Create +
      </NavLink>
      <table className="table">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td><NavLink to={'./update/${d.id}'}>Edit</NavLink></td>
              <td><NavLink to='./delete' >Delete</NavLink></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
