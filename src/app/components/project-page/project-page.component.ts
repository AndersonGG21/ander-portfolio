import { Component, OnInit, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Power2 } from 'gsap';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MagnetizeElementsService } from 'src/app/services/magnetize-elements.service';
import { Project, ProjectsDataService } from 'src/app/services/projects-data.service';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
})
export class ProjectPageComponent implements OnInit {
  private router = inject(ActivatedRoute);
  private magneticService = inject(MagnetizeElementsService);
  private projectsService = inject(ProjectsDataService);
  

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

      let project = this.projectsService.getProjectById(projectId || '');
      
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
      springnet: 'var(--green)',
      idioom: 'var(--red)',
      crm: 'var(--grey)',
      food: 'var(--l-black)',
      nuwarecycle: 'var(--orange)'
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
