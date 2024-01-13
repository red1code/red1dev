import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  websites: Project[] = [
    {
      title: 'My Portfolio',
      description: `It's the website you are visiting right now!`,
      img: 'assets/mockups/my-portfolio-mockup.webp',
      skillsImgs: [
        'assets/angular.svg',
        'assets/typescript.svg',
      ],
      previewHref: 'https://redouane-bekkouche-portfolio.onrender.com/',
      sourceCodeHref: 'https://github.com/red1code/red1dev',
    },
    {
      title: 'Yora Pro',
      description: 'A brochure website, for a local digital agency.',
      img: 'assets/mockups/yora-pro-mockup.webp',
      skillsImgs: [
        'assets/html5-original.svg',
        'assets/css3-plain-wordmark.svg',
        'assets/javascript-original.svg'
      ],
      previewHref: 'https://red1code.github.io/yora-website',
      sourceCodeHref: 'https://github.com/red1code/yora-website',
    },
    {
      title: 'Admin Dashboard UI',
      description: 'an imaginary Admin Dashboard UI with HTML & CSS',
      img: 'assets/mockups/admin-dashboard-mockup.webp',
      skillsImgs: [
        'assets/html5-original.svg',
        'assets/css3-plain-wordmark.svg',
      ],
      previewHref: 'https://red1code.github.io/Admin-Dashboard/',
      sourceCodeHref: 'https://github.com/red1code/Admin-Dashboard',
    }
  ]

  webApps: Project[] = [
    {
      title: 'Woocommerce Product Variations Generator',
      description: `An app that generates every possible combination of variations for Woocommerce variable products. \n If you are a wordpress developer who uses Woocommerce, I believe this app will be very useful to you.`,
      img: 'assets/mockups/Woocommerce-Product-Variations-Generator.webp',
      skillsImgs: [
        'assets/html5-original.svg',
        'assets/css3-plain-wordmark.svg',
        'assets/javascript-original.svg',
      ],
      previewHref: 'https://red1code.github.io/product-variations/',
      sourceCodeHref: 'https://github.com/red1code/product-variations'
    },
    {
      title: 'Todo App',
      description: `A todo list web application.`,
      img: 'assets/mockups/todo-app-mockup-laptop-phone.webp',
      skillsImgs: [
        'assets/html5-original.svg',
        'assets/css3-plain-wordmark.svg',
        'assets/javascript-original.svg',
        'assets/Webpack-logo.webp',
      ],
      previewHref: 'https://red1code.github.io/todo-app/',
      sourceCodeHref: 'https://github.com/red1code/todo-app',
    },
    {
      title: 'SCRUM Board',
      description: `A simple SCRUM Board Angular application. I used Firebase for database and hosting`,
      img: 'assets/mockups/backlog-mockup.webp',
      skillsImgs: [
        'assets/angular.svg',
        'assets/typescript.svg',
        'assets/firebase-logo.svg',
      ],
      previewHref: 'https://kanban-fire-workshop-52a4f.web.app/',
      sourceCodeHref: 'https://github.com/red1code/SCRUM-Board',
    },
    {
      title: 'Rendezvous App',
      description: `A web application that simulates booking an appointment with a doctor. \n
      I used Angular for Front-end. Firebase for database and hosting`,
      img: 'assets/mockups/Rendezvous-app-mockup.webp',
      skillsImgs: [
        'assets/angular.svg',
        'assets/typescript.svg',
        'assets/git-plain.svg',
        'assets/firebase-logo.svg',
      ],
      previewHref: 'https://ngauth-d9be6.web.app/',
      sourceCodeHref: 'https://github.com/red1code/new-rdv-app',
    },
    {
      title: 'CV Builder App',
      description: 'A CV builder web application. I built it to practice some concepts that I have learned when I was exploring React.',
      img: 'assets/mockups/cv-builder-mockup.webp',
      skillsImgs: ['assets/react-logo.svg'],
      previewHref: 'https://zesty-llama-887c9b.netlify.app/',
      sourceCodeHref: 'https://github.com/red1code/cv-builder',
    },
    {
      title: 'Weather App',
      description: `A weather web application. The purpose of this app is to practice using APIs and asynchronous programming`,
      img: 'assets/mockups/weather-app-mockup.webp',
      skillsImgs: [
        'assets/html5-original.svg',
        'assets/css3-plain-wordmark.svg',
        'assets/javascript-original.svg',
      ],
      previewHref: 'https://red1code.github.io/weather-app/',
      sourceCodeHref: 'https://github.com/red1code/weather-app',
    },
  ]

  browserGames: Project[] = [
    {
      title: 'Memory Cards Game',
      description: `Test your memory capacity and get points by clicking on images, but don't click on any, more than once.\n
      I built it to practice some concepts that I have learned when I was exploring React.`,
      img: 'assets/mockups/Memory-Cards-Game-mockup.webp',
      skillsImgs: ['assets/react-logo.svg'],
      previewHref: 'https://glowing-brigadeiros-86a872.netlify.app/',
      sourceCodeHref: 'https://github.com/red1code/memory-cards-game'
    },
    {
      title: 'Rock Paper Scissors Game',
      description: `A simple game you can play on the browser`,
      img: 'assets/mockups/rock-paper-scissors-game-mockup.webp',
      skillsImgs: [
        'assets/html5-original.svg',
        'assets/css3-plain-wordmark.svg',
        'assets/javascript-original.svg',
      ],
      previewHref: 'https://red1code.github.io/rock-paper-scissors-game/',
      sourceCodeHref: 'https://github.com/red1code/rock-paper-scissors-game',
    },
  ]
}
