import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('wonka') wonkaInfo: any;
  @Input('id') id: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  openInfo(){
    console.log(this.id)
    this.router.navigate([`/description/${this.id}`])
  }

}
