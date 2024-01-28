import { Injectable } from '@angular/core';
import { Project, ProjectType } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  get favoriteProjects() {
    return this.projectList.filter(project => project.isFavorite === true)
  }

  getProjectsByType(projectType: ProjectType) {
    return this.projectList.filter(project => project.type === projectType)
  }

  getProjectById(projectID: string) {
    return this.projectList.find(project => project.id === projectID)
  }

  projectList: Project[] = [
    {
      id: 'woocommerce-product-variations-generator',
      title: 'Woocommerce Product Variations Generator',
      description: `If you are a wordpress developer who uses Woocommerce, you probably know about variable products, and one of the biggest chalenges about this type of products is finding every possible variation when you have a lot of attributes, such as Color, Size, Price,...etc. 
      This app solves the problem and automate the process. With the click of a button it will generate every possible combination of variations from the attribute values, and download a CSV file ready to be uploaded to your Woocommerce website.`,
      itemImg: 'assets/project-item-imgs/woocommerce-product-variations-generator.webp',
      mockupImg: 'assets/mockups/Woocommerce-Product-Variations-Generator.webp',
      skillsImgs: [
        'assets/html5-original.svg',
        'assets/css3-plain-wordmark.svg',
        'assets/javascript-original.svg',
      ],
      previewHref: 'https://red1code.github.io/product-variations/',
      sourceCodeHref: 'https://github.com/red1code/product-variations',
      isFavorite: true,
      type: 'Web App',
    },
    {
      id: 'scrum-board',
      title: 'SCRUM Board',
      description: `A simple SCRUM Board Angular application. I used Firebase for database and hosting`,
      itemImg: 'assets/project-item-imgs/scrum-board.webp',
      mockupImg: 'assets/mockups/backlog-mockup.webp',
      skillsImgs: [
        'assets/angular.svg',
        'assets/typescript.svg',
        'assets/firebase-logo.svg',
      ],
      previewHref: 'https://kanban-fire-workshop-52a4f.web.app/',
      sourceCodeHref: 'https://github.com/red1code/SCRUM-Board',
      isFavorite: true,
      type: 'Web App',
    },
    {
      id: 'rendezvous-app',
      title: 'Rendezvous App',
      description: `A web application that simulates booking an appointment with a doctor. \n
      I used Angular for Front-end. Firebase for database and hosting`,
      itemImg: 'assets/project-item-imgs/rendezvous-app.webp',
      mockupImg: 'assets/mockups/Rendezvous-app-mockup.webp',
      skillsImgs: [
        'assets/angular.svg',
        'assets/typescript.svg',
        'assets/git-plain.svg',
        'assets/firebase-logo.svg',
      ],
      previewHref: 'https://ngauth-d9be6.web.app/',
      sourceCodeHref: 'https://github.com/red1code/new-rdv-app',
      isFavorite: true,
      type: 'Web App',
    },
    {
      id: 'todo-app',
      title: 'Todo App',
      description: `A todo list web application.`,
      itemImg: 'assets/project-item-imgs/todo-app.webp',
      mockupImg: 'assets/mockups/todo-app-mockup-laptop-phone.webp',
      skillsImgs: [
        'assets/html5-original.svg',
        'assets/css3-plain-wordmark.svg',
        'assets/javascript-original.svg',
        'assets/Webpack-logo.webp',
      ],
      previewHref: 'https://red1code.github.io/todo-app/',
      sourceCodeHref: 'https://github.com/red1code/todo-app',
      isFavorite: true,
      type: 'Web App',
    },
    {
      id: 'cv-builder-app',
      title: 'CV Builder App',
      description: 'A CV builder web application. I built it to practice some concepts that I have learned when I was exploring React.',
      itemImg: 'assets/project-item-imgs/cv-builder-app.webp',
      mockupImg: 'assets/mockups/cv-builder-mockup.webp',
      skillsImgs: ['assets/react-logo.svg'],
      previewHref: 'https://zesty-llama-887c9b.netlify.app/',
      sourceCodeHref: 'https://github.com/red1code/cv-builder',
      isFavorite: true,
      type: 'Web App',
    },
    {
      id: 'weather-app',
      title: 'Weather App',
      description: `A weather web application. The purpose of this app is to practice using APIs and asynchronous programming`,
      itemImg: 'assets/project-item-imgs/weather-app.webp',
      mockupImg: 'assets/mockups/weather-app-mockup.webp',
      skillsImgs: [
        'assets/html5-original.svg',
        'assets/css3-plain-wordmark.svg',
        'assets/javascript-original.svg',
      ],
      previewHref: 'https://red1code.github.io/weather-app/',
      sourceCodeHref: 'https://github.com/red1code/weather-app',
      isFavorite: false,
      type: 'Web App',
    },
    {
      id: 'yora-pro',
      title: 'Yora Pro',
      description: 'A brochure website, for a local digital agency.',
      itemImg: 'assets/project-item-imgs/yora-pro.webp',
      mockupImg: 'assets/mockups/yora-pro-mockup.webp',
      skillsImgs: [
        'assets/html5-original.svg',
        'assets/css3-plain-wordmark.svg',
        'assets/javascript-original.svg'
      ],
      previewHref: 'https://red1code.github.io/yora-website',
      sourceCodeHref: 'https://github.com/red1code/yora-website',
      isFavorite: true,
      type: 'Website',
    },
    {
      id: 'admin-dashboard-ui',
      title: 'Admin Dashboard UI',
      description: 'an imaginary Admin Dashboard UI with HTML & CSS',
      mockupImg: 'assets/mockups/admin-dashboard-mockup.webp',
      skillsImgs: [
        'assets/html5-original.svg',
        'assets/css3-plain-wordmark.svg',
      ],
      previewHref: 'https://red1code.github.io/Admin-Dashboard/',
      sourceCodeHref: 'https://github.com/red1code/Admin-Dashboard',
      itemImg: 'assets/project-item-imgs/admin-dashboard-ui.webp',
      isFavorite: false,
      type: 'Website',
    },
    {
      id: 'memory-cards-game',
      title: 'Memory Cards Game',
      description: `Test your memory capacity and get points by clicking on images, but don't click on any, more than once.\n
      I built it to practice some concepts that I have learned when I was exploring React.`,
      mockupImg: 'assets/mockups/Memory-Cards-Game-mockup.webp',
      skillsImgs: ['assets/react-logo.svg'],
      previewHref: 'https://glowing-brigadeiros-86a872.netlify.app/',
      sourceCodeHref: 'https://github.com/red1code/memory-cards-game',
      itemImg: 'assets/project-item-imgs/memory-cards-game.webp',
      isFavorite: false,
      type: 'Website',
    },
    {
      id: 'rock-paper-scissors-game',
      title: 'Rock Paper Scissors Game',
      description: `A simple game you can play on the browser`,
      mockupImg: 'assets/mockups/rock-paper-scissors-game-mockup.webp',
      skillsImgs: [
        'assets/html5-original.svg',
        'assets/css3-plain-wordmark.svg',
        'assets/javascript-original.svg',
      ],
      previewHref: 'https://red1code.github.io/rock-paper-scissors-game/',
      sourceCodeHref: 'https://github.com/red1code/rock-paper-scissors-game',
      itemImg: 'assets/project-item-imgs/rock-paper-scissors-game.webp',
      isFavorite: false,
      type: 'Website',
    },
    {
      id: 'red1-portfolio',
      title: 'My Portfolio',
      description: `It's the website you are visiting right now!`,
      mockupImg: 'assets/mockups/my-portfolio-mockup.webp',
      skillsImgs: [
        'assets/angular.svg',
        'assets/typescript.svg',
      ],
      previewHref: 'https://redouane-bekkouche-portfolio.onrender.com/',
      sourceCodeHref: 'https://github.com/red1code/red1dev',
      itemImg: 'assets/project-item-imgs/red1-portfolio.webp',
      isFavorite: false,
      type: 'Website',
    },
  ];
}
