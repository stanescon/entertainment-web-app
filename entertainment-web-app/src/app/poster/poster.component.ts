import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  @Input() movieName = ''
  @Input() moviePoster = ''
  @Input() movieYear = ''
  @Input() id = ''

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  movieInfo(){
    this.http.get('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=c486dfa0652725b2074f5636af14ea12&language=pt-BR')
    .subscribe((response: any) => console.log(response.imdb_id))
  }

}
