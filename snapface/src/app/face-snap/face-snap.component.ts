import { Component, Input, } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent  {
  @Input() FaceSnap!: FaceSnap;
  buttontext! : string;

  ngOnInit(){

    this.buttontext = 'Oh! snap'
  }

  Onsnap(){
    if(this.buttontext === 'Oh! snap'){
      this.FaceSnap.snaps++;
      this.buttontext = 'Oh! unsnap';
    }
    else{
      this.FaceSnap.snaps--;
      this.buttontext = 'Oh! snap';
    }
  }



}
