const apiKey = "05cf4d185422844890d6b60b35a39566"; // Replace with your actual API key
const apiUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`;

async function fetchMovies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const movieList = document.getElementById('movie-list');

        data.results.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
                <h2>${movie.title}</h2>
            `;

            movieList.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchMovies();
