import { Component, inject } from '@angular/core';
import { gsap } from 'gsap';
import { Elastic } from 'gsap';
import { ScrollAnimationService } from 'src/app/services/scroll-animation.service';

interface Project {
  id: string;
  githubLinks: string[];
  name: string;
}

@Component({
  selector: 'ProjectsSections',
  templateUrl: './projects-sections.component.html',
  styleUrls: ['./projects-sections.component.css'],
})
export class ProjectsSectionsComponent {
  scrollAnimationService = inject(ScrollAnimationService);
  projects: Project[] = [
    {
      id: 'springnet',
      githubLinks: [
        'https://github.com/AndersonGG21/SpringNet-Front',
        'https://github.com/AndersonGG21/SpringNet',
      ],
      name: 'SpringNet',
    },
    {
      id: 'idioom',
      githubLinks: ['https://github.com/AndersonGG21/LanguageAcademyLMS'],
      name: 'Idioom LMS',
    },
    {
      id: 'crm',
      githubLinks: ['https://github.com/luisdavid24/CRM_Hardware_Industry'],
      name: 'CRM',
    },
    {
      id: 'food',
      githubLinks: ['https://github.com/AndersonGG21/food-app'],
      name: 'Food App',
    },
  ];

  ngAfterViewInit() {
    const bgPositions = {
      p1: '0 0%',
      p2: '0 33.33%',
      p3: '0 66.66%',
      p4: '0 100%',
    };

    const tl = gsap.timeline({ repeat: -1 });
    const imagesContainer = document.querySelectorAll('.images-container');

    tl.to(
      imagesContainer,
      2,
      {
        backgroundPosition: bgPositions.p2,
      },
      '+=2.5'
    );
    tl.to(
      imagesContainer,
      2,
      {
        backgroundPosition: bgPositions.p3,
      },
      '+=2.5'
    );
    tl.to(
      imagesContainer,
      2,
      {
        backgroundPosition: bgPositions.p4,
      },
      '+=2.5'
    );
    tl.to(
      imagesContainer,
      2,
      {
        backgroundPosition: bgPositions.p1,
      },
      '+=2.5'
    );

    this.projects.forEach((project) => {
      let el = document.querySelector(`#${project.id}`) as HTMLElement;
      el.style.setProperty('--bg-img', `url(assets/images/${project.id}.png)`);
      let text = document.querySelector(`#${project.id} .reveal-type2`) as HTMLElement;

      this.scrollAnimationService.applyRevealTypeAnimationV2(text, project.id);
    });
  }

  onMouseEnter() {
    gsap.set('.cursor', { opacity: 0 });
    gsap.to('.project-cursor', 1, {
      opacity: 1,
      top: '-20px',
      left: '-20px',
      rotate: 0,
      ease: Elastic.easeOut.config(1, 0.3),
    });
  }

  onMouseLeave() {
    gsap.to('.project-cursor', 1, {
      opacity: 0,
      top: '10px',
      left: '40px',
      rotate: 45,
    });
    gsap.set('.cursor', { opacity: 1 });
  }

  handCursor(e: MouseEvent) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    gsap.to('.project-cursor', 1, {
      x: mouseX,
      y: mouseY,
    });
  }
}
