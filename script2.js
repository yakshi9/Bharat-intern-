const api="05cf4d185422844890d6b60b35a39566";

// base url of the site
const base_url="https://api.themoviedb.org/3";
const banner_url="https://image.tmdb.org/t/p/original";
const image_url="https://image.tmdb.org/t/p/w300";

const requests={
    fetchTrending:`${base_url}/trending/all/week?${api}&languages=en-useAccordionButton`,
    fetchNetflix:`${base_url}/discover/tv?${api}&with_networks=213`,
    fetchAction:`${base_url}/discover/movies?${api}&with_genres=28`,
    fetchComedy:`${base_url}/discover/movies?${api}&with_genres=35`,
    fetchHorror:`${base_url}/discover/movies?${api}&with_genres=27`,
    fetchRomance:`${base_url}/discover/movies?${api}&with_genres=10749`,

}
function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"....":str;
}
//banner
fetch(requests.fetchNetflix)
.then((res)=>res.json())

.then((data)=>{
    console.log(data.results);

    const setMovie=
    data.results[Math.floor(Math.random()*data.results.length-1)];
    
    var banner=document.getElementById("banner");
    var banner_title=document.getElementById("banner_title");
    var banner_desc=document.getElementById("banner_discription");

    banner.style.backgroundImage=
    "url("+banner_url+setMovie.backdrop_path+")";
    banner_desc.innerText=truncate(setMovie.overview,150);
    banner_title.innerText=setMovie.name;
});

fetch(request.fetchNetflix)
.then((res)=>res.json);

then((data)=>{
   const headrow= document.getElementById("headrow");
   const row=document.createElement("div");

   row.className="row";
   row.classList.add("netflixrow");

   headrow.appendChild(row);

   const title=document.createElement("h2");

   title.className="row_title";
   title.innerText="NETFLIX ORIGINALS";

   row.appendchile(title);

   const row_posters=document.createElement("img");
   row_posters.className="row_posterLarge";

   var s=movie.name.replace(/\s+/g,"");

   poster.id=s;
   poster.src=image_url+movie.poster_path;
   row_posters.appendChild(poster);
});
// top rated
fetch(requests.fetchTrending)
.then((res)=>res.json())
.then((data)=>{
  const headrow=document.getElementById("headrow");
  const row=document.createElement("div");
  row.className="row";
  headrow.appendChild(row);
  const title=document.createElement("h2");
  title.className="row_title";
  title.innerText="Top rated";

  row.appendChild(title);
  const row_posters=document.createElement("div");
  row_posters.className="row_posters";
  row.appendChild(row_posters);

  data.results.forEach((movie)=>{
    console.log(movie);
    const poster=document.createElement("img");
    poster.className="row_posterLarge";
    var s2=movie.id;
    poster.id=s2;
    poster.src=image_url+movie.poster_path;
    row_posters.appendChild(poster);

  });
});
// netflix
fetch(requests.fetchNetflix)
.then((res)=>res.json())
.then((data)=>{
  const headrow=document.getElementById("headrow");
  const row=document.createElement("div");
  row.className="row";
  row.classList.add("netflix originals");
  headrow.appendChild(row);
  const title=document.createElement("h2");
  title.className="row_title";
  title.innerText="Top rated";

  row.appendChild(title);
  const row_posters=document.createElement("div");
  row_posters.className="row_posters";
  row.appendChild(row_posters);

  data.results.forEach((movie)=>{
    console.log(movie);
    const poster=document.createElement("img");
    poster.className="row_posterLarge";
    var s2=movie.id;
    poster.id=s2;
    poster.src=image_url+movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});
//action
fetch(requests.fetchAction)
.then((res)=>res.json())
.then((data)=>{
  const headrow=document.getElementById("headrow");
  const row=document.createElement("div");
  row.className="row";
  headrow.appendChild(row);
  const title=document.createElement("h2");
  title.className="row_title";
  title.innerText="action movie";

  row.appendChild(title);
  const row_posters=document.createElement("div");
  row_posters.className="row_posters";
  row.appendChild(row_posters);

  data.results.forEach((movie)=>{
    console.log(movie);
    const poster=document.createElement("img");
    poster.className="row_posterLarge";
    var s2=movie.id;
    poster.id=s2;
    poster.src=image_url+movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});
// comedy
fetch(requests.fetchComedy)
.then((res)=>res.json())
.then((data)=>{
  const headrow=document.getElementById("headrow");
  const row=document.createElement("div");
  row.className="row";
  headrow.appendChild(row);
  const title=document.createElement("h2");
  title.className="row_title";
  title.innerText="comedy movies";

  row.appendChild(title);
  const row_posters=document.createElement("div");
  row_posters.className="row_posters";
  row.appendChild(row_posters);

  data.results.forEach((movie)=>{
    console.log(movie);
    const poster=document.createElement("img");
    poster.className="row_posterLarge";
    var s2=movie.id;
    poster.id=s2;
    poster.src=image_url+movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});
// horror
fetch(requests.fetchHorror)
.then((res)=>res.json())
.then((data)=>{
  const headrow=document.getElementById("headrow");
  const row=document.createElement("div");
  row.className="row";
  headrow.appendChild(row);
  const title=document.createElement("h2");
  title.className="row_title";
  title.innerText="Horror movies";

  row.appendChild(title);
  const row_posters=document.createElement("div");
  row_posters.className="row_posters";
  row.appendChild(row_posters);

  data.results.forEach((movie)=>{
    console.log(movie);
    const poster=document.createElement("img");
    poster.className="row_posterLarge";
    var s2=movie.id;
    poster.id=s2;
    poster.src=image_url+movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});
// romance
fetch(requests.fetchRomance)
.then((res)=>res.json())
.then((data)=>{
  const headrow=document.getElementById("headrow");
  const row=document.createElement("div");
  row.className="row";
  headrow.appendChild(row);
  const title=document.createElement("h2");
  title.className="row_title";
  title.innerText="Romantic movie";

  row.appendChild(title);
  const row_posters=document.createElement("div");
  row_posters.className="row_posters";
  row.appendChild(row_posters);

  data.results.forEach((movie)=>{
    console.log(movie);
    const poster=document.createElement("img");
    poster.className="row_posterLarge";
    var s2=movie.id;
    poster.id=s2;
    poster.src=image_url+movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});