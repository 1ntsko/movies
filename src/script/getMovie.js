export async function getMovie(movie) {
  const response = await fetch(
    `http://www.omdbapi.com/?t=${movie}&apikey=3bc9dcc7`
  );
  return await response.json();
}
