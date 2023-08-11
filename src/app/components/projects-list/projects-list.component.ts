import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
})
export class ProjectsListComponent implements OnInit {
  preview: HTMLDivElement | null = null;
  isInside = false;

  ngOnInit(): void {
    this.preview = document.querySelector('.preview') as HTMLDivElement;
    const projects = document.querySelector(".projects") as HTMLDivElement;
    Array.from(projects.children).forEach((project) => {
      project.addEventListener("mousemove", this.moveProject.bind(this));
      project.addEventListener("mousemove", this.movePorjectImg.bind(null, project));
    });

    window.addEventListener("mousemove", this.moveStuff.bind(this));
  }

  moveProject(e: any) {
    if (this.preview) {
      const previewRect = this.preview.getBoundingClientRect();
      const offsetX = previewRect.width / 2;
      const offsetY = previewRect.height / 2;
      this.preview.style.left = e.pageX - offsetX + 'px';
      this.preview.style.top = e.pageY - offsetY + 'px';
    }
  }

  moveStuff(e : MouseEvent) {
    const mouseInside = this.isMouseInsideContainer(e);
    if (this.isInside != mouseInside) {
      this.isInside = mouseInside;
      console.log(this.isInside);
      if (this.isInside) {
        gsap.to(this.preview, 0.3, {
          scale: 1,
        });
      } else {
        gsap.to(this.preview, 0.3, {
          scale: 0,
        });
      }
    }
  }

  movePorjectImg(project : any) {
    const bgPositions = {
      p1: '0 0',
      p2: '0 50%',
      p3: '0 100%',
    };
    const previewImg = document.querySelector('.preview-img');
    const projectId = project.id as keyof typeof bgPositions;
    gsap.to(previewImg, 0.4, {
      backgroundPosition: bgPositions[projectId] || '0 0',
    });
  }


  isMouseInsideContainer(e : MouseEvent){
    const projects = document.querySelector(".projects") as HTMLDivElement;
    const containerRect = projects.getBoundingClientRect();
    return (
      e.clientX >= containerRect.left &&
      e.clientX <= containerRect.right &&
      e.clientY >= containerRect.top &&
      e.clientY <= containerRect.bottom
    );
  };

  projectRedirect() {
    alert("SIUUU");
  }
}
  

