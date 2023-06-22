export const renderUserHeader = (user) => {
  const tagHeader = document.querySelector(".profile__header");

  tagHeader.innerHTML = "";

  tagHeader.insertAdjacentHTML(
    "beforeend",
    `
        <div class="profile_div">
          <img src="${user.avatar_url}" alt="user" />
          <p>${user.name}</p>
        </div>
        <button>Trocar de usuário</button>   
  `
  );
};

export const renderUserRepositories = (repositories) => {
  const ulProfile = document.querySelector(".profile__ul");

  ulProfile.innerHTML = "";

  repositories.forEach(({ name, description, html_url }) => {
    // const descriptionProject =
    //   description !== null ? description : "Repositório sem descrição";
    if (description === null) {
      description = "Repositório sem descrição";
    }

    ulProfile.insertAdjacentHTML(
      "beforeend",
      `
      <li>
        <h4>${name}</h4>
        <p>${description}</p>
        <a href="${html_url}" target="_blank">Repositório</a>
      </li>
      `
    );
  });
};
