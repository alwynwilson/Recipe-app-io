import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { SearchPipe } from './pipe/search.pipe';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { FormsModule } from '@angular/forms';
import { SortPipePipe } from './pipe/sort-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ViewComponent,
    SearchPipe,
    SortPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
