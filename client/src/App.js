import './App.css';
import React, { useEffect, useState } from 'react';
import List from './component/List';
import Header from './component/Header';

function App() {

  const [travel, setTravel] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/travel')
      .then(response => response.json())
      .then(data => setTravel(data.message));
  }, []);

  const filteredData = travel.filter(data =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <List listTravel={filteredData} />
    </div>
  );
}

export default App;
