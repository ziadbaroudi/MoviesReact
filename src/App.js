import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Navi from "./components/Navi";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default function App() {
  const [showSpinner, setShowSpinner] = useState(false);
  // const [url, setUrl] = useState("");
  const [searched, setSearched] = useState([]);
  const TMDB_BASE_URL = "https://api.themoviedb.org"
  
  const constructUrl = (path, query) => {
    return `${TMDB_BASE_URL}/${path}?api_key=78d25a5f3730fb9c31adbb75ca051bf6&query=${query}`;
  };
  
  let handleQuery = (query) => {
    let path = "3/search/movie"
    let url = constructUrl(path, query)
    // setUrl(url);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setSearched(data)
      });
    
  }

  


  return (
    <div className="App">
      <Navi setShowSpinner={setShowSpinner} handleQuery={handleQuery} />
      <Main showSpinner={showSpinner}  searched={searched}/>
      <Footer />
    </div>
  );
}
