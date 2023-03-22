import { useEffect, useState } from 'react';
import callApi from '../services/api.js';
import '../styles/App.scss';

function App() {
//variable de estado para guardar el fecth del api
const [characterData, setCharacterData] = useState([])

useEffect(() => { callApi('gryffindor').then((data) => {setCharacterData(data)}) }, [])

const renderCharacter = () => {
  return (
    characterData.map((each)=> {
    return <li key={each.id}>
        <h1>{each.name}</h1>
      </li>
  }))
}


  return (
    <div className="App">
      {/* aqui va el html */}
      <ul>{renderCharacter()}</ul>
    </div>
  );
}

export default App;
