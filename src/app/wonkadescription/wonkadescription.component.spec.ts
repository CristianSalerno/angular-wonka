import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WonkadescriptionComponent } from './wonkadescription.component';

describe('WonkadescriptionComponent', () => {
  let component: WonkadescriptionComponent;
  let fixture: ComponentFixture<WonkadescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WonkadescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WonkadescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
