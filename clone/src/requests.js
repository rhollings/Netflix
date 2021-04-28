const API_KEY = "46a2dc3e00bfb8d252619a2a4b272d53";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchRecommended: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchAnime: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchWar: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fecthSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchThrillers: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
}

export default requests;