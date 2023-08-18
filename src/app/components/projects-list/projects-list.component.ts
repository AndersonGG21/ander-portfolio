import {
  Component,
  OnInit
} from '@angular/core';
import gsap from 'gsap';
import { Elastic } from 'gsap';

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
    const projects = document.querySelector('.projects') as HTMLDivElement;
    Array.from(projects.children).forEach((project) => {
      project.addEventListener('mousemove', this.moveProject.bind(this));
      project.addEventListener(
        'mousemove',
        this.movePorjectImg.bind(null, project)
      );
    });

    window.addEventListener('mousemove', this.moveStuff.bind(this));
  }

  moveProject(e: any) {
    if (this.preview) {
      const previewRect = this.preview.getBoundingClientRect();
      const offsetX = previewRect.width / 2;
      const offsetY = previewRect.height / 2;
      this.preview.style.left = e.clientX - offsetX + 'px';
      this.preview.style.top = e.clientY - offsetY + window.scrollY + 'px';
    }

    this.handCursor(e);
  }

  moveStuff(e: MouseEvent) {
    const mouseInside = this.isMouseInsideContainer(e);
    if (this.isInside != mouseInside) {
      this.isInside = mouseInside;
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

  movePorjectImg(project: any) {
    const bgPositions = {
      p1: '0 0',
      p2: '0 33.33%',
      p3: '0 66.66%',
      p4: '0 100%',
    };
    const previewImg = document.querySelector('.preview-img');
    const projectId = project.id as keyof typeof bgPositions;
    gsap.to(previewImg, 0.4, {
      backgroundPosition: bgPositions[projectId] || '0 0',
    });
  }

  isMouseInsideContainer(e: MouseEvent) {
    const projects = document.querySelector('.projects') as HTMLDivElement;
    const containerRect = projects.getBoundingClientRect();
    return (
      e.clientX >= containerRect.left &&
      e.clientX <= containerRect.right &&
      e.clientY >= containerRect.top &&
      e.clientY <= containerRect.bottom
    );
  }

  projectRedirect(id: string) {
    alert(id);
  }

  onMouseEnter() {
    gsap.set('.cursor', {opacity: 0});
    gsap.to('.hand', 1, {
      opacity: 1,
      top: '-20px',
      left: '-20px',
      rotate: 0,
      ease: Elastic.easeOut.config(1, 0.3),
    })
  }

  onMouseLeave() {
    gsap.to('.hand', 1,{ 
      opacity: 0,
      top: '10px',
      left: '40px',
      rotate: 45,
    });
    gsap.set('.cursor', {opacity: 1});
  }

  handCursor(e : MouseEvent) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    gsap.to('.hand', 1, {
      x: mouseX,
      y: mouseY,
    })
  }
}
