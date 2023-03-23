import { Link } from "react-router-dom";

function CharacterItem({ eachCharacter }) {
  return (
    <li>
      <Link to={`/detail/${eachCharacter.id}`} >
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
      </Link>
    </li>
  );
}

export default CharacterItem;
