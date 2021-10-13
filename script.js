const buttonPress = document.querySelector("button");

buttonPress.addEventListener("click", function () {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const liChange = document.querySelector("li");
      const pChange = document.querySelector("p");
      liChange.innerText = data.data[0].quoteText;
      pChange.innerText = data.data[0].quoteAuthor;
    });
});
