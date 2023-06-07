import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import MovieList from '../../components/MovieList';


import { useNavigate } from 'react-router';
import { NavBar } from '../../components/navBar';

const Home = () => {
	const [movies, setMovies] = useState([]);
	const [item, setItems] = useState();
	const [id, setId] = useState();

	
	const navigate = useNavigate();

	const getMovies = async () => {
		const url = `https://api.tvmaze.com/search/shows?q=all`;
		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson) {
			setMovies(responseJson);
		}
	};

	useEffect(() => {
		getMovies();
	}, []);

	function clicked(id) {
		setId(id);
		navigate(`/${id}`);
	};


  return (
	  <>
			<NavBar />
		<div className='container-fluid movie-app mt-5'>

			<div className='row d-flex align-items-center mt-4 mb-4'>
				<h1> TV Shows</h1>
			</div>
			<div className='row'>
			  	<MovieList
				  	onClick={clicked}
				  	movies={movies}
				  	setId={setId}
			  	/>
			</div>
		 </div>
		 </>
	);
};

export default Home;
