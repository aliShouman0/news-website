// tags needed
const breakingNews = document.querySelector("#breakingNews");
const trending = document.querySelector("#news");
const sport = document.querySelector("#sport");
const carousel_indicators = document.querySelector("#carousel-indicators");
const carousel_inner = document.querySelector("#carousel-inner");
// api 
const api_sportNews = "http://localhost:3000/backend/sport.php";
const api_breaking_news = "http://localhost:3000/backend/breaking_news.php";
const api_trending = "http://localhost:3000/backend/trending.php";

//sport News
$.getJSON(api_sportNews, function (data) {
  data.forEach((news) => {
    sport.innerHTML += `
     <div class="shadow-lg p-4 mb-5 mx-5 rounded">
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



$.getJSON(api_breaking_news, function (data) {
  for (let i = 0; i < data.length; i++) {
    carousel_indicators.innerHTML += `
    <li data-target="#breakingNews" data-slide-to="${i}"></li> 
    `;
  }
  data.forEach((news, i) => {
    if (i == 0) {
      carousel_inner.innerHTML += ` 
      <div class="carousel-item active">
      <img class="d-block" src="../backend/${news.img}" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
        <h5>${news.title}</h5>
        <p> ${news.txt}</p>
      </div>
    </div>
      `;
    } else {
      carousel_inner.innerHTML += ` 
    <div class="carousel-item  ">
    <img class="d-block" src="../backend/${news.img}" alt="First slide">
    <div class="carousel-caption d-none d-md-block">
      <h5> ${news.title}</h5>
      <p> ${news.txt}</p>
    </div>
  </div>
    `;
    }
  });
});
