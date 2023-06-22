export const searchUser = async (userName) => {
  const currentUser = await fetch(`https://api.github.com/users/${userName}`, {
    method: "GET",
  })
    .then(async (response) => {
      if (response.ok) {
        const responseUser = await response.json();
        localStorage.setItem("user", JSON.stringify(responseUser));
      } else {
        location.replace("./src/pages/error.html");
        throw new Error("Usuário não encontrado");
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return currentUser;
};

export const searchUserRepositories = async (userName) => {
  const repositories = await fetch(
    `https://api.github.com/users/${userName}/repos`,
    {
      method: "GET",
    }
  )
    .then(async (response) => {
      if (response.ok) {
        const repositories = await response.json();
        localStorage.setItem("repositories", JSON.stringify(repositories));
        location.replace("./src/pages/profile.html");
      } else {
        throw new Error("Nenhum repositório existente");
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return repositories;
};
