import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import Description from '../../components/Description';
import Genre from '../../components/Genre';
import StarRating from '../../components/StarRating/StarRating';
import Status from '../../components/Status';
import Writer from '../../components/Writer';
import { useNavigate, useParams } from 'react-router';
import {ColorRing} from 'react-loader-spinner';


const About = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
	
    const { id } = useParams();

	const getMovieRequest = async () => {
		const url = `https://api.tvmaze.com/shows/${id}`;

		const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson) {
			setMovies(responseJson);
		}

    };
    
    useEffect(() => {
		getMovieRequest();
    }, []);
    
    useEffect(() => {
        localStorage.setItem("moviesData",JSON.stringify(movies));
	},[movies])
    
    const year = movies?.premiered?.slice(0, 4);
    const description = movies?.summary?.replace(/<p>|<b>|/gi,'');

    const rating = movies?.rating?.average;
        
    const handleClick = () => {
        navigate('/');
    }

    const handleBook = () => {
        navigate('/register');
    }



    const LoadingIndicator = () => {
        return  <div
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      ><ColorRing
       visible={true}
       height="80"
       width="80"
       ariaLabel="blocks-loading"
       wrapperStyle={{}}
       wrapperClass="blocks-wrapper"
       colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
     />
     </div>
          
       };

    return (
        <>      
            {Object.keys(movies).length === 0 ? (
        LoadingIndicator()
         ) :(
                <div className='row mt-2'>
                    <div className='px-5 col-xs-8 col-sm-8 col-md-4 col-lg-5 col-xl-6 px-2 mx-sm-auto mx-md-auto  mt-5'>
                        <h1 className="modal-title title text-white">{movies.name} <span>({year})</span></h1>
                        <Genre genres={movies?.genres} />
                        <div className='mt-2 my-4'>
                            {rating && <StarRating rating={rating?.toFixed(1)} />}
                            {!rating && <span class="badge bg-info">No Rating</span>}
                        </div>
                    
                        <Description description={description} />

                        <div className='mt-5'>
                            <Status data={movies} />
                        </div>                     
                        <Writer data={movies} />
                        <button onClick={handleBook} type="button" class="btn btn-warning mt-2 my-3 mx-2">Book Tickets</button>
                        <button onClick={handleClick} type="button" class="btn btn-dark mt-2 my-3">Home</button>     
                        <div>     
                        </div>
                    </div>

                    <div className='col-xs-6 col-sm-10 col-md-7 col-lg-6 col-xl-5 mt-5 px-5'>
                        <img src={movies?.image?.original} className='img' alt="" />
                    </div>
         
            

                </div>  
         )}        
        </>
            
    )
}

export default About