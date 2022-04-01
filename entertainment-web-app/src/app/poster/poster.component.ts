import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  @Input() movieName = ''
  @Input() moviePoster = ''
  @Input() posterSecundario = ''
  @Input() movieYear = ''
  @Input() id = ''

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  movieInfo(){
    this.http.get('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=c486dfa0652725b2074f5636af14ea12&language=pt-BR')
    .subscribe((response: any) => {
      this.router.navigate(['movie-info', this.id, response.imdb_id])
    })
  }

}
