import { Component, OnInit, ElementRef, NgModule, NgZone, ViewChild } from '@angular/core';
import { photos } from '../../models/photos';
import { Comments } from '../../models/comments';
import { HttpClient } from '@angular/common/http';
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
  selectedFile = null;
  newPicture: any;
  newPictureDescription = '';
  newPictureLocation = '';
  newImageUploaded = '';


  newComment: Comments = {
    id: this.generateID(),
    firstName: 'david',
    lastName: 'keney',
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
    private ngZone: NgZone, private http: HttpClient) { }


  ngOnInit() {

    //google maps setup
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
        });
      });
    });


    this.photoBoardDataService.getPhotoboard().subscribe(data => {
      this.photoboard = data;
    });
  }

  addComment(event, photo: photos) {
    this.photoBoardDataService.comments = this.newComment;
    this.photoBoardDataService.commentedPhoto = photo;

    // Enter keyboard code == 13
    if (event.charCode == 13) {
      this.photoBoardDataService.addNewComment(this.photoBoardDataService.comments, this.photoBoardDataService.commentedPhoto);
      this.newComment = {
        id: 'xx',
        firstName: 'david',
        lastName: 'keney',
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
      });
    }
  }

  onLoadResizeMap() {
    this.map.triggerResize();
    console.log("done");
  }



  // if user use drag or upload button
  onDragAndDrop(event) {
    if (event.file) {
      this.selectedFile = <File>event.file;
      this.newImageUploaded = this.selectedFile.name;
    }

  }


  onUploadFile() {
    const head = new FormData();
    head.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post("url", head).subscribe(response => {
      console.log(response);
    });
  }

  uploadPicTure() {
    this.newPicture = {
      id: this.newComment.id,
      numTest: this.photoboard.length + 1,
      firstName: this.newComment.firstName,
      lastName: this.newComment.lastName,
      pseudo: this.newComment.pseudo,
      profilPhoto: 'icon01.jpg',
      online: '2 secondes',
      location: this.formatted_address,
      description: this.newPictureDescription,
      like: false,
      image: this.newImageUploaded,
      likeNumber: 0,
      commentNumber: 0,
      shareNumber: 0,
      comments: []
    }

    this.photoBoardDataService.addNewPhoto(this.newPicture);
    // reset input after submit
    this.newPictureDescription = '';
    this.formatted_address = '';

  }

  generateID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
