import './App.css';
import { getUsers } from "./api/Users"; 
import Header from "./components/Header";
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);
  
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
