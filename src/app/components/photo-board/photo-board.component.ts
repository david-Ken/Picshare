import { Component, OnInit } from '@angular/core';
import { photos } from '../../models/photos';
import { Comments } from '../../models/comments';

import { PhotoBoardService } from '../../services/photo-board.service';
import { AuthService } from '../../services/AuthService/auth.service';

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

  constructor(private photoBoardDataService: PhotoBoardService, private auth: AuthService) { }

  ngOnInit() {
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

}
