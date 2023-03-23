import "../styles/CharacterDetail.scss";
import { Link } from "react-router-dom";
import avatar from "../images/fondoimagen.jpg"
function CharacterDetail({ characterFind }) {
  const renderError = () => {
    return (<><Link className="link__icon" to="/"> <i className="fa-solid fa-arrow-left"></i></Link>
    <p className="error">El personaje que buscas no existe, prueba con otro.</p></>)
  };
  const renderCard = () => {
    return (<>
       <Link className="link__icon" to="/"> <i className="fa-solid fa-arrow-left"></i></Link>
      <article className="article">
        <div className="article__div">
          <div className="article__div__img"><img className="article__div__img"
          src={
            characterFind.image
              ? characterFind.image
              : avatar
          }
          alt="{characterFind.name}"
        /></div>
        <div className="article__div__text">
        <h2 className="article__div__text__name">{characterFind.name}</h2>
        <p>especie: {characterFind.species}</p>
        <p>{alive()} </p>
        <p>género: {characterFind.gender}</p>
        <p>casa: {characterFind.house}</p>
        <p>Nombres alternativos: {characterFind.alternate_names}</p>
        </div>
        </div>
      </article>
      </>
    );
  };

  const alive = () => {
    if (characterFind.alive === false) {
      return (
        <p>
          Estatus: Muerto <i class="fa-solid fa-skull-crossbones"></i>
        </p>
      );
    } else if (characterFind.alive === true) {
      return (
        <p>
          Estatus: Vivo <i class="fa-solid fa-heart-pulse"></i>
        </p>
      );
    }
  };
  return (
    <>
      
      {characterFind === undefined ? renderError() : renderCard()}
    </>
  );
}

export default CharacterDetail;
