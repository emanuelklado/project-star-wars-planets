const requestAPI = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const result = await fetch(url);
  const resolve = await result.json();
  return resolve;
};

export default requestAPI;
