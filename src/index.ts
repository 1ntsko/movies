import "./style.css";
import { getMovie } from "./script/getMovie";
import { template } from "./script/template";
import { getRuntime } from "./script/getRuntime";
import { getPopulation } from "./script/getPopulation";

async function getMovieData(movie: string): Promise<any> {
  const data: Response = await getMovie(movie);
  template(data);
}

const searchMovie: HTMLButtonElement = <HTMLButtonElement>(
  document.querySelector(".show-movie-btn")
);
const movie: HTMLInputElement = <HTMLInputElement>(
  document.querySelector(".show-movie-input")
);
const cards: HTMLUListElement = <HTMLUListElement>(
  document.querySelector("#cards")
);

searchMovie.addEventListener("click", () => {
  getMovieData(movie.value);
  movie.value = "";
  if (cards.childNodes[1]) cards.removeChild(cards.childNodes[1]);
});

getRuntime();

const sumBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.querySelector(".sum-btn")
);
sumBtn.addEventListener("click", () => {
  getPopulation();
});
