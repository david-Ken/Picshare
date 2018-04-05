import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

import { photos } from '../models/photos';
import { Comments } from '../models/comments';
import { User } from '../models/user';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'/*,
    'Authorization': 'my-auth-token'*/
  })
};

@Injectable()
export class PhotoBoardService {
  server_Address = 'http://localhost:8080';

  photoBoardData: photos[];
  commentedPhoto: photos;
  connectionInfo: any;
  data: Observable<any>;



  comments: Comments = {
    id: 'xx',
    firstName: 'david',
    lastName: 'keney',
    comment: null,
    pseudo: '@DavidKen',
  };

  constructor(private http: HttpClient) {
    this.photoBoardData = [
      {
        id: 'photo1',
        numTest: 1,
        firstName: 'Jessica',
        lastName: 'Jones',
        pseudo: '@JessJones',
        profilPhoto: 'icon02.jpg',
        online: '3 minutes',
        location: 'Los Angeles',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Cumque placeat dolorum, itaque libero error quisquam dolore ipsum ex autem. Sapiente voluptates voluptatibus quos laboriosam .',
        like: false,
        image: 'img.jpg',
        likeNumber: 2,
        commentNumber: 55,
        shareNumber: 10,
        comments: [
          { id: '0x', firstName: 'bertrand', lastName: 'ndayisenga', comment: ' Lorem consectetur ipsum adipisicing dolor sit amet consectetur, adipisicing elit.' },
          { id: '1x', firstName: 'david', lastName: 'keney', comment: 'Lorem ipsum dolor consectetur sit ametipsum dolor adipisicingipsum dolor consectetur .' },
          { id: '2x', firstName: 'marie', lastName: 'pimpy', comment: 'Lorem ipsum dolor sit  consectetur ametipsum dolor ipsum adipisicing dolor consectetur .' }
        ]
      },
      {
        id: 'photo2',
        numTest: 2,
        firstName: 'Axelle',
        lastName: 'Sheeran',
        pseudo: '@blueDream',
        profilPhoto: 'icon01.jpg',
        online: '45 minutes',
        location: 'New  Heaven',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque placeat dolorum, itaque libero error quisquam dolore ipsum ex autem.',
        like: false,
        image: 'img01.jpg',
        likeNumber: 15,
        commentNumber: 10,
        shareNumber: 6,
        comments: [
          { id: '3x', firstName: 'abdel', lastName: 'nasser', comment: ' Lorem ipsum consectetur dolor sit amet adipisicing consectetur, adipisicing elit.' },
          { id: '4x', firstName: 'elena', lastName: 'ibba', comment: 'Lorem ipsum dolor  consectetur sit ametipsum adipisicing dolor ipsum dolor consectetur .' },
          { id: '5x', firstName: 'katia', lastName: 'medjani', comment: 'Lorem ipsum dolor consectetur sit ametipsum dolor adipisicing ipsum dolor consectetur .' }
        ]
      },
      {
        id: 'photo3',
        numTest: 3,
        firstName: 'Rita',
        lastName: 'Ora',
        pseudo: '@Pristina',
        profilPhoto: 'icon03.jpg',
        online: '45 minutes',
        location: 'New  Heaven',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque placeat dolorum, itaque libero error quisquam dolore ipsum ex autem.',
        like: false,
        image: 'img02.jpg',
        likeNumber: 30,
        commentNumber: 45,
        shareNumber: 3,
        comments: [
          { id: '6x', firstName: 'diallo', lastName: 'thierno', comment: ' Lorem ipsum dolor consectetur sit amet consectetur,adipisicing adipisicing elit.' },
          { id: '7x', firstName: 'melchi', lastName: 'nduwayo', comment: 'Lorem ipsum dolor sit consectetur adipisicing ametipsum dolor ipsum dolor consectetur .' },
          { id: '8x', firstName: 'raphael', lastName: 'teitgen', comment: 'Lorem ipsum dolor sit consectetur ametipsum adipisicing  dolor ipsum dolor consectetur .' }
        ]
      }
    ];

  }

  //asynchronous  get
  getPhotoboard(): Observable<photos[]> {
    return of(this.photoBoardData);
  }


  addNewComment(newComment, commentedPhoto) {
    let i: number = 0;
    for (i = 0; i < this.photoBoardData.length; i++) {
      if (this.photoBoardData[i].id == commentedPhoto.id) {
        this.photoBoardData[i].comments.push(this.comments);
        this.photoBoardData[i].commentNumber++;
      }
    }
  }

  addNewPhoto(item) {
    this.photoBoardData.unshift(item);
  }

  updateLike(likedPhotoId) {
    let i: number = 0;
    for (i = 0; i < this.photoBoardData.length; i++) {
      if (this.photoBoardData[i].id == likedPhotoId) {
        this.photoBoardData[i].like = !this.photoBoardData[i].like;

        if (this.photoBoardData[i].like) {
          this.photoBoardData[i].likeNumber++;
        } else {
          this.photoBoardData[i].likeNumber--;
        }
      }
    }

  }



  getPhotoByID(id: number) {
    return this.photoBoardData.slice(0).find(photo => photo.numTest == id);
  }


  getAll(): Observable<any> {
    return this.http.get(this.server_Address + '/user/all');
  }

  connection(connectionInfo): Observable<any> {
    return this.http.post(this.server_Address + '/login', connectionInfo);
  }


  addUser(newUser): Observable<any> {
    // console.log(newUser);
    return this.http.post(this.server_Address + '/user/add', newUser, httpOptions);
  }
}