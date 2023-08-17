import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tl = gsap.timeline({ paused: true });
  path = document.querySelector('path') as SVGPathElement;

  ngOnInit(): void {
    const magneticButtons = document.querySelectorAll('.magnetic');
    const _this = this;
    magneticButtons.forEach(function (elem: any) {
      document.addEventListener('mousemove', (e) => {
        _this.magnetize(elem, e);
      });
    });
  }

  // Magentic Elements
  magnetize(el: any, e: any) {
    const mX = e.clientX,
      mY = e.clientY;
    const item = el;
    const customDist = item.dataset.dist * 20 || 120;
    const centerX =
      item.getBoundingClientRect().left +
      item.getBoundingClientRect().width / 2;
    const centerY =
      item.getBoundingClientRect().top +
      item.getBoundingClientRect().height / 2;

    let deltaX = 0;
    let deltaY = 0;

    if (item.classList.contains('magnetic-content')) {
      deltaX = Math.floor(centerX - mX) * -0.08;
      deltaY = Math.floor(centerY - mY) * -0.08;
    } else {
      deltaX = Math.floor(centerX - mX) * -0.45;
      deltaY = Math.floor(centerY - mY) * -0.45;
    }

    let distance = this.calculateDistance(item, mX, mY);

    if (distance < customDist) {
      gsap.to(item, 0.5, { y: deltaY, x: deltaX, scale: 1.1 });
    } else {
      gsap.to(item, 0.6, { y: 0, x: 0, scale: 1 });
    }
  }

  calculateDistance(elem: any, mouseX: number, mouseY: number) {
    return Math.floor(
      Math.sqrt(
        Math.pow(
          mouseX -
            (elem.getBoundingClientRect().left +
              elem.getBoundingClientRect().width / 2),
          2
        ) +
          Math.pow(
            mouseY -
              (elem.getBoundingClientRect().top +
                elem.getBoundingClientRect().height / 2),
            2
          )
      )
    );
  }
}
