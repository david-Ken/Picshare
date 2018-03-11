import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { PhotoBoardComponent } from './components/photo-board/photo-board.component';
import { PhotoBoardService } from './services/photo-board.service';
import { ProfilComponent } from './components/profil/profil.component';
import { EditProfilComponent } from './components/edit-profil/edit-profil.component';


import { AuthService } from './services/AuthService/auth.service';
import { AuthGuard } from './AuthGuard/auth.guard';

import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { DropZoneDirective } from './drop-zone.directive';
import { FileSizePipe } from './file-size.pipe';
import { ImageUploadModule } from "angular2-image-upload";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    HomeComponent,
    NotFoundComponent,
    SignupComponent,
    PhotoBoardComponent,
    ProfilComponent,
    EditProfilComponent,
    DropZoneDirective,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MyDatePickerModule,
    ImageUploadModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_vxIN9XaeR13gSvkkbACIzN2UaDfYcOs',
      libraries: ["places"]
    }),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PhotoBoardService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
