import { useEffect, useState } from "react";
import callApi from "../services/api.js";
import "../styles/App.scss";

function App() {
  //variable de estado para guardar el fecth del api
  const [characterData, setCharacterData] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [houseSelect, setHouseSelect] = useState("gryffindor")

  useEffect(() => {
    callApi("gryffindor").then((data) => {
      setCharacterData(data);
    });
  }, []);
  useEffect(() => {
    callApi(houseSelect).then((data) => {
      setCharacterData(data);
    });
  }, [houseSelect]);

  const handleFilterName = (ev) => {
    ev.preventDefault();
    setSearchCharacter(ev.target.value);
  };

  const handleHouseSelect = (ev) => {
    ev.preventDefault();
    setHouseSelect(ev.target.value)
    
  }
  const renderCharacter = () => {
    return characterData
      .filter((each) => {
        return each.name
          .toLocaleLowerCase()
          .includes(searchCharacter.toLocaleLowerCase());
      })
      .map((each) => {
        console.log(each.image);
        return (
          <li key={each.id}>
            <img src={each.image ? each.image : "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"} alt={each.name}
            />
            <p>{each.name}</p>
            <p>{each.species}</p>
          </li>
        );
      });
  };

  return (
    <div className="App">
      {/* aqui va el html */}
      <form>
        <label htmlFor="searchCharacter">Busca por personaje:</label>
        <input
          name="searchCharacter"
          type="searchCharacter"
          autoComplete="off"
          placeholder="Filtrar por nombre"
          onInput={handleFilterName}
          value={searchCharacter}
        />
         <label htmlFor="houseSelect">
            Filtrar por personaje
          </label>
          <select
            name="houseSelect"
            id="houseSelect"
            onChange={handleHouseSelect}
            value={houseSelect}
          >
            <option value= "gryffindor">Gryffindor</option>
            <option value= "hufflepuff">Hufflepuff</option>
            <option value= "slytherin">Slytherin</option>
            <option value= "ravenclaw">Ravenclaw</option>
          </select>
      </form>
      <ul>{renderCharacter()}</ul>
    </div>
  );
}

export default App;
