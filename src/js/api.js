import{generateApiUrl} from './utils';
import {renderMovie} from './templates';


export const getMovies = (path, selector)=> {
    fetch(generateApiUrl(path))
    .then(res => res.json())
    .then(({results}) => {
        const movies = results.map(movie => renderMovie(movie)).join('');
        console.log(results)
        document.querySelector(selector).insertAdjacentHTML('beforeend', movies)
    })
}

getMovies('popular', '.popular')
getMovies('top_rated', '.top-rated')
getMovies('upcoming', '.upcoming')