import './App.css';
import Row from './Row'; 
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav'

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="For You" fetchUrl={requests.fecthSciFi } isLargeRow />
      <Row title="Recommended" fetchUrl={requests.fetchRecommended } />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals } isLargeRow />
      <Row title="Popular on Netflix" fetchUrl={requests.fetchTopRated } />
      <Row title="Animations" fetchUrl={requests.fetchAnime } />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies } />
      <Row title="TV Shows" fetchUrl={requests.fetchTV } isLargeRow />
      <Row title="Horror Films" fetchUrl={requests.fetchHorrorMovies } />
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies } />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies } />
      <Row title="Mystery" fetchUrl={requests.fetchMystery } />
      <Row title="Nitty Gritty" fetchUrl={requests.fetchCrime } />
      <Row title="Family Movies" fetchUrl={requests.fetchFamily } />
      <Row title="Fantasy" fetchUrl={requests.fetchFantasy } />
      <Row title="War Films" fetchUrl={requests.fetchWar } />
      <Row title="Westerns" fetchUrl={requests.fetchWestern } />
      <Row title="Thrillers" fetchUrl={requests.fetchThrillers } />
    </div>
  );
}

export default App;
