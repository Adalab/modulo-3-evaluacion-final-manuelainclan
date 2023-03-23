import "../styles/CharacterItem.scss";
import { Link } from "react-router-dom";
import avatar from "../images/fondoimagen.jpg";
function CharacterItem({ eachCharacter }) {
  return (
    <li>
      <Link className="link" to={`/detail/${eachCharacter.id}`}>
        <div className="item">
          <img
            className="item__img"
            src={eachCharacter.image ? eachCharacter.image : avatar}
            alt={eachCharacter.name}
          />
          <div className="item__text">
            <p className="item__text__name">{eachCharacter.name}</p>
            <p className="item__text__specie">{eachCharacter.species}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default CharacterItem;
