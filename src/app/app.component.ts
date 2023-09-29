import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import SplitTextJS from 'split-text-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  __iosNoInertiaSyncTouchLerp: any

  ngOnInit(): void {
    gsap.set('.cursor', { xPercent: -50, yPercent: -50 });
    let cursor = document.querySelector('.cursor') as HTMLDivElement;
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(cursor, 0.5, { x: mouseX, y: mouseY });
    });

    const lenis = new Lenis(this.__iosNoInertiaSyncTouchLerp);

    lenis.on('scroll', (e: any) => {
      // console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}
