import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  id = ''
  imdbId = ''
  name = ''
  sinopse = ''
  originalName = ''
  poster = ''
  popularReview = ''
  tagline = ''
  date = ''
  actors = ''
  genre = ''
  director = ''
  rottenTomatoesEvaluation = ''
  runtime = ''




  constructor(
    private router: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.router.snapshot.params
    console.log(this.router.snapshot.params)
    this.id = this.router.snapshot.params['id'];
    this.imdbId = this.router.snapshot.params['imdbId'];

    this.http.get('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=c486dfa0652725b2074f5636af14ea12&language=pt-BR')
    .subscribe((response: any) => {
      console.log(response);
      this.name = response.title;
      this.sinopse = response.overview;
      this.originalName = response.original_title;
      this.poster = response.poster_path;
      this.popularReview = response.vote_average;
      this.tagline = response.tagline;
      this.date = response.release_date;
      response.genres.forEach((element: any, index: number, array: any[]) => {
        if(index == array.length - 1){
          this.genre = this.genre + element.name + '.'
        } else {
          this.genre = this.genre + element.name + ', '
        }
      });
    })

    this.http.get('http://www.omdbapi.com/?i=' + this.imdbId + '&apikey=4ee1af46')
    .subscribe((response : any) => {
      console.log(response);
      this.actors = response.Actors;
      this.director = response.Director;
      this.rottenTomatoesEvaluation = response?.Ratings[1]?.Value;
      this.runtime = response.Runtime
    })

  }

}
