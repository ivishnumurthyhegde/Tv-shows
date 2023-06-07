import React, { useState } from 'react';
import './MovieList.css'
import Img from '../No_Image_Available.jpg';

const MovieList = (props) => {
	
	return (
		<>
			{props.movies.map((movie, index) => (
				<div key={index} className='image-container d-flex justify-content-start m-3 size mt-5'>
					<img src={movie?.show?.image?.original||Img} onClick={()=>props.onClick(movie?.show?.id)} key={index} alt='movie' className='img-fluid width'></img>
				</div>
			))}
		</>
	);
};

export default MovieList;
