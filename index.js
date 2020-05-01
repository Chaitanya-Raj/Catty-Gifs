const input = document.getElementById("search-term");
const searchButton = document.querySelector("button");

const img = document.querySelector("img");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  search(input.value);
});

function search(val) {
  let s = val ? val : null;
  console.log(s);

  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=dLIz1H0BoK2GHHuzRNnTx2CPpUUl9XYk&s=${s}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch(function () {
      alert("Error");
    });
}

search();
