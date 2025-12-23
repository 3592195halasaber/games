import getGames from "./data.js";
export default async function getDetails(id) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bfd7bd8704msh0587e561187321dp1c8f55jsn440963521289",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const api = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
    options
  );
  const result = await api.json();
  displayDetails(result);
}

function displayDetails(element) {
  const gameList = document.querySelector("#gameList");
  let details = document.querySelector(".details-content");
  let showDetails = document.querySelector("#details");
  const closeBtn = document.querySelector(".btn-close");
  let blackBox = `
  <div class="game-card row align-items-center h-100 z-3">
  <div class="col-md-4 game-img">
    <img src="${element.thumbnail}" alt="${element.title}">
  </div>

  <div class="col-md-8 text-white game-info">
    <h3 class="game-title">${element.title}</h3>

    <p>Category:
      <span class="badge bg-info text-black">${element.genre}</span>
    </p>

    <p>Platform:
      <span class="badge bg-info text-black">${element.platform}</span>
    </p>

    <p>Status:
      <span class="badge bg-info text-black">${element.status}</span>
    </p>

    <p class="game-desc">${element.description}</p>

    <a href="${element.freetogame_profile_url}" target="_blank"
       class="btn btn-outline-warning game-btn">
       🎮 Show Game
    </a>
  </div>
</div>

 `;
let footer = document.querySelector("footer");
footer.classList.add("d-none");
  details.innerHTML = blackBox;
  showDetails.classList.remove("d-none");
  gameList.classList.add("d-none");
  closeBtn.addEventListener("click", () => {
    showDetails.classList.add("d-none");
    gameList.classList.remove("d-none");
    footer.classList.remove("d-none");
  });
}
