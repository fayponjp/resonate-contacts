import './App.css';
import { getUsers } from "./api/Users"; 
// import { Header } from "./components/Header";
import { FaSearch } from 'react-icons/fa'
import { ContactList } from "./components/Contact";
import React, { useEffect, useState } from "react";
// import { Search } from './components/Search';

function App() {
  const [users, setUsers] = useState();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      const data = await getUsers();
      setUsers(data);
      setFilteredUsers(data);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users) {
      const filtered = users.filter(
          (user) =>
            user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      setFilteredUsers(filtered);
    }

  }, [searchTerm, users]);


  return (
    <div className="App">
      <div className="header">
          Contacts
      </div>
      <div className="searchContainer">
        <FaSearch size={ "1.25em" } />
        <input
          className="searchInput"
          type="text"
          placeholder="Search by username or name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="contactContainer" id="contactContainer">
        <ContactList users= {filteredUsers} />
      </div>
    </div>
  );
}

export default App;
