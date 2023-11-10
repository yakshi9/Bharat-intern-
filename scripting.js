const api = "05cf4d185422844890d6b60b35a39566";
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const image_url = "https://image.tmdb.org/t/p/w300";

const requests = {
  fetchTrending: `${base_url}/trending/all/week?api_key=${api}&languages=en-us`,
  fetchNetflix: `${base_url}/discover/tv?api_key=${api}&with_networks=213`,
  fetchAction: `${base_url}/discover/movies?api_key=${api}&with_genres=28`,
  fetchComedy: `${base_url}/discover/movies?api_key=${api}&with_genres=35`,
  fetchHorror: `${base_url}/discover/movies?api_key=${api}&with_genres=27`,
  fetchRomance: `${base_url}/discover/movies?api_key=${api}&with_genres=10749`,
};
function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"....":str;
}
//banner
try {
  fetch(requests.fetchNetflix)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);

      const setMovie = data.results[Math.floor(Math.random() * data.results.length)];

      var banner = document.getElementById("banner");
      var banner_title = document.getElementById("banner_title");
      var banner_description = document.getElementById("banner_description");

      banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";
      banner_description.innerText = truncate(setMovie.overview, 150);
      banner_title.innerText = setMovie.name;
    });
} catch (error) {
  console.error("An error occurred:", error);
}

// top rated
fetch(requests.fetchTrending)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Top - rated";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row_posterLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = image_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });
// netflix
fetch(requests.fetchNetflix)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Netflix originals";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row_posterLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = image_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });
// //action
// fetch(requests.fetchAction)
//   .then((res) => res.json())
//   .then((data) => {
//     const headrow = document.getElementById("headrow");
//     const row = document.createElement("div");
//     row.className = "row";
//     headrow.appendChild(row);
//     const title = document.createElement("h2");
//     title.className = "row_title";
//     title.innerText = "Action movie";
//     row.appendChild(title);

//     const row_posters = document.createElement("div");
//     row_posters.className = "row_posters";
//     row.appendChild(row_posters);

//     data.results.forEach((movie) => {
//       console.log(movie);
//       const poster = document.createElement("img");
//       poster.className = "row_posterLarge";
//       var s2 = movie.id;
//       poster.id = s2;
//       poster.src = image_url + movie.poster_path;
//       row_posters.appendChild(poster);
//     });
//   });
// // comedy
// fetch(requests.fetchComedy)
//   .then((res) => res.json())
//   .then((data) => {
//     const headrow = document.getElementById("headrow");
//     const row = document.createElement("div");
//     row.className = "row";
//     headrow.appendChild(row);
//     const title = document.createElement("h2");
//     title.className = "row_title";
//     title.innerText = "Comedy movie";
//     row.appendChild(title);

//     const row_posters = document.createElement("div");
//     row_posters.className = "row_posters";
//     row.appendChild(row_posters);

//     data.results.forEach((movie) => {
//       console.log(movie);
//       const poster = document.createElement("img");
//       poster.className = "row_posterLarge";
//       var s2 = movie.id;
//       poster.id = s2;
//       poster.src = image_url + movie.poster_path;
//       row_posters.appendChild(poster);
//     });
//   });
// // horror
// fetch(requests.fetchHorror)
//   .then((res) => res.json())
//   .then((data) => {
//     const headrow = document.getElementById("headrow");
//     const row = document.createElement("div");
//     row.className = "row";
//     headrow.appendChild(row);
//     const title = document.createElement("h2");
//     title.className = "row_title";
//     title.innerText = "Horror movie";
//     row.appendChild(title);

//     const row_posters = document.createElement("div");
//     row_posters.className = "row_posters";
//     row.appendChild(row_posters);

//     data.results.forEach((movie) => {
//       console.log(movie);
//       const poster = document.createElement("img");
//       poster.className = "row_posterLarge";
//       var s2 = movie.id;
//       poster.id = s2;
//       poster.src = image_url + movie.poster_path;
//       row_posters.appendChild(poster);
//     });
//   });
// // romance
// fetch(requests.fetchRomance)
//   .then((res) => res.json())
//   .then((data) => {
//     const headrow = document.getElementById("headrow");
//     const row = document.createElement("div");
//     row.className = "row";
//     headrow.appendChild(row);
//     const title = document.createElement("h2");
//     title.className = "row_title";
//     title.innerText = "Romantic movie";
//     row.appendChild(title);

//     const row_posters = document.createElement("div");
//     row_posters.className = "row_posters";
//     row.appendChild(row_posters);

//     data.results.forEach((movie) => {
//       console.log(movie);
//       const poster = document.createElement("img");
//       poster.className = "row_posterLarge";
//       var s2 = movie.id;
//       poster.id = s2;
//       poster.src = image_url + movie.poster_path;
//       row_posters.appendChild(poster);
//     });
//   });