import { generateApiUrl, generateSearchUrl} from './utils';
import { renderMovie, renderErrors, renderMovieDetails, renderMovieCast, renderSearchedMovie} from './templates';
import './burger';
import './search';

export const getMovies = (path, selector) => {
    fetch(generateApiUrl(path))
        .then(res => res.json())
        .then(data => {
            const root = document.querySelector(selector);
            if (data.status_message && data.status_code) {
                const intro = document.querySelector('.intro');
                intro.style.display = 'none';
                root.innerHTML = renderErrors({
                    status_code: data.status_code,
                    status_message: data.status_message
                })
            } else {
                const movies = data.results.map(movie => renderMovie(movie)).join('');
                root.insertAdjacentHTML('beforeend', `
                    <h2>${path.toUpperCase()}</h2>
                    <div class="${path}">${movies}</div>
                 `)
            }
        }
    );
};

export const getMovie = (path, selector) => {
    fetch(generateApiUrl(path))
        .then(res => res.json())
        .then((data) => {
            console.log('data', data);
            const root = document.querySelector(selector);
            if (data.status_message && data.status_code) {
                const intro = document.querySelector('.intro');
                intro.style.display = 'none';
                root.innerHTML = renderErrors({
                    status_code: data.status_code,
                    status_message: data.status_message
                })
            }
        }
    );
};

export const getMovieDetails = (path, selector) => {
    fetch(generateApiUrl(path))
        .then(res => res.json())
        .then((data) => {
            console.log('data', data);
            const root = document.querySelector(selector);
            if (data.status_message && data.status_code) {
                const intro = document.querySelector('.intro');
                intro.style.display = 'none';
                root.innerHTML = renderErrors({
                    status_code: data.status_code,
                    status_message: data.status_message
                })
            } else {
                root.innerHTML = renderMovieDetails(data);
                const intro = document.querySelector('.intro');
                intro.style.display = 'none';
                const main = document.querySelector('main');
                main.classList.remove('container');
                root.style.backgroundColor = '#b8b5b545';
                const details = document.querySelector('.details');
                details.classList.add('container');
            }
        }
    );
};

export const getMovieCast = (path, selector) => {
    fetch(generateApiUrl(path))
        .then(res => res.json())
        .then((data) => {
            const root = document.querySelector(selector);
            if (data.status_message && data.status_code) {
                const intro = document.querySelector('.intro');
                intro.style.display = 'none';
                root.innerHTML = renderErrors({
                    status_code: data.status_code,
                    status_message: data.status_message
                })
            } else {
                console.log(data)
                const cast = data.cast.map(actor => renderMovieCast(actor)).join('');
                root.insertAdjacentHTML('afterend', `<div class="container popular">${cast}</div>`)
            }
        }
    )
};

export const getSearchedMovie = (path, selector) => {
    fetch(generateSearchUrl(path))
        .then(res => res.json())
        .then((data) => {
            const root = document.querySelector(selector);
            if (data.status_code && data.status_message) {
                const intro = document.querySelector('.intro');
                intro.style.display = 'none';
                root.innerHTML = renderErrors({
                    status_code: status_code,
                    status_message: status_message
                })
            } if (data.results.length == 0){
                const intro = document.querySelector('.intro');
                intro.style.display = 'none';
                root.innerHTML = renderErrors({
                    status_code: "Sorry",
                    status_message: "We don`t find movie, try one more time"
                })
            }
            else {
                console.log(data)
                const movies = data.results.map(movie => renderSearchedMovie(movie)).join('');
                root.innerHTML = movies;
                const intro = document.querySelector('.intro');
                intro.style.display = 'none';
            }
        }
    )
}