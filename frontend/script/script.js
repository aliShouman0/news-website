const sport = document.querySelector("#breaking_news");
const sport = document.querySelector("#trending");
const sport = document.querySelector("#sport");
const api_sportNews = "http://localhost:3000/backend/sport.php";
const api_breaking_news = "http://localhost:3000/backend/sport.php";
const api_trending= "http://localhost:3000/backend/sport.php";

$.getJSON(api_sportNews, function (data) { 
  data.forEach((news) => {
    sport.innerHTML += `
     <div class="shadow-lg p-4 mb-5  rounded">
    ${news.txt}
    </div>
    `;
  });
});
