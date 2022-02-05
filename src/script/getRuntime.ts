import { getMovie } from "./getMovie";

const sumInp = document.querySelectorAll(".sum-inputs");
const sumBtn = document.querySelector(".sum-btn");
const combinedMinutes = document.querySelector(".combined-minutes");

export function getRuntime() {
  sumBtn.addEventListener("click", () => {
    const minutesArray = [];
    sumInp.forEach(async (i) => {
      const movie = await getMovie(i.value);
      const runTime = parseInt(movie.Runtime);
      minutesArray.push(runTime);
    });
    setTimeout(() => {
      const sum = minutesArray.reduce((acc, curr) => acc + curr);
      combinedMinutes.textContent += sum;
    }, 1000);
  });
}
