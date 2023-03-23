import CharacterItem from "./CharacterItem.js";
import ErrorMessage from "./ErrorMessage.js";

function CharacterList({ characterData,searchCharacter  }) {
  const dataHtml = characterData.map((eachCharacter) => {
    return (
      <CharacterItem eachCharacter={eachCharacter} key={eachCharacter.id} />
    );
  });
  if(searchCharacter === 'pepino'){
    return <ErrorMessage searchCharacter={searchCharacter} />
  }else {
     return (
    <section>
      <ul>{dataHtml}</ul>
    </section>
  );
  }
 
}

export default CharacterList;
