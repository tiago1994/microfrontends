import React, { useState } from "react";

export default () => {
  const [dados, setDados] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      <h2>Users (users)</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((dado: any) => {
            return (
              <tr>
                <td>{dado.id}</td>
                <td>{dado.userId}</td>
                <td>{dado.title}</td>
                <td>{dado.completed}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
