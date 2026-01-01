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
  const details = document.querySelector("#details");
  const detailsContent = document.querySelector(".details-content");
  const closeBtn = document.querySelector("#details .btn-close");

  detailsContent.innerHTML = `
    <div class="game-card row align-items-center">
      <div class="col-md-4">
        <img src="${element.thumbnail}" class="img-fluid rounded">
      </div>
      <div class="col-md-8 text-white">
        <h2>${element.title}</h2>
        <p>${element.description}</p>
      </div>
    </div>
  `;

  details.classList.remove("d-none");
  document.body.style.overflow = "hidden";

  closeBtn.onclick = () => {
    details.classList.add("d-none");
    document.body.style.overflow = "auto";
  };
}

