import { searchUser, searchUserRepositories } from "./requests.js";

const handleSearch = () => {
  const inputName = document.querySelector(".index__input");
  const buttonSearch = document.querySelector(".index__button");

  buttonSearch.addEventListener("click", () => {
    const userName = inputName.value;

    searchUser(userName);
    searchUserRepositories(userName);
  });
};

handleSearch();
