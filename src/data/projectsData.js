import Page from "./../assets/portfolioImages/intropage.jpg";
// import AWS from "./../assets/portfolioImages/s3.PNG";
import Todo from "./../assets/portfolioImages/todo.jpg"
import ForestTherapy from "./../assets/portfolioImages/ForestTherapy.jpg"
import YA from "./../assets/portfolioImages/YA.jpg"
import TTC from "./../assets/portfolioImages/TTC.jpg"
import PJB from "./../assets/portfolioImages/PJB.png"
import CS114 from "./../assets/portfolioImages/CS114.png"
import Utopia from "./../assets/portfolioImages/Utopia.png"

// in progress projects

import Servista from './../assets/portfolioImages/servista.png'
import landingPage from './../assets/portfolioImages/url.jpg'
 
const ProjectsData = [
  {
    id: "fyp",
    img: TTC,
    name: "Yoga Teacher Training",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://drive.google.com/file/d/1SCT36UWPy2pKDCEYBgMHZrXupS-mtylY/view?usp=sharing",
    //source: "https://servista.vercel.app/",
    description:  
        "This experience was a pivotal point in my personal growth journey, especially as a Minerva student, where I learned to embrace diverse identities. Previously, I had primarily identified myself through academic success, which limited my engagement with my body and well-being. However, during the pandemic, I decided to forge a healthier relationship with my body, starting with online yoga videos. This practice allowed me to feel strong and connected, motivating me to pursue Yoga Teacher Training, a decision that combined both my academic focus and personal growth. Throughout this training, I encountered challenges, humility, and a deep sense of connection to the yogic lifestyle. Graduating on April 15th marked the beginning of a new chapter in my journey of self-discovery and community engagement.",
  }, 
  {
    id: "rest-countries",
    img: YA,
    name: "U.S. Department of State Grantee",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://br.usembassy.gov/u-s-diplomatic-mission-unveils-the-list-of-the-50-youth-ambassadors-selected-for-the-2019-program/",
    //source: "https://github.com/rimshub/rest-countries-api",
    description:  
        "The program yearly selects students from an underprivileged financial background with outstanding academic performance, for support in the application process to universities in the US, and I was selected along with 17 other students among 1000 applicants. There, I leveraged workshops, a mentorship program and community visits to design improvement for a project I worked on in my community. Additionally, the U.S. Department of State periodically selects Alumni through a rigorous application to receive a grant in the amount of 1000 dollars to allow for continuity of projects for future endeavors. The grant directed towards participation in the Latin American Leadership Academy.",
  },

  {
    id: "space-tourism",
    img: PJB,
    name: "Brazilian Youth Parliament",
    stack: ["< React.js />", "< CSS3 />"],
    live: "https://www2.camara.leg.br/a-camara/programas-institucionais/experiencias-presenciais/parlamentojovem/edicoes-anteriores/2019",
    //source: "https://github.com/rimshub/react-space-tourism-website",
    description:  
        "The program yearly selects students to present a bill written by them focused on solving a problem in their community in a 1-week nationally televised program in the Brazilian Chamber to which all the federal congress people of the country were invited. I was selected along with other 76 students among 1943 projects. There, I was elected general Vice-President of the edition by peers, becoming responsible for leading - along with the President - the primary ceremony in which the bills would be discussed.",
  
  },
  // {
  //   id: "cloud-storage",
  //   img: AWS,
  //   name: "Cloud Storage with AWS Simple Storage Service",
  //   stack: ["< AWS S3 /> " , "< JavaScript /> " , "< Express.js />"],
  //   live: "",
  //   source: "https://github.com/rimshub/cloud-storage-s3",
  //   description:  
  //       "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge",
  // },

  {
    id: "advice-generator",
    img: ForestTherapy,
    name: "Forest Therapy",
    stack: ["< HTML5 />", "< CSS3 />", "< JavaScript />"],
    live: "https://drive.google.com/drive/folders/1nIM8fK2RyzJOSvdnB4Pad-nNtxQhSyHS?usp=sharing",
    //source: "https://github.com/rimshub/javascript-advice-generator",
    description:  
        "During my semester in Taipei with Minerva University, I had the privilege of enrolling in the Forest Therapy course, an enriching experience that allowed me to immerse myself in the therapeutic benefits of nature and explore the profound connection between the natural world and our well-being.",
  },


  {
    id: "todo",
    img: Utopia,
    name: "Minerva Assignment 1 - AH50 - My Utopia/Dystopia",
    stack: ["< JavaScript />  ", "< Sass />"],
    live: "https://drive.google.com/file/d/1Fjl_SMAWcfU_ys6yPUibSY31h_U-dB1z/view?usp=sharing",
    //source: "https://github.com/rimshub/JavaScript-Todo-App",
    description:  
        "This assignment held immense significance for me as it provided a unique opportunity to delve into the depths of my creativity. Drawing inspiration from a beloved book, 'The Most Beautiful World Our Hearts Know is Possible,' I experienced a rare sense of freedom at Minerva, unburdened by the typical constraints of assignments.",
  },

  {
    id: "dropdown-nav",
    img: CS114,
    name: "Minerva Assignment 2 - CS114 - Problem Set 2 ",
    stack: ["< React.js />   ", "< CSS3 />"],
    live: "https://drive.google.com/file/d/1VwYktGXXkgFIsrRqC6owBKT9bfjQ8OmI/view?usp=sharing",
    //source: "https://github.com/rimshub/figma-design-to-reactjs",
    description:  
        "This assignment carries profound significance as it marked the culmination of my journey in the CS114 Class, which I found to be the most challenging course I've ever encountered. Ultimately, I made the difficult decision to withdraw from the class, turning it into a poignant reminder of my resilience and self-respect, highlighting the pivotal moment when I chose to prioritize my well-being over continuing with the course.",
  },  
   
];

const InprogressProjectsData = [
   
  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/rimshub/URL-shortening-API-landing-page",
    description:  
        "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },

];

export default {ProjectsData, InprogressProjectsData}