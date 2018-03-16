import apiService from './api.service';
import { Movie } from '../models/movie';
import { Genre } from '../models/genre';

let MovieService = class MovieService {
    constructor(){
    }

    getGenres(){
        return new Promise((resolve, reject) => {
            fetch(apiService.getGenres())
            .then((response) => response.json())
            .then((responseJson) => {
                
                let items = [];
                responseJson.genres.forEach(element => {
                    items.push(new Genre(element.name, element.id));
                });
                resolve(items);
            })
            .catch((error) =>{
                console.error(error);
                reject(error);
            });
        });
    }

    getMovies(genreID, page){
        
        return new Promise((resolve, reject) => {
            fetch(apiService.getMoviesFromGenre(genreID, page))
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(typeof(responseJson.results));
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Movie(element.title, element.poster_path, element.popularity, element.overview, element.release_date));
                });
                resolve(items);
            })
            .catch((error) =>{
                console.error(error);
                reject(error);
            });
        });
    }

    getMovieSearch(query){
        return new Promise((resolve, reject) => {
            fetch(apiService.getMovieSearch(query))
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(typeof(responseJson.results));
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Movie(element.title, element.poster_path, element.popularity, element.overview, element.release_date));
                });
                resolve(items);
            })
            .catch((error) =>{
                console.error(error);
                reject(error);
            });
        }); 
    }

    getPoster(posterPath){
        return new Promise((resolve, reject) => {
            fetch(apiService.getPosterImage(posterPath))
            .then((response) => {
                console.log(typeof(response));
                resolve(response);
            })
            .catch((error) =>{
                console.error(error);
                reject(error);
            });
        });
    }
}

const movieService = new MovieService();
export default movieService;