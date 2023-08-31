import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'HomeHeader',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit{
  
  private router = inject(Router);
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const listItem = document.querySelectorAll('.home-header li');
    const menuBackdrop = document.querySelector('#menu-backdrop') as HTMLDivElement;

    listItem.forEach((item) => {
      item.addEventListener('mouseenter', ({ target} : any) => {
        const { left, top, width, height } = item.getBoundingClientRect();
        menuBackdrop.style.setProperty("--left", `${left}px`);
        menuBackdrop.style.setProperty("--top", `${top}px`);
        menuBackdrop.style.setProperty("--width", `${width}px`);
        menuBackdrop.style.setProperty("--heigth", `${height}px`);
        menuBackdrop.style.visibility = 'visible';
        menuBackdrop.style.opacity = '1';
      })

      item.addEventListener('mouseleave', () => {
        menuBackdrop.style.visibility = 'hidden';
        menuBackdrop.style.opacity = '0';
      })
    })

    const actionNav = gsap.to('.home-header', {y:'-=60', duration:0.5, ease:'power2.in', display: 'none',paused:true});

    ScrollTrigger.create({
      trigger: ".home-header",
      start: "10px",
      onEnter: () => actionNav.play(),
      onLeaveBack: () => actionNav.reverse(),
    });
  }

  scrollTo(el : string){
    if (this.router.url != `/home${'#projects' || '#about' || '#contact'}`) {
      this.router.navigateByUrl('/home#projects');
      console.log(this.router.url)
    }else{
      const element = document.querySelector(el) as HTMLElement;
      element.scrollIntoView({behavior: 'smooth'});  
    }    
  }
  
}
