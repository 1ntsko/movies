import { getCountry } from "./getCountry";
import { getMovie } from "./getMovie";

const sumInp = Array.from(
  document.querySelectorAll(
    ".sum-inputs"
  ) as unknown as HTMLCollectionOf<HTMLInputElement>
);

export async function getPopulation(): Promise<void> {
  const movies: any[] = [];
  sumInp.forEach(async (input: any) => {
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

    const sumOfPopulation: number = populations.reduce(
      (acc, curr) => acc + curr
    );
    const sumOfPop: HTMLHeadingElement = <HTMLHeadingElement>(
      document.querySelector(".sum-of-population")
    );
    sumOfPop.textContent! += sumOfPopulation;
  }, 1000);
}
