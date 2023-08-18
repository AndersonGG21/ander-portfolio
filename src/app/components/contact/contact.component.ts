import { Component, ElementRef, OnInit, inject } from '@angular/core';
import SplitTextJS from 'split-text-js';
import gsap from 'gsap';
import { ScrollAnimationService } from 'src/app/services/scroll-animation.service';

@Component({
  selector: 'Contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  scrollServive = inject(ScrollAnimationService);
  elementRef = inject(ElementRef);

  ngOnInit(): void {
    const revealType = document.querySelectorAll('.reveal-type') as NodeListOf<HTMLElement>;
    revealType.forEach((el : any) => {
      this.scrollServive.applyRevealTypeAnimation(el);
    });
  }
}
