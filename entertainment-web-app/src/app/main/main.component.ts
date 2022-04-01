import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movieInformation: any[] = []
  busca = ''
  movieBusca: any[] = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=c486dfa0652725b2074f5636af14ea12&language=pt-BR')
    .subscribe((response: any) => {
      this.movieInformation = response.results
    })
  }

  buscar(event: any){
    console.log(event.target.value)
    this.busca = event.target.value
    this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=c486dfa0652725b2074f5636af14ea12&language=pt-BR&query=${this.busca}&page=1&include_adult=false`)
    .subscribe((response: any) => {
      console.log(response)
      this.movieBusca = response.results
    })
  }

}
