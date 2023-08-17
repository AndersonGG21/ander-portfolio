import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    gsap.set('.cursor', {xPercent: -50, yPercent: -50});
    let cursor = document.querySelector('.cursor') as HTMLDivElement;
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(cursor, 0.5, { x: mouseX, y: mouseY });
    })
  }
  title = 'Anderson Garces - Portofolio';
}
