import {getMovies, getMovieDetails, getMovieCast, getSearchedMovie} from './api';

window.addEventListener('hashchange', () =>{
    const {location : {hash}} = window;
    const [,movieId] = hash.split('='); 
    getMovieDetails(movieId, '.root');
    getMovieCast(`${movieId}/credits`, '.root')}
)

const chekUrl = ()=>{
    const {location : {hash}} = window;
    const [hashName,movieId] = hash.split('='); 
    if(hashName === '#movieId'){
        getMovieDetails(movieId, '.root');
        getMovieCast(`${movieId}/credits`, '.root') 
    } else if(hashName === '#search'){
        getSearchedMovie(movieId, '.root');
    } else {
        getMovies('popular', '.root');
        getMovies('top_rated', '.root');
        getMovies('upcoming', '.root');
    }
}

chekUrl()
