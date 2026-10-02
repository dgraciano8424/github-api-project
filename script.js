//
let contentContainer = document.querySelector(".content-container");

// * where the input field and button live
let shaContainer = document.querySelector(".SHA_HASH-container");

// * where people will be putting their sha hash
let input = document.querySelector(".SHA_HASH");
// * container where
let avatarContainer = document.querySelector(".avatar");
let submitBTN = document.querySelector(".submit");

// * listener
submitBTN.addEventListener("click", function () {
  let inputValue = input.value;
  let url = `https://api.github.com/repos/facebook/react/commits/${inputValue}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data, data.author.login, data.author.avatar_url);
      let loginInfo = data.author.login;
      // * let avatarPicSource = data.author.avatar_url;
      let loginInfoElement = document.createElement("div");
      loginInfoElement.insertAdjacentHTML("beforeend", loginInfo);

      avatarContainer.append(loginInfoElement);

      let avatarPic = document.createElement("img");

      avatarPic.src = data.author.avatar_url;
      avatarPic.classList.add("avatarPic");
      console.log(avatarPic);
      avatarContainer.append(avatarPic);
    });

  // * console.log(url);
});

// *  we need to display the users login and avatar url (image) when people enter their SHA_HASH and hit the submit button
// TODO:
//  This is a sample url you'll want to use in your app for getting specific information on a given user: https://api.github.com/repos/facebook/react/commits/e09097a75da040f428ca335e9d181186a61247d1
