import { getCountryData } from "./getCountry";

export function template(movie: any): void {
  const date: number = new Date().getFullYear();
  const actors: string[] = movie.Actors.split(", ")
    .map((x: string) => x.split(" ").slice(0, 1))
    .join(", ");

  const html = `
      <li class="card" id="card_1">
        <div class="card__content">
          <div>
            <h2>${movie.Title}</h2>
            <span>
              <strong>Released:</strong>
              <i class="italic">Movie released ${
                date - movie.Year
              } years ago, in ${movie.Released}</i>
            </span>
            <span><strong>Actors:</strong> <i class="italic">${actors}</i></span>
            <span id="countries">
              <strong>Countries:</strong>
              
              </span>
          </div>
            <figure>
              <img
              src="${movie.Poster}"
              alt="Image description"
              />
            </figure>
      </li>
    `;

  const cards: HTMLUListElement = <HTMLUListElement>(
    document.querySelector("#cards")
  );

  cards.insertAdjacentHTML("afterbegin", html);
  getCountryData(movie);
}
