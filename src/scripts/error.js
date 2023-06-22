const newSearchButton = () => {
  const button = document.querySelector(".error__div-first > button");

  button.addEventListener("click", () => {
    location.replace("../../");
  });
};

newSearchButton();
