import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { repeat } from 'rxjs';
import SplitTextJS from 'split-text-js';

@Component({
  selector: 'app-text-animation',
  templateUrl: './text-animation.component.html',
  styleUrls: ['./text-animation.component.css']
})
export class TextAnimationComponent implements OnInit{

  ngOnInit(): void {
    const titles = gsap.utils.toArray('.animated-p');
    const tl = gsap.timeline({repeat: -1});
    
    titles.forEach(title => {
      const splitTitle = new SplitTextJS(title);
      tl.from(splitTitle.chars, {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: .02
      }, "<")
      .to(splitTitle.chars, {
        opacity: 0,
        y: -80,
        rotateX: 90,
        stagger: .02
      }, "<1")
    });
  
  }

}
