function CharacterDetail({ eachCharacter }) {
  return (
    <article>
      <img
        src={
          //   eachCharacter.image
          //     ? eachCharacter.image
          //     :
          "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
        }
        alt=""
      />
      <p>
        HERMIONE
        {/* {eachCharacter.name} */}
      </p>
      <p>
        Especie
        {/* {eachCharacter.species} */}
      </p>
      <p>estatus </p>
      <p>género</p>
      <p>casa</p>
      <p>Nombres alternativos</p>
    </article>
  );
}

export default CharacterDetail;


