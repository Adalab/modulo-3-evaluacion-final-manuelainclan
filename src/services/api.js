// Fichero src/services/api.js
const callApi = (houseName) => {
  // Recibimos por parámetros searchName, que nos lo pasan desde App dentro del useEffect
  // Llamamos al fetch interpolando la URL de la API más el nombre buscado
  return fetch(`https://hp-api.onrender.com/api/characters/house/${houseName}`)
    .then((response) => response.json())
    .then((response) => {
      return response.map((pepino) => {
        return {
          name: pepino.name,
          id: pepino.id
        }
      });
    });
};

export default callApi;