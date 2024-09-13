import './App.css'
import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Home from "./components/Home.jsx";
import Blog from './components/Blog.jsx';
import Header from './components/Header.jsx';
import Section from './components/Section.jsx';
import NotFound from './components/NotFound.jsx';




function App() {
  
  const navItems = ['Home', 'About', 'Contact', 'Services', 'Blog']
  const [movie , setMovie] = useState('');
  const [searchResult, setSearchResult] = useState([])

  const handleSearch = (e) => {
    setMovie(e.target.value);
  }
  async function getMovies(e){
    try{
        e.preventDefault()
          const response = await fetch(`http://www.omdbapi.com/?s=${movie}&page=1&apikey=aba97a9b`)
          if(!response.ok){
            throw new Error('Failed to fetch data')
          }
          const data = await response.json()
          setSearchResult(data.Search);
          
      }catch(err){
        console.error(err)
      }
  }

  
  return (
    <div>
      <Header name={navItems} value={movie} search={handleSearch} display={getMovies}/>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      {searchResult.length !== 0 ? <Section name = "Search Result" content={searchResult}/> : null}
      
    </div>
  );
}

export default App;
