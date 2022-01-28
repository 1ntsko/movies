import { getCountry } from "./getCountry";
import { getMovie } from "./getMovie";

const sumInp = document.querySelectorAll(".sum-inputs");

export async function getPopulation() {
  const movies = [];
  sumInp.forEach(async (input) => {
    const movie = await getMovie(input.value);
    movies.push(movie);
  });

  setTimeout(async () => {
    const movieCountries = await Promise.all(movies).then((i) => {
      return i.map((movie) => ({
        movieCountry: movie.Country,
      }));
    });

    const populations = await Promise.all(
      movieCountries.map((i) => getCountry(i.movieCountry))
    ).then((data) => data.map((i) => i[0].population));

    const sumOfPopulation = populations.reduce((acc, curr) => acc + curr);
    document.querySelector(".sum-of-population").textContent += sumOfPopulation;
  }, 1000);
}
