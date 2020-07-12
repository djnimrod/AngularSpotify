import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({ providedIn: "root" })
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Service Listo");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQAXrSqGulOyUaZ6O6SBYv9aCkPkDcembGzMNblk-nbi3Fzta_6mpGjv5ziAyTYFjMf-KUpALSOsQb_Ib08",
    });
    return this.http.get(url, { headers });
  }
  getNewReleases() {
    // const headers = new HttpHeaders({
    //   Authorization:
    //     "Bearer BQDdkA3lIXb_Y2I3ICYydcBuZppZze9eLDUibkfxviKo9dKwx13gDKzagSNxgqyOJ32rWc5u80Tsikq2Cdc",
    // });

    // return this.http
    //   .get("https://api.spotify.com/v1/browse/new-releases?limit=20", {
    //     headers,
    //   })
    //   .pipe(map((data) => data["albums"].items));
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map((data) => data["albums"].items)
    );
  }

  getArtista(termino: string) {
    // const headers = new HttpHeaders({
    //   Authorization:
    //     "Bearer BQDdkA3lIXb_Y2I3ICYydcBuZppZze9eLDUibkfxviKo9dKwx13gDKzagSNxgqyOJ32rWc5u80Tsikq2Cdc",
    // });

    // return this.http
    //   .get(
    //     `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
    //     {
    //       headers,
    //     }
    //   )
    //   .pipe(map((data) => data["artists"].items));

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => data["artists"].items)
    );
  }
}
