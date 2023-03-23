
const callApi = (houseName) => {

  return fetch(`https://hp-api.onrender.com/api/characters/house/${houseName}`)
    .then((response) => response.json())
    .then((response) => {
      return response.map((data) => {
        return {
          name: data.name,
          id: data.id,
          species: data.species,
          image: data.image,
          alive: data.alive,
          gender: data.gender,
          house: data.house,
          alternate_names: data.alternate_names
        }
      });
    });
};

export default callApi;