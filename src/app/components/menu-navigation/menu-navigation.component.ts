import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'MenuNavigation',
  templateUrl: './menu-navigation.component.html',
  styleUrls: ['./menu-navigation.component.css']
})
export class MenuNavigationComponent implements OnInit{

  private router = inject(Router);

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    
    const closeButton = gsap.to('.close-button', {scale: 1.01, duration:0.5, ease:'power2.easeOut',paused:true});

    ScrollTrigger.create({
      trigger: ".close-button",
      start: "10px top",
      onEnter: () => {closeButton.play()},
      onLeaveBack: () => closeButton.reverse(),
    });

    function test() {
        closeButton.play();
        document.body.classList.toggle('no-scroll');
    }
  }

  toggleMenu() {
    const tl = gsap.timeline({paused : true});
    const overlay = document.querySelector(".overlay") as HTMLDivElement;
    const button = document.querySelector(".close-button") as HTMLButtonElement;
    const menu = document.querySelector(".navigation-menu") as HTMLDivElement;
    const preview = document.querySelector(".preview") as HTMLDivElement;
    
    if (!button.classList.contains("active")) {
      // preview.style.display = "none";
      tl.to(overlay, {duration: 0.2, opacity: 0.5})
      tl.to(overlay, {duration: 0.2, opacity: 1,display: "flex"})
      tl.to(menu, { duration: 0.5, x: "-50px"})
      tl.to(".menu-item", 0.4 ,{
        top: 20,
        ease: "power3.out",
        stagger: {
          amount: 0.3
        }
      }, "-=0.35");
    }else{
      tl.to(".menu-item", 0.4 ,{
        top: -20,
        ease: "power3.out",
        stagger: {
          amount: 0.3
        }
      });
      tl.to(menu, { duration: 0.5, x: "50px"})
      tl.to(overlay, {duration: 0.2, opacity: 0.5})
      tl.to(overlay, {duration: 0.2, opacity: 0,display: "none"})
      // preview.style.display = "block";
    }

    tl.play();
    button.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  }

  onMouseEnter(e : MouseEvent){
    let el = e.target as HTMLDivElement;
    let { width, height } = el.getBoundingClientRect();

    gsap.to('.cursor', 0.4, {
      width: width,
      height: height,
      borderRadius: '8px',
      backgroundColor: 'transparent',
      border: '1px solid #fff',
    })
  }

  onMouseLeave(){
    gsap.to('.cursor', 0.4, {
      width: '10px',
      height: '10px',
      border: 'none',
      backgroundColor: 'var(--foreground)',
    })
  }

  // scrollTo(el : string){
    
  //   const element = document.querySelector(el) as HTMLElement;
  //   element.scrollIntoView({behavior: 'smooth'});
  //   this.toggleMenu();
  // }

  scrollTo(el : string){
    const element = document.querySelector(el) as HTMLElement;
    if (this.router.url != `/home${'#projects' || '#about' || '#contact'}`) {
      this.router.navigateByUrl(`/home#${element.id}`);
      console.log(this.router.url)
    }else{
      element.scrollIntoView({behavior: 'smooth'});  
    }    
    this.toggleMenu();
  }
}
