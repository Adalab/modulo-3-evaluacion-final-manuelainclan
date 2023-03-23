import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import "../styles/App.scss";
import Header from "./Header.js";
import NotFoundPage from "./NotFoundPage.js";
import CharacterDetail from "./CharacterDetail.js"
import { useEffect, useState } from "react";
import callApi from "../services/api.js";
import CharacterList from "./CharacterList.js";
import Filters from "./Filters.js";


function App() {
    const [characterData, setCharacterData] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [houseSelect, setHouseSelect] = useState("gryffindor");
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
  };
  const handleFilterName = (ev) => {
    setSearchCharacter(ev.target.value);
  };
  const handleHouseSelect = (ev) => {
    setHouseSelect(ev.target.value);
  };

  // const error = characterData.character
  const characterFiltered = characterData.filter(
    (each) => {
      //    if(searchCharacter === !error ){

      //       return {`No hay ningún personaje que coincida con ${error}`}
      // }else{
      return each.name
        .toLocaleLowerCase()
        .includes(searchCharacter.toLocaleLowerCase());
    }

    // }
  );

  const {pathname} = useLocation();
  const dataUrl = matchPath('/detail/:id',pathname)
  const getRouteCharacter = () =>{
    if(dataUrl){
       const characterId = dataUrl.params.id;
       return characterFiltered.find((each) =>{ return each.id === characterId});
    }
  }
   

  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<>
        <Filters
          handleSubmit={handleSubmit}
          handleFilterName={handleFilterName}
          searchCharacter={searchCharacter}
          handleHouseSelect={handleHouseSelect}
          houseSelect={houseSelect}
        />

        <CharacterList
          characterData={characterFiltered}
          searchCharacter={searchCharacter}
        />
      </>} />
         <Route path='*' element={<NotFoundPage />} />
          <Route
          path='/detail/:id'
          element={<CharacterDetail characterFind={getRouteCharacter ()} />}
        />
      </Routes>
      </main>
    </div>
  );
}
export default App;
