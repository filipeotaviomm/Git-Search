import { searchUser, searchUserRepositories } from "./requests.js";

const handleSearch = () => {
  const inputName = document.querySelector(".index__input");
  const buttonSearch = document.querySelector(".index__button");
  const spinnerBow = document.querySelector(".spinner");

  buttonSearch.addEventListener("click", () => {
    spinnerBow.classList.remove("hidden");

    setTimeout(() => {
      const userName = inputName.value;

      searchUser(userName);
      searchUserRepositories(userName);
    }, 2000);
  });
};

handleSearch();
