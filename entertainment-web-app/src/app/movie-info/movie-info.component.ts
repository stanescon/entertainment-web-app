import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  favoritos = localStorage.getItem('favoritos') ? localStorage.getItem('favoritos') : ''
  arrFav = this.favoritos ? this.favoritos.split(',') : []
  ver = localStorage.getItem('ver') ? localStorage.getItem('ver') : ''
  arrVer = this.ver ? this.ver.split(',') : []
  verificacaoFav = false
  verificacaoVer = false




  constructor(
    private router: ActivatedRoute,
    private http: HttpClient,
    private router2: Router
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.imdbId = this.router.snapshot.params['imdbId'];

    this.http.get('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=c486dfa0652725b2074f5636af14ea12&language=pt-BR')
    .subscribe((response: any) => {
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
      this.actors = response.Actors;
      this.director = response.Director;
      this.rottenTomatoesEvaluation = response?.Ratings[1]?.Value;
      this.runtime = response.Runtime
    })

    console.log(this.arrFav)
    console.log(this.favoritos)

    if(this.arrFav.includes(this.id)){
      this.verificacaoFav = true
    }


  }

  salvarFavoritos(){
    this.arrFav?.push(this.id)
    localStorage.setItem('favoritos', (this.arrFav).toString())
    this.verificacaoFav = true
    console.log(this.arrFav)
  }

  tirarDosFavoritos(){
    this.arrFav = this.arrFav.filter((id) => id != this.id)
    localStorage.setItem('favoritos', (this.arrFav).toString())
    this.verificacaoFav = false
    console.log(this.arrFav)

  }

  salvarVer(){
    this.arrVer?.push(this.id)
    localStorage.setItem('ver', (this.arrVer).toString())
    this.verificacaoVer = true
    console.log(this.arrVer)
  }

  tirarVer(){
    this.arrVer = this.arrVer.filter((id) => id != this.id)
    localStorage.setItem('ver', (this.arrVer).toString())
    this.verificacaoVer = false
    console.log(this.arrVer)
  }

  voltar(){
    this.router2.navigate(['main'])
  }

}
