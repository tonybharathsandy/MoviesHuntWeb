import { useParams } from "react-router-dom"
import { useState, useEffect} from "react"
function MoviesDetails() {
    let params = useParams()
    let [movie, setMovie] = useState([])
        let apiKey = "b3e0a5a56c6255f3768a75efed8a036b"
    let url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`
    useEffect(() => {
     async  function dataFetch(){
          fetch(url) .then((response) => response.json()).then((response) => setMovie(response))
       }
       dataFetch()
    })

    useEffect(() => {
        document.title = movie.title
    })
    let image = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    console.log(movie)
    // let category = movie.genres
    // // console.log(category)
    let times;
    function hours(){
        if(movie.runtime > 60){
           times =  movie.runtime / 60
        }
    }
    hours()
    console.log(times)

  return (
    <>
        <div className="container" style={{height:"65vh", marginTop:"60px"}} >
        <div className="container-fluid " style={{boxShadow:"0px 0px 10px grey", borderRadius:"5px", padding:"40px", display:"flex", gap:"60px"}}>
        <div className="col-5" style={{width:"300px", height:"300px", boxShadow:"0px 0px 10px grey"}}>
                <img style={{width:"300px", height:"300px"}} src={image}/>
                </div>
                <div>
                <div>
                <h2>{movie.title}</h2>
                </div>
                <div>
                <p>
                {/* {category.map((value) => (
                        <span style={{backgroundColor:"grey"}} key={value.id}>{value.name} </span>
                    ))} */}
                </p>
                </div>

                    <div>
                        <p>{movie.overview}</p>
                    </div>
                    <div>
                        <span>⭐ {movie.vote_average}</span>
                    </div>
                    <div>
                    <table className="table w-50">
                            <thead>
                                <tr>
                                <th scope="col">Run Time</th>
                                <td scope="col">{movie.runtime} minutes</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">Budget</th>
                                <td>{movie.budget}</td>
                                </tr>
                                <tr>
                                <th scope="row">Revenue</th>
                                <td>{movie.revenue}</td>
                                
                                </tr>
                                <tr>
                                <th scope="row">Relese Date</th>
                                <td>{movie.release_date}</td>
                                </tr>
                            </tbody>
                            </table>
                </div>
                <a href={`https://www.imdb.com/title/${movie.imdb_id}`} style={{backgroundColor:"orange", color:"white", textDecoration:"none", padding:"5px 10px", borderRadius:"5px"}} target="_blank" >IMDB</a>
         </div>
        </div>
            
        </div>
    </>
  )
}

export default MoviesDetails