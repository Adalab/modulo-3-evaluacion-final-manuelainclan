import "../styles/Filters.scss";
import FilterHouse from "./FilterHouse.js";
import FilterName from "./FilterName.js";

function Filters({
  handleSubmit,
  handleFilterName,
  searchCharacter,
  houseSelect,
  handleHouseSelect,
}) {
  return (
    <section className="filters">
      <form  className="filters__form"onSubmit={handleSubmit}>
        <FilterName 
          handleFilterName={handleFilterName}
          searchCharacter={searchCharacter}
        />
        <FilterHouse 
          handleHouseSelect={handleHouseSelect}
          houseSelect={houseSelect}
        />
      </form>
    </section>
  );
}

export default Filters;
