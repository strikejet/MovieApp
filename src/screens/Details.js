
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

function Details()
{
    var {id} = useParams();
    debugger;

    const [movieDetails, setMovieDetails] = useState({
                                                        ID: 0,
                                                        Title: "",
                                                        Description: "",
                                                        cast:  [],
                                                        genre: "",
                                                        url: ""                    
                                            })
    useEffect(()=>{
        debugger;
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && 
               helper.status == 200)
            {   
                debugger;
                var dataReceived = 
                        JSON.parse(helper.responseText);
                console.log(dataReceived);
                setMovieDetails(dataReceived);
            }
        };
        helper.open("GET", 
                  `http://localhost:3000/data/${id}.json`);
        helper.setRequestHeader("Content-Type","application/json");
        helper.send();
    }, []);

    return <div className = 'table-responsive'>
            
                <table className = 'table table-bordered'>
                    <tbody>
                        <tr>
                            <td><h3 className = 'alert alert-warning'>{movieDetails.Title}</h3></td>
                        </tr>
                        <tr>
                        <td className='text-justify'>
                            <p>{movieDetails.Description}</p>
                        </td>
                        </tr>
                        <tr>
                            <td className = 'text-justify'>
                                Genre:{movieDetails.genre}<br></br><br></br>
                                Actors: <ul>
                                        {movieDetails.cast.map((actor)=>{
                                            return <li>{actor}</li>
                                        })}
                                    </ul> 
                            </td>
                        </tr>
                        <tr>
                            <td className = 'text-justify'>
                                <video src={movieDetails.url} style={{height: 200, width: 200}}></video>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
}

export default Details;