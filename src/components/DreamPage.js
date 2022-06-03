import React, { useState, useEffect } from 'react';
import Header from './Header';
import DreamsContainer from './DreamsContainer';
import NewDreamForm from './NewDreamForm';

function DreamPage() {

  const [dreams, setDreams] = useState([])
  const [isForm, setIsForm] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/dreams', {
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
    <div className="dreampage" style={{
      backgroundImage: `url(https://i.pinimg.com/564x/af/5b/53/af5b53eb38305d2a46ed607a8be6dddb.jpg)`,
      backgroundSize: '100%'
    }}>
      {/* <Header /> */}
      <div className="sidebar">
        <button onClick={() => setIsForm(!isForm)}>Show/Hide New Diary Entry Form</button>
        {isForm ? <NewDreamForm handleNewDream={handleNewDream} dreams={dreams} /> : null}
      </div>
      <DreamsContainer dreams={dreams} />
    </div>
  )
}

export default DreamPage;