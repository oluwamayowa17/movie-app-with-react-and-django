import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Search = ({value, searchFunction, display}) => {
   


  return (
    <>
        <form className="d-flex search mx-4" role="search" onSubmit={display}>
        <input className="form-control me-2" type="search" value={value} onChange={searchFunction} placeholder="Enter Movie Here"/>
          <button className="btn btn-outline-dark " type="submit">
              <i><FontAwesomeIcon icon={faSearch} /></i>
          </button>
        </form>

        
    </>
  )
}

export default Search
