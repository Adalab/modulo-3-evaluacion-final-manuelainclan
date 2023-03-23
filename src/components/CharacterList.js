import "../styles/CharacterList.scss";
import CharacterItem from "./CharacterItem.js";

function CharacterList({ characterData}) {
  const dataHtml = characterData.map((eachCharacter) => {
    return (
      <CharacterItem eachCharacter={eachCharacter} key={eachCharacter.id} />
    );
  });
     return (
    <section >
      <ul className="characterList">{dataHtml}</ul>
    </section>
  );
  
}

export default CharacterList;
