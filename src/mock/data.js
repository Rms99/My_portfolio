import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rana Manav Singh | Developer ', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rana Manav Singh',
  subtitle: '{ Software developer }',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'rana.jpg',
  paragraphOne: 'Hi ! my name is Rana Manav Singh I am currently majoring Computer Science at york university.I am a programmer who is successful at managing teams, driving progress toward project milestones, quality assurance, and on-time delivery, with exceptional talents in Java. ',
  paragraphTwo: 'My technical skills include - Java; Python; C; C++; JavaScript, CSS; HTML5; SQL; React; Gatsby; Docker; GitHub; Bash',
  paragraphThree: 'I am very reliable ,a hard worker and a very enthusiastic person. Curious for knowledge and have a keen interest in developing softwares, websites and applications.',
  resume: 'https://github.com/Rms99/Resum_e/blob/main/Resume%20-%20Rana%20Manav%20Singh.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_p.JPG',
    title: 'Express Parking System (JAVA, Maven, JaCoCo)',
    info: 'Developed the system for replacing manual parking spots all over Toronto, using java for backend, java swing for GUI implementation ,CSV files as database and used Maven to manage the libraries.',
    info2: 'Wrote extensive Junit test cases for each of the above-mentioned requirements and reached 82.1% average code coverage for the non-GUI/Backend classes (Using EclEmma JaCoCo).',
    url: 'https://youtu.be/SUYLIIH4rQ0',
    repo: 'https://github.com/Rms99/Express_parking_System/tree/master/EECS3311-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_b.JPG',
    title: 'Invoice/Billing Software (JAVA, JAVA Swing)',
    info: 'Designed and implemented Java based billing system, used basic java concepts along with Java Swing (frontend) to make a billing system.',
    info2: 'Which calculates the total amount as well as has the option to print the receipt.',
    url: '',
    repo: 'https://github.com/Rms99/Billing-System', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Music Player (JAVA, JavaFX)',
    info: 'Developed and executed a Java based Music Player, using the javax.sound library and used JavaFX for GUI.',
    info2: 'The player can play any music file and the user is able to load, pause/resume and loop the music.',
    url: '',
    repo: 'https://github.com/Rms99/Music_Player_3', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_c.JPG',
    title: 'Calculator (Python)',
    info: 'Developed a calculator with a proper user-friendly GUI.',
    info2: 'Which can perform Addition, Subtraction, Division, multiplication, Square root, Sin/Cos/tan and is also able to handle decimal and negative numbers.',
    url: '',
    repo: 'https://github.com/Rms99/Calculator_python', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Contact me',
  email: 'manavrana999@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/RanaManavSingh1',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://github.com/Rms99/Resum_e/blob/main/Resume%20-%20Rana%20Manav%20Singh.pdf',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rana-manav-singh-20b21518a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Rms99',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
