
import { useState } from "react";
import Search from "./Search";
import { NavLink } from 'react-router-dom';


function Header({ name, value, search, display }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <h1 className="logo">Movie <span>Land</span> </h1>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul  className="navbar-nav app-navbar me-auto mb-2 mb-lg-0">
            {name.map((item, index) => {
              return (
                <li key={index}
                  onClick={()=>{
                      setCurrentIndex(index)
                  }}
                  
                >
                  <NavLink to={item} activeClassName={index === currentIndex ? "active" : null}>{item}</NavLink>
                </li>
              );
            })}
          </ul>

          <Search value={value} searchFunction={search} display={display}/>
        </div>
      </nav>
    </>
  );
}

export default Header;
