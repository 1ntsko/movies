export async function getCountry(country) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );

  return await response.json();
}

export async function getCountryData(data) {
  let html = "";
  const countries = data.Country.split(", ");
  for (const country of countries) {
    const countryData = await getCountry(country);
    const currency = Object.keys(countryData[0].currencies)[0];
    const flags = countryData[0].flags.png;
    html += `<i class="countriesPlace italic">${currency} <img style="width: 35px; height: 20px" src=${flags}> </i>`;
  }
  return document
    .querySelector("#countries")
    .insertAdjacentHTML("beforeend", html);
}
