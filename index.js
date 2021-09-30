// Use the countries API to fetch data about countries. (5 pt)

const API_URL = "https://restcountries.com/v3/all";

// const data = async () => {
//   const api = await fetch(API_URL).then(response => response.json());
//   console.log(api);
// };
// data();

const fetchData = async () => {
  const api = await fetch(API_URL).then(response => response.json());
  console.log(api);
};
fetchData();
