import React, { useState, useEffect } from 'react';
import Header from './Header';
import DreamsContainer from './DreamsContainer';
import NewDreamForm from './NewDreamForm';

function App() {

  const [dreams, setDreams] = useState([])
  const [isForm, setIsForm] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/dreams/', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => setDreams(data))
  }, [])
  console.log(dreams)

  function handleNewDream(newDream) {
    setDreams([...dreams, newDream]);
  }

  return (
    <div className="App">
      {/* <Header /> */}
      <div className="sidebar">
        <button onClick={() => setIsForm(!isForm)}>Show/hide new diary entry form</button>
        {isForm ? <NewDreamForm handleNewDream={handleNewDream} /> : null}
      </div>
      <DreamsContainer dreams={dreams} />
    </div>
  )
}

export default App;
