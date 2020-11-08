import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class WorkerInfoService {

  constructor(private http: HttpClient) { }



  async getWonkaWorkerInfo(id):Promise<any> {
    return this.http.get( `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`).toPromise();
  }

}
