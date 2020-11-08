import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class GetWorkersService {



  constructor(private http: HttpClient) { }

  async getWonkaWorkers(){
    return this.http.get("https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=1").toPromise();
  }
}
