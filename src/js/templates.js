import{convertDate, generateImageUrl, convertMinutes} from './utils';

export const renderMovie = ({id, poster_path, original_title, release_date, vote_average}) => (`
    <div class="popular__item">
        <a href="#movieId=${id}">
            <img class="popular__image" src="${generateImageUrl(poster_path)}" alt="${original_title}"></a>
        <p class="circle">${vote_average}</p>
        <a href="#movieId=${id}">
            <p class="popular__title">${original_title}</p>
        </a>
        <p class="popular__date">${convertDate(release_date)}</p>
    </div>
`);

export const renderErrors = ({status_code, status_message})=> (`
    <div class = "error">
        <h2>Status code: ${status_code}</h2>
        <p>Status message: ${status_message}</p>
    </div>
`);

export const renderMovieDetails = ({poster_path, original_title, release_date, vote_average, tagline, overview, runtime}) => (`
    <div class="details">
        <img class="details__image" src="${generateImageUrl(poster_path)}" alt="${original_title}">
        <div class = "details__about">
            <p class="details__title">${original_title}</p>
            <span class="details__date">${convertDate(release_date)}</span>
            <p class="details__tagline">${tagline} <span> ${convertMinutes(runtime)}</span></p>
            <span class="details__vote">${vote_average}</span>
            <p class="details__title">Overview</p>
            <p class="details__overview">${overview}</p>
        </div
    </div>
`);

export const renderMovieCast = ({profile_path, name, character}) => (`
    <div class="container popular__item">
        <img class="popular__image" src="${generateImageUrl(profile_path)}" alt="${name}">
        <p class="popular__title">${name}</p>
        <p class="popular__date">${character}</p>
    </div>
`);

export const renderSearchedMovie = (({id, poster_path, original_title, vote_average, release_date, overview}) => (`
        <div class="searched__item">
            <a href="#movieId=${id}">
                <img class="searched__img" src="${generateImageUrl(poster_path)}" alt="${original_title}">
            </a>
            <div class="searched__desc">
                <a href="#movieId=${id}">
                    <p class="searched__title">${original_title}</p>
                </a>
                <p class="searched__vote">${vote_average}</p>
                <p class="searched__overview">${overview}</p>
                <p class="searched__date">Release date: ${convertDate(release_date)}</p>
            </div>
        </div>
    `))