import Page from "./../assets/portfolioImages/intropage.jpg";
// import AWS from "./../assets/portfolioImages/s3.PNG";
import Todo from "./../assets/portfolioImages/todo.jpg"
import TIC from "./../assets/portfolioImages/TIC.png"
import LALA from "./../assets/portfolioImages/LALA.png"
import TTC from "./../assets/portfolioImages/TTC.jpg"
//import CS114 from "./../assets/portfolioImages/CS114.png"
import INBOT from "./../assets/portfolioImages/INBOT.png"
import BCC from "./../assets/portfolioImages/BCC.png"

// in progress projects

import Servista from './../assets/portfolioImages/servista.png'
import landingPage from './../assets/portfolioImages/url.jpg'

const ProjectsData = [
  {
    id: "todo",
    img: INBOT,
    name: "Capstone Project",
    stack: ["< JavaScript />  ", "< Sass />"],
    live: "https://drive.google.com/file/d/19VCcjmUVP_UNeiZOswIDbq6xOINXi1C7/view?usp=sharing",
    //source: "https://github.com/rimshub/JavaScript-Todo-App",
    description:  
        "For my Capstone Project at Minerva University, I developed an AI-driven internal Assistant named INBOT, aimed at transforming internal communications within corporations. This project involved designing an AI-powered chatbot that leverages OpenAI's GPT models to efficiently manage and access corporate knowledge, enhancing productivity and employee satisfaction while adhering to GDPR standards. INBOT was engineered to integrate seamlessly with corporate systems, providing rapid, accurate access to a wide array of internal documents, from HR policies to project management guidelines. By emphasizing ethical AI practices and user-centric design, the project showcased how advanced AI solutions could be effectively implemented in corporate environments to improve decision-making and foster a more collaborative workplace culture."
  },
  {
    id: "todo",
    img: TIC,
    name: "Tic-Tac-Toe with AI Opponent",
    stack: ["< JavaScript />  ", "< Sass />"],
    live: "https://github.com/FlaIespa/CS152-AI-Tic-Tac-Toe",
    source: "https://github.com/FlaIespa/CS152-AI-Tic-Tac-Toe",
    description:  
        "For my Capstone Project at Minerva University, I developed an AI-driven internal Assistant named INBOT, aimed at transforming internal communications within corporations. This project involved designing an AI-powered chatbot that leverages OpenAI's GPT models to efficiently manage and access corporate knowledge, enhancing productivity and employee satisfaction while adhering to GDPR standards. INBOT was engineered to integrate seamlessly with corporate systems, providing rapid, accurate access to a wide array of internal documents, from HR policies to project management guidelines. By emphasizing ethical AI practices and user-centric design, the project showcased how advanced AI solutions could be effectively implemented in corporate environments to improve decision-making and foster a more collaborative workplace culture."
  },

  {
    id: "rest-countries",
    img: LALA,
    name: "Latin American Leadership Academy",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    //live: "https://br.usembassy.gov/u-s-diplomatic-mission-unveils-the-list-of-the-50-youth-ambassadors-selected-for-the-2019-program/",
    //source: "https://github.com/rimshub/rest-countries-api",
    description:  
        "In my role at the organization, I undertook the critical responsibilities of evaluating applications and conducting interviews with prospective students for our Leadership Bootcamps, which were essential in selecting capable and motivated participants who could benefit from and contribute to our intensive training programs. Additionally, I played a pivotal role in the strategic expansion of the organization into Brazil by organizing and mapping contacts of prospective partners. This effort was fundamental in establishing a solid network and groundwork for the successful launch of a national chapter in Brazil. My tasks involved detailed analysis and vetting of potential collaborators, ensuring that we engaged with stakeholders who shared our vision and could effectively support our mission in the region, thereby facilitating a stronger organizational presence and more impactful initiatives.",
  }, 

  {
    id: "advice-generator",
    img: BCC,
    name: "Behavior Change Chatbot",
    stack: ["< HTML5 />", "< CSS3 />", "< JavaScript />"],
    live: "https://github.com/FlaIespa/Learning-Env/tree/main/Behavior_Change_Chatbot",
    source: "https://github.com/FlaIespa/Learning-Env/tree/main/Behavior_Change_Chatbot",
    description:  
        "The Behavior Change Chatbot, developed for my SS162 assignment and Capstone project, was designed to leverage the intersection of technology and psychology to support mental health improvements. Utilizing techniques and models from my CS162 course, such as Natural Language Processing (NLP) and principles of Cognitive Behavioral Therapy (CBT), this chatbot aimed to facilitate behavioral changes in users by engaging them in meaningful dialogues. Throughout the project, I navigated challenges like enhancing user engagement and ensuring the accuracy of the bot's empathetic responses. The implementation process involved rigorous testing and iterative refinement, providing practical insights into how tech-based solutions can positively impact mental health management.",
  },
  
  {
    id: "dropdown-nav",
    //img: CS114,
    name: "Data Scientist at Vetor Brasil",
    stack: ["< React.js />   ", "< CSS3 />"],
    //live: "https://drive.google.com/file/d/1VwYktGXXkgFIsrRqC6owBKT9bfjQ8OmI/view?usp=sharing",
    //source: "https://github.com/rimshub/figma-design-to-reactjs",
    description:  
        "In my role as a freelance Data Scientist, I seamlessly integrated into the company's dynamic project focused on aggregating comprehensive student data acquired through Form Assembly forms. My responsibilities extended beyond mere data collection; I meticulously curated and structured this wealth of information into meaningful categories. Leveraging cutting-edge technologies such as Python, SQL, and data visualization tools, I embarked on a journey of insightful analysis. My goal was to extract actionable insights from the collected data, pinpointing the most pertinent questions to inform future candidate selection processes, ultimately enhancing the company's decision-making capabilities.",
  },  
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
