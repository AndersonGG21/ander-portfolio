import { ElementRef, Injectable } from '@angular/core';
import SplitTextJS from 'split-text-js';
import gsap from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class ScrollAnimationService {
  applyRevealTypeAnimation(element: HTMLElement) {
    const text = new SplitTextJS(element);
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        markers: false,
      },
      opacity: 0.2,
      stagger: 0.1,
    });
  }

  applyRevealTypeAnimationV2() {
    const elements = document.querySelectorAll('.reveal-type2') as NodeListOf<HTMLElement>;

    elements.forEach(element => {
      let text = new SplitTextJS(element);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: 'center bottom',
        },
      })
      .from(text.chars, {
        autoAlpha: 0,
        x: -10,
        duration: 0.3,
        ease: 'Power2.in',
        stagger: 0.1,
        delay: 0.2,
      });
    });
  }
}
