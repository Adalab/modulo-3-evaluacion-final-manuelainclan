function FilterHouse ({handleHouseSelect,houseSelect}) {
    return(
        <><label htmlFor="houseSelect">
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
        </>
    )
}

export default FilterHouse;