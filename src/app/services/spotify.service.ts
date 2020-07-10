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
        "Bearer BQDFt3vwTBelsTPbTjzn97TMxJnOSI026S8dfahq_aF3SANE1rsHrFt0f7UEAFHw3jpRlCJLi1SANvL-lu0",
    });

    this.http
      .get("https://api.spotify.com/v1/browse/new-releases?limit=20", {
        headers,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
