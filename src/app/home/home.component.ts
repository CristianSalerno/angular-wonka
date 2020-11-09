import { Component, OnInit } from '@angular/core';
import {GetWorkersService} from '../services/services/workers/get-workers.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  wonkaWorkers: any;
  wonkaWorkersList:any[];
  

  constructor(
    private wonkaWorkerService:GetWorkersService,
    
  ) { }

  async ngOnInit() {
    this.wonkaWorkers = await this.wonkaWorkerService.getWonkaWorkers();
    this.wonkaWorkersList = this.wonkaWorkers?.results
  }

  
}
