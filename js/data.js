import getDetails from "./details.js";

let data = document.querySelector("#data .row");
export default async function getGames(cat) {
  const loadingIndicator = document.getElementById("loadingIndicator");

  try {
    loadingIndicator.style.display = "block";

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "bfd7bd8704msh0587e561187321dp1c8f55jsn440963521289",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${
        cat ? cat : "mmorpg"
      }`,
      options
    );
    const result = await api.json();
    displayGames(result);
  } catch (error) {
    console.error("Error fetching details:", error);
  } finally {
    loadingIndicator.style.display = "none";
  }

}

function displayGames(list) {
  const showGames = document.querySelector("#data .row");
  let dataBox = "";
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    dataBox += ` <div class="col-md-3">
        <div class="card  bg-transparent text-white" data-id="${element.id}">
          <img src="${element.thumbnail}" class="card-img-top  " alt="...">
          <div class="card-body position-relative">
            <h3 class="card-title ">${element.title}</h3>
            <h5><span class="badge position-absolute">Free</span></h5>
            <p class="card-text">${element.short_description}</p>
          </div>
          <div class="card-footer bg-transparent d-flex justify-content-between">
            <span class="badge ">${element.genre}</span>
            <span class="badge ">${element.platform}</span>
          </div>
        </div>
      </div>`;
  }

  showGames.innerHTML = dataBox;
  showGames.addEventListener("click", (event) => {
    const card = event.target.closest(".card");
    if (card) {
      getDetails(card.getAttribute("data-id"));
    }
  });
}
