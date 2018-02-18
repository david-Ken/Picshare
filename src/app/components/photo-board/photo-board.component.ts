import { Component, OnInit } from '@angular/core';
import { photos } from '../../models/photos';
import { Comments } from '../../models/comments';

import { PhotoBoardService } from '../../services/photo-board.service';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.css']
})

export class PhotoBoardComponent implements OnInit {
  photoboard: photos[];
  testt: boolean = false;

  newComment: Comments = {
    firstName: 'black',
    lastName: 'panther',
    comment: null,
  }

  constructor(private photoBoardDataService: PhotoBoardService) { }

  ngOnInit() {
    this.photoboard = this.photoBoardDataService.getPhotoboard();
    console.log(this.newComment);
  }

  addComment(event) {
    this.photoBoardDataService.comments = this.newComment;
    // Enter keyboard code == 13
    if (event.charCode == 13) {
      this.photoBoardDataService.addNewComment(this.photoBoardDataService.comments);
    }


  }

}
