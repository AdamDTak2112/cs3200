/*
 * Class to describe a single Person
 */

 export class Person{
     constructor(name, popularity, imagePath, birthDate, deathDate, birthPlace, biography, credits){
         this.name = name;
         this.popularity = popularity;
         this.imagePath = imagePath;
         this.birthDate = birthDate;
         this.deathDate = deathDate;
         this.birthPlace = birthPlace;
         this.biography = biography;
         this.credits = credits;
     }

     getName(){
         return this.name;
     }
     getPopularity(){
         return this.popularity;
     }
     getImagePath(){
         return this.imagePath;

     }
     getBirthDate(){
         return this.birthDate;
     }
     getDeathDate(){
         return this.deathDate;
     }
     getBirthPlace(){
         return this.birthPlace;
     }
     getBiography(){
         return this.biography;
     }
     getCredits(){
         return this.credits;
     }
 }