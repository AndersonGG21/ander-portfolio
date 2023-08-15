import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HomeHeader',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit{
  
  ngOnInit(): void {
    const listItem = document.querySelectorAll('.home-header li');
    const menuBackdrop = document.querySelector('#menu-backdrop') as HTMLDivElement;

    listItem.forEach((item) => {
      item.addEventListener('mouseenter', ({ target} : any) => {
        const { left, top, width, height } = item.getBoundingClientRect();
        menuBackdrop.style.setProperty("--left", `${left}px`);
        menuBackdrop.style.setProperty("--top", `${top}px`);
        menuBackdrop.style.setProperty("--width", `${width}px`);
        menuBackdrop.style.setProperty("--heigth", `${height}px`);
        console.log(menuBackdrop.style.getPropertyValue("--width"))
        menuBackdrop.style.visibility = 'visible';
        menuBackdrop.style.opacity = '1';
      })

      item.addEventListener('mouseleave', () => {
        menuBackdrop.style.visibility = 'hidden';
        menuBackdrop.style.opacity = '0';
      })
    })
  }
}
