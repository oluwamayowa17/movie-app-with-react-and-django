import Header from "./Header";
import Slider from "./Slider";
import { useEffect, useState } from "react";
import Section from "./Section";





function Home() {
  const navItems = ['Home', 'About', 'Contact', 'Services', 'Blog']

  const [allMovies, setAllMovies] = useState([])

    async function displayMovies(){
        const response = await fetch('http://www.omdbapi.com/?s=Batman&page=1&apikey=aba97a9b')
        const data = await response.json()
        setAllMovies(data.Search);
      }
    
    useEffect(()=>{
      displayMovies()
    }, [])

  const [movie , setMovie] = useState('');
    

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

  const [searchResult, setSearchResult] = useState([])
  

  
  return (
    <div>
      {/* <Header name={navItems} value={movie} search={handleSearch} display={getMovies}/> */}
      <Slider/>
      {/* {searchResult.length !== 0 ? <Section name = "Search Result" content={searchResult}/> : null} */}
      
      <Section name = "Popular Search" content={allMovies}/>

    </div>
  );
}

export default Home;
