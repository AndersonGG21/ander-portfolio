import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css'],
})
export class MarqueeComponent implements OnInit {
  ngOnInit(): void {
    let currentScroll = 0;
    let isScrollingDown = true;

    let tween = gsap
      .to('.marquee__part', {
        xPercent: -100,
        repeat: -1,
        duration: 40,
        ease: 'linear',
      })
      .totalProgress(0.3);

    gsap.set('.marquee__inner', { xPercent: 1 });

    window.addEventListener('scroll', function () {
      if (window.scrollY > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      currentScroll = window.scrollY;
    });
  }
}
