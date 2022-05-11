export const renderMovie = ({poster_path, original_title, release_date, vote_average}) => (`
        <div class="popular__item">
            <img class="popular__image" src="https://image.tmdb.org/t/p/original${poster_path}" alt="${original_title}">
            <p class="circle">${vote_average}</p>
            <div class="popular__title">${original_title}</div>
            <div class="popular__date">${release_date}</div>
            
        </div>
`)


