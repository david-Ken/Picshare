import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { PhotoBoardComponent } from './components/photo-board/photo-board.component';
import { ProfilComponent } from './components/profil/profil.component';
import { EditProfilComponent } from './components/edit-profil/edit-profil.component';
import { PhotoComponent } from './components/photo/photo.component';

import { AuthGuard } from './AuthGuard/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: PhotoBoardComponent/*, canActivate: [AuthGuard] */ },
  { path: 'profil', component: ProfilComponent /*, canActivate: [AuthGuard] */ },
  { path: 'edit', component: EditProfilComponent /*, canActivate: [AuthGuard] */ },
  { path: 'photo/:id', component: PhotoComponent  /*, canActivate: [AuthGuard] */ },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }