const breaking_news = document.querySelector("#breaking_news");
const trending = document.querySelector("#news");
const sport = document.querySelector("#sport");
const api_sportNews = "http://localhost:3000/backend/sport.php";
const api_breaking_news = "http://localhost:3000/backend/sport.php";
const api_trending = "http://localhost:3000/backend/trending.php";

$.getJSON(api_sportNews, function (data) {
  data.forEach((news) => {
    sport.innerHTML += `
     <div class="shadow-lg p-4 mb-5  rounded">
    ${news.txt}
    </div>
    `;
  });
});

$.getJSON(api_trending, function (data) {
  data.forEach((news) => {
    trending.innerHTML += `
       <div class="col-12 col-md-4 my-2">
       <div class="card" style="width: 18rem;"> 
      <img src="../backend/${news.img}" class="card-img-top" alt="...">
      <div class="card-body">
         <p class="card-text">
          ${news.txt}.</p>
          </div>
          </div>
           </div>
          `;
  });
});
