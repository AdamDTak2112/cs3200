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
                console.log(typeof(responseJson.genres));
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
        console.log(genreID);
        return new Promise((resolve, reject) => {
            fetch(apiService.getMoviesFromGenre(genreID, page))
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(typeof(responseJson.results));
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Movie(element.title, element.release_date));
                });
                resolve(items);
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