import { faStar as faStarSolid, faClock, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Card({movies}){


    return(
        <>
            
        {movies.map(function(movie) {
            return  <div className='card' key={movie.imdbID}>

                <div className="details">
                    <div className="left">
                        <p className="name">{movie.Title}</p>
                        <div className="date_quality">
                            <p className="quality">HD</p>
                            <p className="date">{movie.Year}</p>
                        </div>
                        <p className="category">{movie.Type}</p>
                        <div className="info">
                            <div className="rate">
                                <i>

                                <FontAwesomeIcon icon={faStarSolid} />
                                </i>
                                <p>9.2</p>
                            </div>
                            <div className="time">
                                <i>
                                <FontAwesomeIcon icon={faClock} />
                                </i>
                                <p>120min</p>

                            </div>
                        </div>
                        
                    </div>

                    <div className="right">
                            <FontAwesomeIcon icon={faPlay} />

                    </div>

                </div>
                    <img src={movie.Poster} alt="" />
            </div>
            
        })}
    
        </>
    )
}

export default Card