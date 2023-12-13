import './App.css';
import { getUsers } from "./api/Users"; 
// import { Header } from "./components/Header";
import { FaSearch } from 'react-icons/fa'
import { Contact, ContactList } from "./components/Contact";
import React, { useEffect, useState } from "react";
// import { Search } from './components/Search';

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    async function fetchUsers() {
      const data = await getUsers();
      setUsers(data);
    }
    fetchUsers();
  }, []);




  return (
    <div className="App">
      <header className="appHeader">
          Contacts
      </header>
      <div className="searchContainer">
        <FaSearch size={ "1.25em" } />
        <input className="searchInput" type="search" />
      </div>
      <div className="contactContainer">
        <ContactList users= {users} />
      </div>

    </div>
  );
}

export default App;
