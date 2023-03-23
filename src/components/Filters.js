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
    <section>
      <form onSubmit={handleSubmit}>
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
