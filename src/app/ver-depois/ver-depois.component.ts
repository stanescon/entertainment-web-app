import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-depois',
  templateUrl: './ver-depois.component.html',
  styleUrls: ['./ver-depois.component.css']
})
export class VerDepoisComponent implements OnInit {

  verDepois = localStorage.getItem('ver');
  arrId = this.verDepois ? this.verDepois.split(',') : []
  arrVer: any[] = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.arrId.forEach(id => {
      this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=c486dfa0652725b2074f5636af14ea12&language=pt-BR')
      .subscribe((response: any) => this.arrVer.push(response))
    });
  }

}
