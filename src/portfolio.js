/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Taha Mahmood",
  title: "Hi all, I'm Taha",
  subTitle: emoji(
    "Passionate about unraveling insights from data through machine learning and deep learning algorithms, with a keen focus on Computer Vision and NLP. Excited to connect with fellow enthusiasts and collaborate on data-driven innovations in these cutting-edge domains."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WgeYNBqoYEzrH_r2epbs28s_bq1ExdZk/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/TahaMahmood24",
  linkedin: "https://www.linkedin.com/in/taha-mahmood/",
  gmail: "taha.mahmood.73@gmail.com",
  facebook: "https://www.facebook.com/taha.mahmood.54",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I am a Data Scientist who likes to explore",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "August 2023 - April 2025",
      desc: "Researching on formulating dynamical systems using machine vision.",
      descBullets: [
        "EEE 549: Statistical Machine Learning",
        "DSE 598: Statistics for Data Analysts",
        "IEE 620: Optimization I"
      ]
    },
    {
      schoolName: "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Mechanical Engineering",
      duration: "August 2017 - July 2021",
      desc: "GIKI 100% Merit Scholarship, 2nd Merit Position in Admission Test, 8th position in Asian Pacific Mathematics Olympiad",
      descBullets: [
        "ME 452: Robotics",
        "ME 464: System Dynamics and Control",
        "MS 492: Operations Management"
        ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science Models (Predictive Models/NLP/Computer Vision)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Engineering (SQL, PostgreSQL, AWS)",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Regional Data Product Specialist",
      company: "Daraz (Alibaba Group)",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "January 2023 – August 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Executed 7 Product A/B Testing strategies across the Buyer application such as Homepage, resulting in a 25% reduction in bounce rate and an increase in average user session duration from 1.35 minutes to 1.68 minutes",
        "Engineered a robust product sentiment analysis solution, leveraging BERT-NLP techniques to extract insights from customer reviews with 86% accuracy, thereby improving strategic product curation process",
        "Refined a product recommender system with a team of 5 engineers, revolutionizing application user experience through personalized product recommendations, increasing Product Click-Through rate by 12%",
        "Led the Badge Project, a data-driven initiative to expand visibility for subsidized items through enhanced assortment display, boosting weekly Gross Merchandise Value by $0.95 million across all five ventures"
      ]
    },
    {
      role: "Management Trainee",
      company: "Daraz (Alibaba Group)",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "July 2021 – December 2022",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Executed 7 Product A/B Testing strategies across the Buyer application such as Homepage, resulting in a 25% reduction in bounce rate and an increase in average user session duration from 1.35 minutes to 1.68 minutes",
        "Engineered a robust product sentiment analysis solution, leveraging BERT-NLP techniques to extract insights from customer reviews with 86% accuracy, thereby improving strategic product curation process",
        "Refined a product recommender system with a team of 5 engineers, revolutionizing application user experience through personalized product recommendations, increasing Product Click-Through rate by 12%",
        "Led the Badge Project, a data-driven initiative to expand visibility for subsidized items through enhanced assortment display, boosting weekly Gross Merchandise Value by $0.95 million across all five ventures"
        ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "List of Certifications",

  achievementsCards: [
    {
      title: "IBM Data Science Specialization",
      subtitle:
        "Completed 10 different modules to learn about Machine Learning models, Cloud based Computing and concluded it with a Capstone Project",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/EKE5Z3PPNHNA"
        }
      ]
    },
    {
      title: "Google Advanced Data Analytics",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/KXC53WG9DDYG"
        }
      ]
    },

    {
      title: "Google Data Analytics",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", 
         url: "https://www.coursera.org/account/accomplishments/specialization/certificate/5T9E2CGWPMUD"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-602-574-5147",
  email_address: "taha.mahmood.73@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
