import { Component, OnInit, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Power2 } from 'gsap';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MagnetizeElementsService } from 'src/app/services/magnetize-elements.service';

interface Project {
  id: string;
  name: string;
  mockupImage: string;
  overview: string;
  technologies: string[];
  industry: string;
  year: number;
  images: string[];
  github : string[];
}
@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
})
export class ProjectPageComponent implements OnInit {
  private router = inject(ActivatedRoute);
  private magneticService = inject(MagnetizeElementsService);
  
  projects: Project[] = [
    {
      id: 'springnet',
      name: 'SPRINGNET - SPRINGNET - SPRINGNET -',
      mockupImage: '../../../assets/images/spring-mockup.png',
      technologies: ['Springboot', 'Angular', 'MySQL', 'AWS'],
      images: [
        '../../../assets/images/springnet-gallery.png',
      ],
      industry: 'Social Media',
      overview: `SpringNet allows you to create posts and stories, view, comment and like other users' posts, follow or unfollow profiles. It has a chat that works in real time using a websocket connection.
      \n\n
      For the development, I used Spring Boot for the backend, since I have experience in this framework and I feel comfortable working with Java. For the frontend, I decided to use Angular, a technology I've been learning and I'm excited to keep improving.`,
      year: 2023,
      github: ['https://github.com/AndersonGG21/SpringNet-Front', 'https://github.com/AndersonGG21/SpringNet']
    },
    {
      id: 'idioom',
      name: 'IDIOOM - IDIOOM - IDIOOM -',
      mockupImage: '../../../assets/images/idioom-mockup.png',
      technologies: ['Springboot', 'JavaScipt', 'MySQL'],
      images: [
        '../../../assets/images/idioom1.webp',
        '../../../assets/images/idioom2.webp',
        '../../../assets/images/idioom3.webp',
        '../../../assets/images/idioom4.webp'
      ],
      industry: 'Education',
      overview: `<p>SpringNet allows you to create posts and stories, view, comment and like other users' posts, follow or unfollow profiles. It has a chat that works in real time using a websocket connection.
      </p>
      <br>
      <p>For the development, I used Spring Boot for the backend, since I have experience in this framework and I feel comfortable working with Java. For the frontend, I decided to use Angular, a technology I've been learning and I'm excited to keep improving.
      </p>`,
      year: 2022,
      github: ['https://github.com/AndersonGG21/SpringNet-Front', 'https://github.com/AndersonGG21/SpringNet']
    },
    {
      id: 'crm',
      name: 'CRM - CRM - CRM -',
      mockupImage: '../../../assets/images/spring-mockup.png',
      technologies: ['Springboot', 'JavaScipt', 'MySQL'],
      images: [
        '../../../assets/images/crm1.png',
        '../../../assets/images/crm2.png',
        '../../../assets/images/crm3.png',
        '../../../assets/images/crm4.png',
      ],
      industry: '',
      overview: 'CRM',
      year: 2021,
      github: ['https://github.com/AndersonGG21/SpringNet-Front', 'https://github.com/AndersonGG21/SpringNet']
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
      github: ['https://github.com/AndersonGG21/SpringNet-Front', 'https://github.com/AndersonGG21/SpringNet']
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
    github: []
  };

  ngOnInit() {
    this.router.paramMap.subscribe((params: ParamMap) => {
      let projectId = params.get('project');

      let project = this.projects.find((project) => project.id == projectId);
      if (project) {
        this.project = project;
      }
    });

    this.magneticService.magnet();
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

    const bgColors = {
      springnet: '#19A947',
      idioom: 'rgb(217, 4, 41)',
      crm: 'rgb(67, 84, 111)',
      food: 'rgb(37, 37, 37)'
    }

    const element = document.querySelector('.project-title') as HTMLDivElement;
    const title = document.querySelector('.project-info h1') as HTMLTitleElement;
    let projectId = this.project.id as keyof typeof bgColors;
    element.style.setProperty('--bg-color',`${bgColors[projectId]}`);
    title.style.setProperty('--bg-color',`${bgColors[projectId]}`);
  }

  scrollToTop(){
    window.scrollTo(0,0);
  }
}
