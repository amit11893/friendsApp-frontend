import React, { useEffect, useState } from 'react';
import './App.css';
import UserList from './UserList';

export let UsersContext = React.createContext();

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/api/users").then(async (res) =>{
      const users = await res.json();
      setUsers(users);
    });
  },[setUsers])

  const changeUsers = (userId, val) => {
    if(val===1){
      fetch(`http://localhost:8080/api/users/${userId}/friends`).then(async (res) =>{
        const users = await res.json();
        setUsers(users);
      });
    }
    if(val===2){
      fetch(`http://localhost:8080/api/users/${userId}/friendsoffriends`).then(async (res) =>{
        const users = await res.json();
        setUsers(users);
      });
    }
  }

  return (
    <UsersContext.Provider value={{users, changeUsers}}>
      <div className="App">
        <UserList />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
