import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  favoritos = localStorage.getItem('favoritos');
  arrId = this.favoritos ? this.favoritos.split(',') : []
  arrFav: any[] = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.arrId.forEach(id => {
      this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=c486dfa0652725b2074f5636af14ea12&language=pt-BR')
      .subscribe((response: any) => this.arrFav.push(response))
    });
  }

}
