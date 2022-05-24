import {generateSearchUrl} from './utils';
import { getSearchedMovie } from './api';

const search = document.querySelector('.search__text');
const searchIcon = document.querySelector('.search-icon');
const searchBtn = document.querySelector('.search__btn');

searchBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(search.value)
    console.log(generateSearchUrl(search.value))
    getSearchedMovie(search.value, '.root');
    window.location.hash = `search=${search.value}`;
})

searchIcon.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(window)
    document.querySelector('form').classList.toggle('search');
    
})



