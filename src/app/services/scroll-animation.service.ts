import { ElementRef, Injectable } from '@angular/core';
import SplitTextJS from 'split-text-js';
import gsap from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {

  applyRevealTypeAnimation(element : HTMLElement) {
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
}
