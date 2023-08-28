import { Component, OnInit, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Power2 } from 'gsap';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

interface Project {
  id: string;
  name: string;
  mockupImage: string;
  overview: string;
  technologies: string[];
  industry: string;
  year: number;
  images: string[];
}
@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
})
export class ProjectPageComponent implements OnInit {
  private router = inject(ActivatedRoute);
  projects: Project[] = [
    {
      id: 'springnet',
      name: 'SPRINGNET - SPRINGNET - SPRINGNET -',
      mockupImage: '../../../assets/images/spring-mockup.png',
      technologies: ['Springboot', 'Angular', 'MySQL', 'AWS'],
      images: [
        '../../../assets/images/springnet1.png',
        '../../../assets/images/springnet2.png',
        '../../../assets/images/springnet3.png',
        '../../../assets/images/springnet4.png',
        '../../../assets/images/springnet5.png',
      ],
      industry: 'Social Media',
      overview: `SpringNet allows you to create posts and stories, view, comment and like other users' posts, follow or unfollow profiles. It has a chat that works in real time using a websocket connection.
      \n\n
      For the development, I used Spring Boot for the backend, since I have experience in this framework and I feel comfortable working with Java. For the frontend, I decided to use Angular, a technology I've been learning and I'm excited to keep improving.`,
      year: 2023,
    },
    {
      id: 'idioom',
      name: 'IDIOOM - IDIOOM - IDIOOM -',
      mockupImage: '../../../assets/images/spring-mockup.png',
      technologies: ['Springboot', 'JavaScipt', 'MySQL'],
      images: [
        '../../../assets/images/springnet1.png',
        '../../../assets/images/springnet2.png',
        '../../../assets/images/springnet3.png',
        '../../../assets/images/springnet4.png',
        '../../../assets/images/springnet5.png',
      ],
      industry: 'Eduaction',
      overview: `<p>SpringNet allows you to create posts and stories, view, comment and like other users' posts, follow or unfollow profiles. It has a chat that works in real time using a websocket connection.
      </p>
      <br>
      <p>For the development, I used Spring Boot for the backend, since I have experience in this framework and I feel comfortable working with Java. For the frontend, I decided to use Angular, a technology I've been learning and I'm excited to keep improving.
      </p>`,
      year: 2022,
    },
    {
      id: 'crm',
      name: 'CRM',
      mockupImage: '../../../assets/images/spring-mockup.png',
      technologies: ['Springboot', 'JavaScipt', 'MySQL'],
      images: [
        '../../../assets/images/springnet1.png',
        '../../../assets/images/springnet2.png',
        '../../../assets/images/springnet3.png',
        '../../../assets/images/springnet4.png',
      ],
      industry: '',
      overview: 'LMS',
      year: 2021,
    },
    {
      id: 'food',
      name: 'Food App',
      mockupImage: '../../../assets/images/spring-mockup.png',
      technologies: ['Angular', 'Firebase'],
      images: [
        '../../../assets/images/springnet1.png',
        '../../../assets/images/springnet2.png',
        '../../../assets/images/springnet3.png',
        '../../../assets/images/springnet4.png',
        '../../../assets/images/springnet5.png',
      ],
      industry: 'Social Media',
      overview: `SpringNet allows you to create posts and stories, view, comment and like other users' posts, follow or unfollow profiles. It has a chat that works in real time using a websocket connection.
      /n
      For the development, I used Spring Boot for the backend, since I have experience in this framework and I feel comfortable working with Java. For the frontend, I decided to use Angular, a technology I've been learning and I'm excited to keep improving.`,
      year: 2021,
    },
  ];

  project: Project = {
    id: '',
    name: '',
    mockupImage: '',
    overview: '',
    technologies: [],
    industry: '',
    year: 0,
    images: [],
  };

  ngOnInit() {
    this.router.paramMap.subscribe((params: ParamMap) => {
      let projectId = params.get('project');

      let project = this.projects.find((project) => project.id == projectId);
      if (project) {
        this.project = project;
      }
    });
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger)
    gsap.timeline({
      scrollTrigger:{
        trigger: ".project-title",
        pin: true,
        scrub:0.2,
      }
    })
    .to('.project-title img', {
      y: -100,
      duration:.1, ease:'none',
    })
  
    let revealContainers = document.querySelectorAll('.reveal');
    
    revealContainers.forEach((container) => {
      let img = container.querySelector('img');
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: 'restart none none reset'
        }
      });

      tl.set(container, {autoAlpha: 1});
      tl.from(container, 1.5 , {
        xPercent: -100,
        ease: Power2.easeOut
      });
      tl.from(img, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.easeOut
      })
    })
  }
}
