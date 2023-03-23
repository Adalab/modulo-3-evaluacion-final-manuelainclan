function CharacterDetail({ characterFind }) {
 const renderError = () => {
  return(
    <p>
      El personaje que buscas no existe, prueba con otro.
      </p>
  )
 }
  const renderCard = () => {
    return (<article>
      <img
        src={
            characterFind.image
              ? characterFind.image
              :
          "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
        }
        alt=""
      />
      <p>
        {characterFind.name}
      </p>
      <p>
        {characterFind.species}
      </p>
      <p>estatus {characterFind.alive} </p>
      <p>género {characterFind.gender}</p>
      <p>casa {characterFind.house}</p>
      <p>Nombres alternativos {characterFind.alternate_names}</p>
    </article>)
    
  }
  return (
    <>
    {characterFind === undefined ? renderError() : renderCard()}
    </>
  );
}

export default CharacterDetail;


