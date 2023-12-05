// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const responsePage1 = await fetch('https://reqres.in/api/users?page=1');
        const responsePage2 = await fetch('https://reqres.in/api/users?page=2');
        const dataPage1 = await responsePage1.json();
        const dataPage2 = await responsePage2.json();
  
        const usersPage1 = dataPage1.data;
        const usersPage2 = dataPage2.data;
  
        const allUsers = [...usersPage1, ...usersPage2];
  
        const shuffledUsers = allUsers.sort(() => Math.random() - 0.5);
  
        const selectedUsers = shuffledUsers.slice(0, 6);
  
        setUsers(selectedUsers);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Navbar getUsers={getUsers} />
      <div className="user-grid">
        {loading ? (
          <Loader />
        ) : (
          users.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}

export default App;
