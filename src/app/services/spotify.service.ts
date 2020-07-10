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
        "Bearer BQA_96-DaiWL4q9rNxh-h_hx5CRM5YJaRKifTK6itprRA8Zgst1QnQV3mWlYSTXO6y4LZVj3cw3EClqRtck",
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
        "Bearer BQA_96-DaiWL4q9rNxh-h_hx5CRM5YJaRKifTK6itprRA8Zgst1QnQV3mWlYSTXO6y4LZVj3cw3EClqRtck",
    });

    return this.http.get(
      "https://api.spotify.com/v1/browse/new-releases?limit=20",
      {
        headers,
      }
    );
  }
}
