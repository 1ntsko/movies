import { getMovie } from "./getMovie";

const sumInp = Array.from(
  document.querySelectorAll(
    ".sum-inputs"
  ) as unknown as HTMLCollectionOf<HTMLInputElement>
);
const sumBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.querySelector(".sum-btn")
);
const combinedMinutes: HTMLHeadingElement = <HTMLHeadingElement>(
  document.querySelector(".combined-minutes")
);

export function getRuntime(): void {
  sumBtn.addEventListener("click", () => {
    const minutesArray: number[] = [];
    sumInp.forEach(async (i) => {
      const movie = await getMovie(i.value);
      const runTime = parseInt(movie.Runtime);
      minutesArray.push(runTime);
    });
    return setTimeout(() => {
      const sum = minutesArray.reduce((acc, curr) => acc + curr);
      combinedMinutes.textContent! += sum;
    }, 1000);
  });
}
