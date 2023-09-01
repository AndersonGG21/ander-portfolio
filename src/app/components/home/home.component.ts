import { Component, OnInit, inject } from '@angular/core';
import gsap from 'gsap';
import { MagnetizeElementsService } from 'src/app/services/magnetize-elements.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent{
  tl = gsap.timeline({ paused: true });
  private magneticService = inject(MagnetizeElementsService);

  ngAfterViewInit(): void {
    this.magneticService.magnet();
  }
}
