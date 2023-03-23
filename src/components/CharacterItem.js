function CharacterItem({ eachCharacter }) {
  return (
    <li>
      <img
        src={
          eachCharacter.image
            ? eachCharacter.image
            : "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
        }
        alt={eachCharacter.name}
      />
      <p>{eachCharacter.name}</p>
      <p>{eachCharacter.species}</p>
    </li>
  );
}

export default CharacterItem;
