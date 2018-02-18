import { Injectable } from '@angular/core';

import { photos } from '../models/photos';
import { Comments } from '../models/comments';

@Injectable()
export class PhotoBoardService {
  photoBoardData: photos[];


  comments: Comments = {
    firstName: null,
    lastName: null,
    comment: null,
  };

  constructor() {
    this.photoBoardData = [
      {
        firstName: 'Jessica',
        lastName: 'Jones',
        pseudo: '@JessJones',
        profilPhoto: 'icon02.jpg',
        online: '3 minutes',
        location: 'Los Angeles',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Cumque placeat dolorum, itaque libero error quisquam dolore ipsum ex autem. Sapiente voluptates voluptatibus quos laboriosam .',
        image: 'img.jpg',
        likeNumber: 2,
        commentNumber: 55,
        shareNumber: 10,
        comments: [
          { firstName: 'bertrand', lastName: 'ndayisenga', comment: ' Lorem consectetur ipsum adipisicing dolor sit amet consectetur, adipisicing elit.' },
          { firstName: 'david', lastName: 'keney', comment: 'Lorem ipsum dolor consectetur sit ametipsum dolor adipisicingipsum dolor consectetur .' },
          { firstName: 'marie', lastName: 'pimpy', comment: 'Lorem ipsum dolor sit  consectetur ametipsum dolor ipsum adipisicing dolor consectetur .' }
        ]
      },
      {
        firstName: 'Axelle',
        lastName: 'Sheeran',
        pseudo: '@blueDream',
        profilPhoto: 'icon01.jpg',
        online: '45 minutes',
        location: 'New  Heaven',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque placeat dolorum, itaque libero error quisquam dolore ipsum ex autem.',
        image: 'img01.jpg',
        likeNumber: 15,
        commentNumber: 10,
        shareNumber: 6,
        comments: [
          { firstName: 'abdel', lastName: 'nasser', comment: ' Lorem ipsum consectetur dolor sit amet adipisicing consectetur, adipisicing elit.' },
          { firstName: 'elena', lastName: 'ibba', comment: 'Lorem ipsum dolor  consectetur sit ametipsum adipisicing dolor ipsum dolor consectetur .' },
          { firstName: 'katia', lastName: 'medjani', comment: 'Lorem ipsum dolor consectetur sit ametipsum dolor adipisicing ipsum dolor consectetur .' }
        ]
      },
      {
        firstName: 'Rita',
        lastName: 'Ora',
        pseudo: '@Pristina',
        profilPhoto: 'icon03.jpg',
        online: '45 minutes',
        location: 'New  Heaven',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque placeat dolorum, itaque libero error quisquam dolore ipsum ex autem.',
        image: 'img02.jpg',
        likeNumber: 30,
        commentNumber: 45,
        shareNumber: 3,
        comments: [
          { firstName: 'diallo', lastName: 'thierno', comment: ' Lorem ipsum dolor consectetur sit amet consectetur,adipisicing adipisicing elit.' },
          { firstName: 'melchi', lastName: 'nduwayo', comment: 'Lorem ipsum dolor sit consectetur adipisicing ametipsum dolor ipsum dolor consectetur .' },
          { firstName: 'raphael', lastName: 'teitgen', comment: 'Lorem ipsum dolor sit consectetur ametipsum adipisicing  dolor ipsum dolor consectetur .' }
        ]
      }
    ];

  }

  getPhotoboard(): photos[] {
    return this.photoBoardData;
  }

  addNewComment(newComment) {
    this.photoBoardData[0].comments.push(this.comments);
  }

}
