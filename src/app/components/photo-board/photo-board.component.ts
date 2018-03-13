import { Component, OnInit, ElementRef, NgModule, NgZone, ViewChild } from '@angular/core';
import { photos } from '../../models/photos';
import { Comments } from '../../models/comments';

import { PhotoBoardService } from '../../services/photo-board.service';
import { AuthService } from '../../services/AuthService/auth.service';
//maps modules imported
import { AgmCoreModule, MapsAPILoader, AgmMap } from '@agm/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { } from '@types/googlemaps';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.css']
})

export class PhotoBoardComponent implements OnInit {
  profile: any;
  photoboard: photos[];
  isCommented: boolean = false;

  newComment: Comments = {
    id: 'xx',
    firstName: 'black',
    lastName: 'panther',
    comment: null,
  }

  //map values
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public formatted_address: string;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  @ViewChild('map') map: AgmMap



  constructor(private photoBoardDataService: PhotoBoardService,
    private auth: AuthService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {


    /*********************************      Map  **************************************** */
    //set google maps defaults

    this.zoom = 14;
    this.latitude = 45.777222;
    this.longitude = 3.087025;

    //create search FormControl
    this.searchControl = new FormControl();


    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();


          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.formatted_address = place.formatted_address;
          this.zoom = 15;
          console.log(this.formatted_address);
          console.log(this.latitude);
          console.log(this.longitude);
          console.log(this.zoom);



        });
      });
    });


    /*
        if (this.auth.userProfile) {
          this.profile = this.auth.userProfile;
          console.log(this.profile);
        } else {
          this.auth.getProfile((err, profile) => {
            this.profile = profile;
            console.log(this.profile);
          });
        }
    */
    this.photoBoardDataService.getPhotoboard().subscribe(data => {
      this.photoboard = data;
    });

    console.log(this.newComment);
  }

  addComment(event, photo: photos) {
    this.photoBoardDataService.comments = this.newComment;
    this.photoBoardDataService.commentedPhoto = photo;

    // Enter keyboard code == 13
    if (event.charCode == 13) {
      this.photoBoardDataService.addNewComment(this.photoBoardDataService.comments, this.photoBoardDataService.commentedPhoto);
      this.newComment = {
        id: 'xx',
        firstName: 'black',
        lastName: 'panther',
        comment: null,
      }
    }
  }

  setColor(likedPhotoId) {
    this.photoBoardDataService.updateLike(likedPhotoId);
  }

  // map function
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        //this.zoom = 14;
      });
    }
  }

  onLoadResizeMap() {
    this.map.triggerResize();
    console.log("done");
  }
}
