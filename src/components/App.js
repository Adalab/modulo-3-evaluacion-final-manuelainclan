import { useEffect, useState } from "react";
import callApi from "../services/api.js";
import "../styles/App.scss";
import CharacterList from "./CharacterList.js";
import Filters from "./Filters.js";
// import Filters from "./Filters";
import Header from "./Header.js";

function App() {
 
  const [characterData, setCharacterData] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [houseSelect, setHouseSelect] = useState("gryffindor")
//este fetch lo puedo quitar
  // useEffect(() => {
  //   callApi("gryffindor").then((data) => {
  //     setCharacterData(data);
  //   });
  // }, []);
  useEffect(() => {
    callApi(houseSelect).then((data) => {
      setCharacterData(data);
    });
  }, [houseSelect]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }
  const handleFilterName = (ev) => {
    setSearchCharacter(ev.target.value);
  };
  const handleHouseSelect = (ev) =>{
    setHouseSelect(ev.target.value)
  }

  // const error = characterData.character
  const characterFiltered = characterData.filter((each) => {
    
    //    if(searchCharacter === !error ){
    
    //       return {`No hay ningún personaje que coincida con ${error}`}
    // }else{
        return each.name
          .toLocaleLowerCase()
          .includes(searchCharacter.toLocaleLowerCase());

    }
      
    
      // }
     );
    
  return (
    <div className="App">
      {/* aqui va el html */}
      <Header/>
      <main>   
        <Filters 
        handleSubmit={handleSubmit}
        handleFilterName={handleFilterName} 
        searchCharacter={searchCharacter} 
        handleHouseSelect={handleHouseSelect}
        houseSelect={houseSelect}/>
      
      <CharacterList characterData={characterFiltered} searchCharacter={searchCharacter}/>
    
      </main>
    
    </div>
  );
}

export default App;
