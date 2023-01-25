import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService{
 faceSnaps : FaceSnap[] = [
    {
      title:'konany konany',
      description:'ceci est mon prénom',
      imageurl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createDate: new Date(),
      snaps: 100,
      location: 'Paris'

    },
    {
      title:'Image Pro',
      description:'ceci est mon prénom',
      imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createDate: new Date(),
      snaps: 0,
      location: 'ci'

    },
    {
      title:'FRUIT',
      description:'ceci est mon prénom',
      imageurl:'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createDate: new Date(),
      snaps: 0,


    },

  ] ;
}
