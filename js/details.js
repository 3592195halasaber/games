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
  let details = document.querySelector("#details");
  let detailsContent = document.querySelector(".details-content");
  const closeBtn = document.querySelector("#details .btn-close");

  let blackBox = `
    <div class="game-card row align-items-center h-100">
      <div class="col-md-4 game-img">
        <img src="${element.thumbnail}" class="img-fluid rounded" alt="${element.title}">
      </div>
      
      <div class="col-md-8 text-white game-info">
        <h2 class="game-title mb-3">${element.title}</h2>
        
        <div class="mb-3">
          <p class="mb-1">Category:
            <span class="badge bg-info text-black ms-2">${element.genre}</span>
          </p>
          <p class="mb-1">Platform:
            <span class="badge bg-info text-black ms-2">${element.platform}</span>
          </p>
          <p class="mb-3">Status:
            <span class="badge bg-info text-black ms-2">${element.status}</span>
          </p>
        </div>
        
        <p class="game-desc mb-4">${element.description}</p>
        
        <a href="${element.freetogame_profile_url}" target="_blank"
           class="btn btn-outline-warning btn-lg game-btn">
           🎮 Show Game
        </a>
      </div>
    </div>
  `;

  detailsContent.innerHTML = blackBox;
  details.classList.remove("d-none");
  document.body.style.overflow = "hidden"; // منع التمرير خلف الـ overlay

  closeBtn.addEventListener("click", () => {
    details.classList.add("d-none");
    document.body.style.overflow = "auto"; // إعادة التمرير
  });

  // إغلاق الـ overlay عند النقر خارج المحتوى
  details.addEventListener("click", (e) => {
    if (e.target === details) {
      details.classList.add("d-none");
      document.body.style.overflow = "auto";
    }
  });
}
