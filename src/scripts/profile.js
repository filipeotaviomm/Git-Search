import { renderUserHeader, renderUserRepositories } from "./render.js";

const showUserProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const repositories = JSON.parse(localStorage.getItem("repositories"));

  renderUserHeader(user);
  renderUserRepositories(repositories);
};

const changeUserButton = () => {
  const button = document.querySelector(".profile__header > button");

  button.addEventListener("click", () => {
    location.replace("../../");
  });
};

showUserProfile();
changeUserButton();
