let contentContainer = document.querySelector(".content-container");

let shaContainer = document.querySelector(".SHA_HASH-container");

let input = document.querySelector(".SHA_HASH");

let submitBTN = document.querySelector(".submit");

submitBTN.addEventListener("click", function () {
  let inputValue = input.value;
  let url = `https://api.github.com/repos/facebook/react/commits/${inputValue}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data, data.author.login, data.author.avatar_url)).then;
  console.log(url);
});
`Login: ${data.author.login} 
`;
