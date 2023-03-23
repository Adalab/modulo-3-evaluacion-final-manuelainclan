function FilterName ({handleFilterName,searchCharacter}) {
    return(
       <>
       <label htmlFor="searchCharacter">Busca por personaje:</label>
        <input
          name="searchCharacter"
          type="searchCharacter"
          autoComplete="off"
          placeholder="Filtrar por nombre"
          onInput={handleFilterName}
          value={searchCharacter}
        />
       </>
    )
}

export default FilterName;