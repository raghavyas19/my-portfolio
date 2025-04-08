import lmsImg from '../assets/images/lms.png'
import sortingImg from '../assets/images/sorting.png'
import todoImg from '../assets/images/todo.jpg'
import weatherImg from '../assets/images/weather.png'

export const projects = [
  {
    id: 1,
    title: "Loan Management App",
    description: "A fintech Loan Management System enabling seamless loan processing and secure banking API integration. Currently in development.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: lmsImg,
    githubUrl: "https://github.com/raghavyas19/CASH-N-TECH",
    liveUrl: "https://cash-n-tech.vercel.app/homescreen"
  },
  {
    id: 2,
    title: "Sorting Algo. Visualizer",
    description: "Developed a Sorting Visualizer with HTML, CSS, JS, and Bootstrap, featuring an interactive UI to visualize sorting algorithms in real time.",
    technologies: ["HTML", "JavaScript", "Bootstrap"],
    imageUrl: sortingImg,
    githubUrl: "https://github.com/raghavyas19/Sorting-Visualizer",
    liveUrl:"https://raghavyas19.github.io/Sorting-Visualizer/"
  },
  {
    id: 3,
    title: "To-Do List App",
    description: "A simple and efficient To-Do List App to manage your tasks effortlessly.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: todoImg,
    githubUrl: "https://github.com/raghavyas19/to-do-list",
    liveUrl: "https://raghavyas19.github.io/to-do-list/"
  },
  {
    id: 4,
    title: "Weather App",
    description: "Fast and efficient weather app of any city with 5-day forecasting.",
    technologies: ["React", "Vite", "OpenWeather API", "Tailwind CSS"],
    imageUrl: weatherImg,
    githubUrl: "https://github.com/raghavyas19/weather-app",
    liveUrl: "https://weather-app-raghavyas19.vercel.app/"
  }
];