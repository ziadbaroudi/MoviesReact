import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Navi from "./components/Navi";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default function App() {
  const [showSpinner, setShowSpinner] = useState(true);
  // const [url, setUrl] = useState("");
  const [searched, setSearched] = useState([]);
  const[genre, setGenre] = useState([])
  const TMDB_BASE_URL = "https://api.themoviedb.org"
  
  const constructUrl = (path, query) => {
    return `${TMDB_BASE_URL}/${path}?api_key=78d25a5f3730fb9c31adbb75ca051bf6&query=${query}`;
  };
  
  let handleQuery = (query) => {
    let path = "3/search/movie"
    let url = constructUrl(path, query)
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setShowSpinner(false)
        setSearched(data)
      });
  }

  let fetchGenre = () => {
    let path = "3/genre/movie/list"
    let url = `${TMDB_BASE_URL}/${path}?api_key=78d25a5f3730fb9c31adbb75ca051bf6`
    console.log(url)
    fetch(url)
    .then((resp)=> resp.json())
    .then((data)=>{
      // console.log(data)
      setGenre(data)}
      )
  } 



  return (
    <div className="App">
      <Navi setShowSpinner={setShowSpinner} fetchGenre = {fetchGenre} handleQuery={handleQuery} genre={genre}/>
      <Main showSpinner={showSpinner} searched={searched}/>
      <Footer />
    </div>
  );
}



