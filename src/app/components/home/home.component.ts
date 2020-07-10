import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent {
  // paises : any = [];
  // constructor(private http: HttpClient) { }
  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases();
  }

  // ngOnInit() {
  // this.http.get('https://restcountries.eu/rest/v2/lang/es')
  // .subscribe( resp => {
  //   this.paises = resp;
  //   console.log(resp);
  // });
  // }
}
