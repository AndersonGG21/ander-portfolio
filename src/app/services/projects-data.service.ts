import { Injectable } from '@angular/core';

export interface Project {
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

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {

  projects: Project[] = [
    {
      id: 'springnet',
      name: 'SPRINGNET - SPRINGNET - SPRINGNET -',
      mockupImage: '../../../assets/images/springnet-mockup.png',
      technologies: ['Springboot', 'Angular', 'MySQL', 'AWS'],
      images: [
        '../../../assets/images/springnet-gallery.png',
      ],
      industry: 'Social Media',
      overview: `SpringNet allows you to create posts and stories, view, comment and like other users' posts, follow or unfollow profiles. It has a chat that works in real time using a websocket connection.
      For the development, I used Spring Boot for the backend, since I have experience in this framework and I feel comfortable working with Java. For the frontend, I decided to use Angular, a technology I've been learning and I'm excited to keep improving.`,
      year: 2023,
      github: ['https://github.com/AndersonGG21/SpringNet-Front', 'https://github.com/AndersonGG21/SpringNet']
    },
    {
      id: 'nuwarecycle',
      name: 'NuwaRecycle - NuwaRecycle - NuwaRecycle - NuwaRecycle -',
      mockupImage: '../../../assets/images/nuwarecycle-mockup.png',
      technologies: ['Springboot', 'Angular', 'MySQL'],
      images: [
        '../../../assets/images/nuwa-gallery.png',
      ],
      industry: 'Ecommerce',
      overview: 'This ecommerce project, developed with Angular and Java, offers an exceptional shopping experience. From its intuitive user interface and dynamic shopping cart to robust security measures in the backend, it fuses the best of both technologies to ensure a smooth and secure shopping journey. Discover the elegance of shopping online with us!',
      year: 2023,
      github: ['https://github.com/AndersonGG21/nuwarecycle-front', 'https://github.com/luisdavid24/nuwarecycleBack'],
    },
    {
      id: 'idioom',
      name: 'IDIOOM - IDIOOM - IDIOOM -',
      mockupImage: '../../../assets/images/idioom-mockup.png',
      technologies: ['Springboot', 'JavaScipt', 'MySQL'],
      images: [
        '../../../assets/images/idioom-gallery.png',
      ],
      industry: 'Education',
      overview: 'Idioom LMS is a digital tool that enables organizations, educational institutions and companies to create, manage and deliver online courses and training content. It facilitates the efficient management of the entire learning process, from student enrollment to the evaluation of their progress. This project was the first time I used agile methodologies (Scrumban) with my team and my role was that of Scrum Master.',
      year: 2022,
      github: ['https://github.com/AndersonGG21/LanguageAcademyLMS']
    },
    {
      id: 'crm',
      name: 'CRM - CRM - CRM -',
      mockupImage: '../../../assets/images/crm-mockup.png',
      technologies: ['Springboot', 'JavaScipt', 'MySQL'],
      images: [
        '../../../assets/images/crm-gallery.png',
      ],
      industry: '',
      overview: 'The hardware distribution company CRM (Manage Customer Relationships) in this case called JDAS is designed for the easy manipulation and organization of internal information, for example customers contacts, sales and products registers, whit de possibility of generating statistical reports, all this managed for registered users in the system. This was my first team project.',
      year: 2021,
      github: ['https://github.com/luisdavid24/CRM_Hardware_Industry']
    },
    {
      id: 'food',
      name: 'Food App - Food App - Food App - Food App -',
      mockupImage: '../../../assets/images/food-mockup.png',
      technologies: ['Angular', 'Firebase'],
      images: [
        '../../../assets/images/food-gallery.png',
      ],
      industry: 'Gastronomy',
      overview: 'This was my first project using Angular and Firebase. I was tasked with creating a food ordering app. The app allows users to order food and add it to their cart. The app also allows users to view their cart and checkout. The app also allows users to login. The app also allows chefs to view the order that users made',
      year: 2021,
      github: ['https://github.com/AndersonGG21/food-app']
    }
  ];

  getProjectById(id: string) : (Project | null) {
    let project = this.projects.find((project) => project.id == id) || null ;
    return project;
  }
  
}
