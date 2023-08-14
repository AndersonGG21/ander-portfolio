import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { TextAnimationComponent } from './components/text-animation/text-animation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarqueeComponent,
    ProjectsListComponent,
    TextAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
