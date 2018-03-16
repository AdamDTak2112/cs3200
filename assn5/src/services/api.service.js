




let ApiService = class ApiService{
    constructor(){
        this.apiProtocol = 'https:';
        this.apiHost = 'api.themoviedb.org/3/';
        this.apiKey = 'b7c73b613f046ca1de5f5bff866ea28f';
        this.language = 'en-US';
        this.includeAdult = 'false';
        this.imageHost = 'image.tmdb.org/t/p';
        this.posterSize = 'w150';
    }

    getGenres(){
       return `${this.apiProtocol}//${this.apiHost}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`;
       
    }

    getMoviesFromGenre(genreID, page){
        
        return `${this.apiProtocol}//${this.apiHost}genre/${genreID}/movies?api_key=${this.apiKey}&language=${this.language}&include_adult=${this.includeAdult}&page=${page}`
    }

    getMovieList(){
       return `${this.apiProtocol}//${this.apiHost}discover/movie?api_key=${this.apiKey}&language=${this.language}&include_adult=false&include_video=false`;
    }

    getPosterImage(imagePath){
        return `${this.apiProtocol}//${this.imageHost}/${this.posterSize}/${imagePath}`;
    }
};

const apiService = new ApiService();
export default apiService;