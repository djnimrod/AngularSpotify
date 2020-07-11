import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Service Listo");
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQAXJ4RtfQDEdtSx7dmFuvccdGP3XEw43BB_eE4uOf6-BpHp98ir6W0cp_NAb1PEObN2OQM3FMDXdev6hd8",
    });

    return this.http.get(
      "https://api.spotify.com/v1/browse/new-releases?limit=20",
      {
        headers,
      }
    );
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQAXJ4RtfQDEdtSx7dmFuvccdGP3XEw43BB_eE4uOf6-BpHp98ir6W0cp_NAb1PEObN2OQM3FMDXdev6hd8",
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
      {
        headers,
      }
    );
  }
}
