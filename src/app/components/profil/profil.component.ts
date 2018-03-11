import { Component, OnInit, ElementRef, NgModule, NgZone, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//maps modules imported
import { AgmCoreModule, MapsAPILoader, AgmMap } from '@agm/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { } from '@types/googlemaps';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})


export class ProfilComponent implements OnInit {
  // file upload
  selectedFile = null;

  //map values
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public formatted_address: string;

  @ViewChild("search")
  public searchElementRef: ElementRef;



  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private http: HttpClient
  ) { }


  ngOnInit() {
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
          //this.zoom = 12;
          console.log(this.formatted_address);
          console.log(this.latitude);
          console.log(this.longitude);
          console.log(this.zoom);



        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        //this.zoom = 14;
      });
    }
  }

  // if user use upload button
  onUploadButton(event) {
    if (event.target.files[0] != undefined) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    }
  }

  // if user use drag and drop
  onDragAndDrop(event) {
    if (event.file != undefined) {
      this.selectedFile = event.file;
      console.log(this.selectedFile);
    }
  }

  onUploadFile() {
    const head = new FormData();
    head.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post("url", head).subscribe(response => {
      console.log(response);
    });
  }

}