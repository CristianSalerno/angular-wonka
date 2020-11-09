import { Component, OnInit } from '@angular/core';
import {WorkerInfoService} from '../services/services/workerInfo/worker-info.service';
import { ParamsObj} from '../models/wonkaInfo.models';
import {WonkaInfo} from '../models/wonkaInfo.models';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

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
    private spinnerService: NgxSpinnerService
  ) { }

  

 public async getWorkerInfo(){
    this.id = this.route.snapshot.paramMap.get('pId');
    const workerInfoFromService = await this.WorkerInfoService.getWonkaWorkerInfo(this.id);
    
    const params:ParamsObj = {
      age:workerInfoFromService.age,
      first_name:workerInfoFromService.first_name,
      image:workerInfoFromService.image,
      description:workerInfoFromService.description
    }

    this.wonkaWorkerInfo = new WonkaInfo(params)
    
    if (this.wonkaWorkerInfo != null){
      this.spinnerService.hide();
    }
  }

  ngOnInit(): void {
    this.spinner();
    this.getWorkerInfo()
  }

  spinner():void{
    this.spinnerService.show();
  }

}
