import { Component, OnInit } from '@angular/core';
import { PhotoBoardService } from '../../services/photo-board.service';
import { AuthService } from '../../services/AuthService/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Comments } from '../../models/comments';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  isCommented: boolean = false;

  newComment: Comments = {
    id: 'xx',
    firstName: 'david',
    lastName: 'keney',
    comment: null,
  }



  photo: any = [];

  constructor(private photoBoardDataService: PhotoBoardService,
    private route: ActivatedRoute,
    private auth: AuthService) { }

  ngOnInit() {
    this.photo = this.photoBoardDataService.getPhotoByID(
      +this.route.snapshot.params['id']
    );
    console.log(this.photo);

    this.photoBoardDataService.getAll().subscribe(data => console.log(data));


  }


  addComment(event, photo) {
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

}
