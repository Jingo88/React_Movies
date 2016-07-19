import React from 'react';

import MovieDetailsContainer from '../containers/MovieDetailsContainer';
import Loading from './Loading';

import { singleSearch, multiSearch} from '../helpers/movieHelpers'; 

var styles = {
	posterImage : {
		width: '100%',
		height: '100%'
	},
	details: {
		color: "#009FB7"
	},
	mTitle: {
		color: '#009FB7',
		fontWeight: '700',
		textDecoration: "underline"
	}
}



function MoviePoster(props){
	return props.data === "N/A"
		? <img style={styles.posterImage} className="activator" src="http://www.nyctransitforums.com/forums/fcontent/default.png" />
		: <img style={styles.posterImage} className="activator" src={props.data} />
}

function MovieUI(props){
	var imdbLink = "https://www.imdb.com/title/" + props.data.imdbID
	return(
		<div className="col s12 m4">
			<div className="card large">
				<div className="card-image waves-effect waves-block waves-light">
					<MoviePoster 
						data = {props.data.Poster}/>
				</div>

				<div className="card-content">
		      <span className="card-title activator" style={styles.mTitle}>
		      	{props.data.Title}
		      	<i className="material-icons right">more_vert</i>
		      </span>
				</div>

				<div className="card-action" style={styles.details}>
					<a href={"https://www.imdb.com/title/"+ props.data.imdbID} target="_blank">IMDB Link</a>
				</div>

				<MovieDetailsContainer data={props.data} />
				
			</div>
		</div>
	)
}

function EachMovie(props){
	return (
		<div className="row">
			{props.data.map(function(movie){
				return <MovieUI 
								data={movie}/>
			})}
		</div>
	)
}

function MovieList(props){
	return props.loading === true
		? <Loading />
		: <div className = "container">
				<EachMovie data = {props.moviesInfo}/>
			</div>
}

module.exports = MovieList;
