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
    gsap.set('.menu', { visibility: 'hidden' });
    this.revealMenu();

    magneticButtons.forEach(function (elem: any) {
      document.addEventListener('mousemove', (e) => {
        _this.magnetize(elem, e);
      });
    });
  }

  // Magentic Elements
  magnetize(el: any, e: any) {
    const mX = e.pageX,
      mY = e.pageY;
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

  // Menu

  revealMenu() {
    this.revealMenuItems();
  }

  start() {
    let overlay = document.querySelector('.overlay') as HTMLDivElement;
    overlay.style.display = 'block';
    const toggleBtn = document.querySelector('#menu-btn') as HTMLButtonElement;
    // preview.style.display = "none";
    console.log(toggleBtn)

    toggleBtn.classList.toggle('active');
    this.tl.reversed(!this.tl.reversed());

    setTimeout(() => {
      if (!toggleBtn.classList.contains('active')) {
        overlay.style.display = 'none';
        // preview.style.display = "block";
      }
    }, 2000);
  }

  revealMenuItems() {
    const star = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
    const end = ' M0,1005S175,995,500,995s500,5,500,5V0H0Z';
    const path = document.querySelector('path') as SVGPathElement;
    this.tl
      .to(
        path,
        0.6,
        {
          attr: {
            d: star,
          },
          ease: 'power2.easeIn',
        },
        '<'
      )
      .to(path, 0.6, {
        attr: {
          d: end,
        },
        ease: 'power2.easeIn',
      });

    this.tl.to(
      '.menu',
      0.4,
      {
        visibility: 'visible',
      },
      '-=0.3'
    );

    this.tl
      .to(
        '.menu-item a',
        0.4,
        {
          top: 0,
          ease: 'power3.out',
          stagger: {
            amount: 0.5,
          },
        },
        '-=0.35'
      )
      .reverse();
  }
}
