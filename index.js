// Use the countries API to fetch data about countries. (5 pt)

const API_URL = "https://restcountries.com/v3/all";

const fetchData = async () => {
  const countries = await fetch(API_URL).then(response => response.json());
  for (let i = 0; i <= countries.length; i++) {
    console.log([countries[i].name, countries[i].languages]);
  }
};
fetchData();

// fetch("https://restcountries.com/v3/all")
//   .then(data => {
//     return data.json();
//     // console.log(data.json());
//   })

//   .then(countries => {
//     let lang = [];
//     for (let i = 0; i < countries.length; i++) {

//       if (countries[i].languages) {

//       }}

//     console.log(countries);
//     })
//   // console.log(countries[i]);
//   // for (let i = 0; i < countries.length; i++) {
//   //   console.log(actualdata[i]);
//   // }

//   .catch(error => {
//     console.log(error);
//   });
