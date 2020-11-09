import { Component, OnInit } from '@angular/core';
import {WorkerInfoService} from '../services/services/workerInfo/worker-info.service';
import { ParamsObj} from '../models/wonkaInfo.models';
import {WonkaInfo} from '../models/wonkaInfo.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wonkadescription',
  templateUrl: './wonkadescription.component.html',
  styleUrls: ['./wonkadescription.component.scss']
})
export class WonkadescriptionComponent implements OnInit {

  public id:String;
  wonkaWorkerInfo: WonkaInfo;
  information: any[];

  constructor(
    private route: ActivatedRoute,
    private WorkerInfoService:WorkerInfoService,
  ) { }

  

 public async getWorkerInfo(id){
    this.id = this.route.snapshot.paramMap.get('pId');
    const workerInfoFromService = await this.WorkerInfoService.getWonkaWorkerInfo(this.id);

    const params:ParamsObj = {
      age:workerInfoFromService.age,
      first_name:workerInfoFromService.first_name,
      image:workerInfoFromService.image,
      description:workerInfoFromService.description
    }

    this.wonkaWorkerInfo = new WonkaInfo(params)
    console.log(this.wonkaWorkerInfo)
  }

  ngOnInit(): void {
    this.getWorkerInfo(this.id)
  }

}
