const input = document.getElementById("search-term");
const searchButton = document.querySelector("button");

const img = document.querySelector("img");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  search(input.value);
});

async function search(val) {
  let s = val ? val : null;
  console.log(s);

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=dLIz1H0BoK2GHHuzRNnTx2CPpUUl9XYk&s=${s}`,
    { mode: "cors" }
  );
  const data = await response.json();
  img.src = data.data.images.original.url;
}

search();
