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
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals } />
      <Row title="Recommended" fetchUrl={requests.fetchRecommended } />
      <Row title="Popular on Netflix" fetchUrl={requests.fetchTopRated } />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies } />
      <Row title="Horror Films" fetchUrl={requests.fetchHorrorMovies } />
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies } />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies } />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries } />
    </div>
  );
}

export default App;
