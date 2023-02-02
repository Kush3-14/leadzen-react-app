import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(result.data);
    };
    fetchData();
  }, []);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  const handleHideDetails = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <table class="table table-borderless">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {selectedUser && selectedUser.id === user.id ? (
                  <button type="button" class="btn btn-danger" onClick={handleHideDetails}>Hide Details</button>
                ) : (
                  <button type="button" class="btn btn-danger" onClick={() => handleViewDetails(user)}>View Details</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <p>ID: {selectedUser.id}</p>
          <p>Name: {selectedUser.name}</p>
          <p>Username: {selectedUser.username}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
          <p>Website: {selectedUser.website}</p>
        </div>
      )}
    </div>
  );
};

export default App;
