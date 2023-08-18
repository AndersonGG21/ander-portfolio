import { Component, Input, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'MarqueeText',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css'],
})
export class MarqueeComponent implements OnInit {
  @Input() id : string = '';
  @Input() text : string = '';
  @Input() duration : number = 0;
  @Input() fontSize : number = 0;
  @Input() opacity : number = 0;

  ngOnInit(): void {
    let currentScroll = 0;
    let isScrollingDown = true;
    let marquee = document.querySelector(`#${this.id}`) as HTMLElement

    marquee.style.setProperty('--fontSize', `${this.fontSize}px`)
    marquee.style.opacity = `${this.opacity}`;
    let tween = gsap
      .to(`#${this.id} .marquee__part`, {
        xPercent: -100,
        repeat: -1,
        duration: this.duration,
        ease: 'linear',
      })
      .totalProgress(0.3);

    gsap.set(`#${this.id}`, { xPercent: 1 });

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
