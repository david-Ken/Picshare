import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
    PhotoBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MyDatePickerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
