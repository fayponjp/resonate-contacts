import './App.css';
import { getUsers } from "./api/Users"; 
import { Header } from "./components/Header";
import { Contact } from "./components/Contact";
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Contact />
    </div>
  );
}

export default App;
