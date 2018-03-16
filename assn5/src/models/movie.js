/*
 * Class to describe a single Movie
 */

export class Movie {
    constructor(title,posterPath,popularity,overview, year) {
        this.title = title;
        this.yearReleased = year;
        this.posterPath = posterPath;
        this.popularity = popularity;
        this.overview = overview;
    }

    getTitle() {
        return this.title;
    }

    getYearReleased() {
        return this.yearReleased;
    }

    getPosterPath(){
        return this.posterPath;
    }

    getPopularity(){
        return this.popularity;
    }

    getOverview(){
        return this.overview;
    }

    getShortOverview(){
        if (this.overview.length > 75){
            return this.overview.substring(0, 75) + "...";
        }
        else{
            return this.overview;
        }
    }
}