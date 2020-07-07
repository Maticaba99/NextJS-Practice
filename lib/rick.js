import fetch from "node-fetch";

const URL = "https://rickandmortyapi.com/api/character";

export async function getData() {
  const res = await fetch(URL);
  const data = await res.json;
  const rick = data.results;

  return rick;
}
