




let ApiService = class ApiService{
    constructor(){
        this.apiProtocol = 'https:';
        this.apiHost = 'api.themoviedb.org/3/';
        this.apiKey = 'b7c73b613f046ca1de5f5bff866ea28f';
        this.language = 'en-US';
        this.includeAdult = 'false';
        this.imageHost = 'image.tmdb.org/t/p';
        this.posterSize = 'w500';
        this.personImageSize = 'w185';
    }

    getGenres(){
       return `${this.apiProtocol}//${this.apiHost}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`;
       
    }

    getMoviesFromGenre(genreID, page){
        
        return `${this.apiProtocol}//${this.apiHost}genre/${genreID}/movies?api_key=${this.apiKey}&language=${this.language}&include_adult=${this.includeAdult}&page=${page}`
    }

    getMovieList(){
       return `${this.apiProtocol}//${this.apiHost}discover/movie?api_key=${this.apiKey}&language=${this.language}&include_adult=${this.includeAdult}&include_video=false`;
    }

    getPosterImage(imagePath){
        return `${this.apiProtocol}//${this.imageHost}/${this.posterSize}/${imagePath}`;
    }

    getMovieSearch(query){
        return `${this.apiProtocol}//${this.apiHost}search/movie?api_key=${this.apiKey}&language=${this.language}&query=${encodeURI(query)}&include_adult=${this.includeAdult}`;
    }

    getPersonSearch(query){
        return `${this.apiProtocol}//${this.apiHost}search/person?api_key=${this.apiKey}&language=${this.language}&query=${encodeURI(query)}&include_adult=${this.includeAdult}`
    }

    getPersonPicture(imagePath){
        return `${this.apiProtocol}//${this.imageHost}/${this.personImageSize}/${imagePath}`;
    }
};

const apiService = new ApiService();
export default apiService;