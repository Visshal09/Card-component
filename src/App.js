import React, {useState}from 'react';
import './App.css';
import Card from './Component/Card';

function App() {
  const [name,setName]=useState("Your Name")
    const [job,setJob]=useState("Job title")
    const [about,setAbout]=useState("about")
  return (
    <div className="App">
      <div>
        < Card name={name} job = {job} about={about} />
      </div>
      
    </div>
  );
}


export default App;
