const personDetails = {
  personal: {
    firstName: "Suhana",
    lastName: "",
    email: "b21229@students.iitmandi.ac.in",
    age: 20,
    languages: "Hindi, English & French",
    // phone: "Will be Available soon 😉",
    contactMail: "suhanagun@gmail.com",
    address: "Noida, India",
    nationality: "Indian 🇮🇳",
    freelance: "ML/AI, SDE",
    description: "Currently, I am pursuing my undergraduate studies in Data Science & Engineering at IIT Mandi. One of my key strengths lies in my ability to quickly grasp new concepts and efficiently apply them. Alongside my technical skills, I possess a diverse range of managerial competencies and conflict resolution abilities. When faced with high-pressure situations, I demonstrate critical thinking skills, allowing me to find effective solutions. My ultimate goal is to evolve into a highly skilled and respected Tech Developer, making meaningful contributions to the field. At present, I am navigating the challenging and turbulent waters of my engineering journey, constantly striving to overcome obstacles and achieve success."
  },
  professional: {
    yoe: 8,
    completedProjects: 20,
    happyCustomers: 8,
    awardsWon: 10,
  },
  academic: {
    college: {
      name: "Indian Institute of Technology, Mandi",
      duration: "2021-2025",
      course: "Data Science & Engineering",
    },
    school: {
      name: "Delhi Public School, RK Puram",
      duration: "2019-2021",
      course: "High School"
    }
  },
  skills: {
    // key: skill name
    // value: skill percentage
    "html": 100,
    "javascript": 80,
    "css": 100,
    "nodejs": 80,
    "wordpress": 50,
    "python": 100,
    "gitAndGithub": 90,
    "vscode": 100,
  },
  social: {
    github: "https://github.com/Suhana3003",
    linkedin: "https://www.linkedin.com/in/ms-suhana-491949224/",
    twitter: "https://twitter.com/suhana_3003",
    telegram: "https://t.me/Suhana"
  }
};

function setElemAttribute(elemId, elemValue, attr = 'innerText') {
  const elem = document.getElementById(elemId);

  // set value only if element is present
  if (elem) {
    console.log("setting attribute for" + elem, attr, elemValue);
    elem[attr] = elemValue;
  }
}

function setSkillValue(skillName) {
  setElemAttribute('skill-' + skillName, personDetails.skills[skillName] + '%');
  const div = document.getElementsByClassName('skill-' + skillName)[0];
  if (div) {
    const className = 'p' + personDetails.skills[skillName];
    div.classList.remove('p0');
    div.classList.add(className);
  }
}

// index.html
setElemAttribute('person-name', personDetails.personal.firstName + ' ' + personDetails.personal.lastName);
setElemAttribute('person-desc', personDetails.personal.description);

// about.html
setElemAttribute('person-fname', personDetails.personal.firstName);
setElemAttribute('person-lname', personDetails.personal.lastName);
setElemAttribute('person-age', personDetails.personal.age);
setElemAttribute('person-address', personDetails.personal.address);
setElemAttribute('person-nationality', personDetails.personal.nationality);
setElemAttribute('person-freelance', personDetails.personal.freelance);
setElemAttribute('person-email', personDetails.personal.email);
setElemAttribute('person-contactMail', personDetails.personal.contactMail);
setElemAttribute('person-phone', personDetails.personal.phone);
setElemAttribute('person-languages', personDetails.personal.languages);
// professional
setElemAttribute('person-yoe', personDetails.professional.yoe);
setElemAttribute('person-completedProjects', personDetails.professional.completedProjects);
setElemAttribute('person-happyCustomers', personDetails.professional.happyCustomers);
setElemAttribute('person-awardsWon', personDetails.professional.awardsWon);
// academic
setElemAttribute('school-duration', personDetails.academic.school.duration);
setElemAttribute('school-name', personDetails.academic.school.name);
setElemAttribute('school-course', personDetails.academic.school.course);
setElemAttribute('college-duration', personDetails.academic.college.duration);
setElemAttribute('college-name', personDetails.academic.college.name);

// TODO: can be replaced with a loop
setSkillValue('html');
setSkillValue('css');
setSkillValue('javascript');
setSkillValue('python');
setSkillValue('nodejs');
setSkillValue('wordpress');
setSkillValue('gitAndGithub');
setSkillValue('vscode');

// contact.html
setElemAttribute('github', personDetails.social.github, 'href');
setElemAttribute('twitter', personDetails.social.twitter, 'href');
setElemAttribute('telegram', personDetails.social.telegram, 'href');
setElemAttribute('linkedin', personDetails.social.linkedin, 'href');
setElemAttribute('mail-hyperlink', "mailto:" + personDetails.personal.contactMail, 'href');