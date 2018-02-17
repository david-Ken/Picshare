import { Component, OnInit } from '@angular/core';
import { photos } from '../../models/photos';
import { Comments } from '../../models/comments';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.css']
})

export class PhotoBoardComponent implements OnInit {
  photoboard: photos[];

  constructor() { }

  ngOnInit() {
    this.photoboard = [
      {
        firstName: 'Jessica',
        lastName: 'Jones',
        pseudo: '@JessJones',
        profilPhoto: 'icon02.jpg',
        online: '3 minutes',
        location: 'Los Angeles',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque placeat dolorum, itaque libero error quisquam dolore ipsum ex autem. Sapiente voluptates voluptatibus quos laboriosam .',
        image: 'img.jpg',
        likeNumber: 2,
        commentNumber: 55,
        comments: [
          { firstName: 'bertrand', lastName: 'ndayisenga', comment: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
          { firstName: 'david', lastName: 'keney', comment: 'Lorem ipsum dolor sit ametipsum dolor ipsum dolor consectetur .' },
          { firstName: 'marie', lastName: 'pimpy', comment: 'Lorem ipsum dolor sit ametipsum dolor ipsum dolor consectetur .' }
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
        comments: [
          { firstName: 'abdel', lastName: 'nasser', comment: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
          { firstName: 'elena', lastName: 'ibba', comment: 'Lorem ipsum dolor sit ametipsum dolor ipsum dolor consectetur .' },
          { firstName: 'katia', lastName: 'medjani', comment: 'Lorem ipsum dolor sit ametipsum dolor ipsum dolor consectetur .' }
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
        comments: [
          { firstName: 'diallo', lastName: 'thierno', comment: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
          { firstName: 'melchi', lastName: 'nduwayo', comment: 'Lorem ipsum dolor sit ametipsum dolor ipsum dolor consectetur .' },
          { firstName: 'samitiana', lastName: 'leclerc', comment: 'Lorem ipsum dolor sit ametipsum dolor ipsum dolor consectetur .' }
        ]
      }
    ];
  }

}
