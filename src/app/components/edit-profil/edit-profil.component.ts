import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PhotoBoardService } from '../../services/photo-board.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  userReceveid: Array<any>;

  constructor(private photoBoardService: PhotoBoardService) { }

  ngOnInit() {/*
    this.photoBoardService.getAll().subscribe(data => {
      this.userReceveid = data;
      console.log(this.userReceveid);
    })*/
  }

}