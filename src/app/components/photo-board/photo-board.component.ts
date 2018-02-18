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
    id: 'xx',
    firstName: 'black',
    lastName: 'panther',
    comment: null,
  }

  constructor(private photoBoardDataService: PhotoBoardService) { }

  ngOnInit() {

    this.photoBoardDataService.getPhotoboard().subscribe(data => {
      this.photoboard = data;
    });

    console.log(this.newComment);
  }

  addComment(event) {
    this.photoBoardDataService.comments = this.newComment;
    // Enter keyboard code == 13
    if (event.charCode == 13) {
      this.photoBoardDataService.addNewComment(this.photoBoardDataService.comments);

      this.newComment = {
        id: 'xx',
        firstName: 'black',
        lastName: 'panther',
        comment: null,
      }
    }


  }

}
