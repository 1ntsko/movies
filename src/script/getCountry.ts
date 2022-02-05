export async function getCountry(country: string): Promise<any> {
  const response: Response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );

  return await response.json();
}

export async function getCountryData(data: any): Promise<void> {
  let html: string = "";
  const countries: string[] = data.Country.split(", ");
  for (const country of countries) {
    const countryData = await getCountry(country);
    const currency: string = Object.keys(countryData[0].currencies)[0];
    const flags: string = countryData[0].flags.png;
    html += `<i class="countriesPlace italic">${currency} <img style="width: 35px; height: 20px" src=${flags}> </i>`;
  }
  const countriesDiv: HTMLDivElement = <HTMLDivElement>(
    document.querySelector("#countries")
  );
  return countriesDiv.insertAdjacentHTML("beforeend", html);
}
