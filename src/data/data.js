import {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  computer,
  math,
  physics,
  chemistry,
  biology,
  english,
  step,
  firstStep,
  step2,
  lastStep,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  fbIcon,
  instaIcon,
  linkedInIcon,
  curricula1,
  curricula2,
  curricula3,
  curricula4,
  curricula5,
  heroIcon1,
} from "../assets/img/images";

const navigation = [
  "Home",
  "About",
  {
    name: "What we Teach",
    dropdown: [
      { name: "British Curriculum", dropdown: ["IGCSE/A-Level Courses"] },
      "American Curriculum",
      "International Baccalaureate",
      "French Curriculum",
      "Indian CBSE",
      "FBISE",
      "Online Homeschooling",
      "SAT",
      "IELTS",
      "Coding",
    ],
  },
  "Testimonials",
  "Join as a Tutor",
];

const reasons = [
  {
    wholeTitle: "Qualified Expert Tutors",
    firstTitle: "Qualified",
    secondTitle: "Expert Tutors",
    description:
      "Specialized in British (IGCSE, GCSE, A-levels), American, IB, and CBSE curriculum.",
    icon: icon1,
  },
  {
    wholeTitle: "Personalized Learning",
    firstTitle: "Personalized",
    secondTitle: "Learning",
    description: "Tailored lessons to suit individual student needs.",
    icon: icon2,
  },
  {
    wholeTitle: "Flexible Scheduling",
    firstTitle: "Flexible",
    secondTitle: "Scheduling",
    description: "Experience our teaching style before committing.",
    icon: icon3,
  },
  {
    wholeTitle: "Comprehensive Curriculum",
    firstTitle: "Comprehensive",
    secondTitle: "Curriculum",
    description:
      "Over 90,000 live lessons in Maths, Physics, Computer Science, and more.",
    icon: icon5,
  },
  {
    wholeTitle: "Proven Results",
    firstTitle: "Proven",
    secondTitle: "Results",
    description:
      "Over 90,000 live lessons in Maths, Physics, Computer Science, and more.",
    icon: icon4,
  },
];

const numbers = [
  {
    title: "Parent",
    spanTitle: "Satisfaction",
    count: 95,
    suffix: "%",
  },
  {
    title: "A+ & A",
    spanTitle: "Grades",
    count: 75,
    suffix: "%",
  },
  {
    title: "Faculty",
    spanTitle: "Pool",
    count: 500,
    suffix: "+",
  },
  {
    title: "Countries",
    spanTitle: "Covered",
    count: 15,
    suffix: "+",
  },
];

const subjects = [
  {
    title: "Mathematics",
    img: math,
  },
  {
    title: "Physics",
    img: physics,
  },
  {
    title: "Chemistry",
    img: chemistry,
  },
  {
    title: "English",
    img: english,
  },
  {
    title: "Biology",
    img: biology,
  },
  {
    title: "Modern Languages",
    img: computer,
  },
  {
    title: "English",
    img: english,
  },
  {
    title: "Biology",
    img: biology,
  },
  {
    title: "Modern Languages",
    img: computer,
  },
];

const curricula = [
  {
    title: "British Curriculum",
    firstTitle: "British",
    secondTitle: "Curriculum",
    img: curricula1,
  },
  {
    title: "American Curriculum",
    firstTitle: "American",
    secondTitle: "Curriculum",
    img: curricula2,
  },
  {
    title: "International Baccalaureate",
    firstTitle: "International",
    secondTitle: "Baccalaureate",
    img: curricula3,
  },
  {
    title: "French Curriculum",
    firstTitle: "French",
    secondTitle: "Curriculum",
    img: curricula4,
  },
  {
    title: "Indian CBSE",
    firstTitle: "Indian",
    secondTitle: "CBSE",
    img: curricula5,
  },
  {
    title: "Online Homeschooling",
    firstTitle: "Online",
    secondTitle: "Homeschooling",
    img: heroIcon1,
  },
  {
    title: "IELTS",
    firstTitle: "IELTS",
    img: curricula2,
  },
  {
    title: "SAT",
    firstTitle: "SAT",
    img: curricula3,
  },
];

const testimonials = [
  {
    name: "Mrs. Raghda",
    review:
      "The feedback is good. What I highly appreciate and that was the key reason for our satisfaction is communication with u and fast response and actions this makes a big difference. Overall it's going well thank u very much",
    class: "AP",
    stars: 5,
    circleColor: "bg-[#00D1FF]",
  },
  {
    name: "Kashif Javed",
    review:
      "It has been ready pleasure using your services and indeed our daughter Mariam has benefited a lot.  We will most definitely recommend your platform to other families",
    class: "GCSE Economics, IGCSE Maths, IGCSE Chemistry, IGCSE Arabic",
    stars: 4,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Mr. Arif",
    review:
      "My daughter really likes and fees comfortable. Plus it is online so it's really convenient for her. Above all the classes are really informative",
    class: "IGCSE",
    stars: 4.5,
    circleColor: "bg-[#00D1FF]",
  },
  {
    name: "Mrs. Sajid",
    review:
      "I am very happy with your services and I have recommended your institution to a couple of friends and shared your number.",
    class: "IGCSE Maths",
    stars: 4.5,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Mrs. Sadia",
    review:
      "It's been going really well. Both my daughters have benefited from tuitions over the years and have built a solid foundation.",
    class: "Maths IGCSE, Physics IGCSE, Arabic IGCSE",
    stars: 4.5,
    circleColor: "bg-[#00D1FF]",
  },
  {
    name: "Mr. Suresh",
    review:
      "Yes, we are satisfied with the classes Siddhi is understanding very well. Please continue to help her",
    class: "Maths Grade 8, CBSE",
    stars: 4,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Zainab Tariq",
    review:
      "Thank you. It was really good experience. I have given your number to my other friends",
    class: "IGCSE Maths",
    stars: 5,
    circleColor: "bg-[#00D1FF]",
  },
  {
    name: "Mrs. Saba",
    review:
      "I fully acknowledge the services, quick response, quality teacher, well managed throughout.",
    class: "AS Level Physics & AS Level Stats",
    stars: 4.5,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Mr. Ahmed Zaid",
    review:
      "We are very satisfied and already recommended your academy to many colleagues.",
    class: "IGCSE Biology, IGCSE Physics",
    stars: 4,
    circleColor: "bg-[#00D1FF]",
  },
  {
    name: "Mr. Elwaleed",
    review:
      "My daughter like studying with your academy. Teachers are cooperative. Thank you. ",
    class: "Maths IGCSE, Physics IGCSE, Chemistry IGCSE",
    stars: 5,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Mrs. Maryam Abbasi",
    review:
      "Your services are impressive, and I do expect good services in future as well.",
    class: "Maths & Physics IGCSE",
    stars: 4,
    circleColor: "bg-[#00D1FF]",
  },
  {
    name: "Mrs. Sumera",
    review: "Excellent experience. Tuition Highway team is very professional.",
    class: "ICT IGCSE Economics IGCSE, Islamic Studies IGCSE",
    stars: 4,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Mrs. Ammara",
    review: "Ammar got A* in CS and Economic and A in bio chemistry physics.",
    class: "Grade 11, AQA Board",
    stars: 4,
    circleColor: "bg-[#00D1FF]",
  },
  {
    name: "Mr. Amir Habib",
    review: "Habiba got very good Marks in Maths. Thanks for your support.",
    class: "SAT",
    stars: 5,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Mariea Fernandess",
    review: "My daughter is happy.",
    class: "Maths grade 7",
    stars: 4.5,
    circleColor: "bg-[#00D1FF]",
  },

  {
    name: "Mrs. Lina",
    review: "Bravo thank you so much.",
    class: "Kindergarten",
    stars: 5,
    circleColor: "bg-[#F46322]",
  },
];

const stepsContent = [
  {
    img: firstStep,
    title: "Student",
    subtitle: "Assessment",
    description: "We evaluate your current academic standing and goals.",
    style:
      "min-[641px]:w-[80%] min-[481px]:w-[75%] min-[464px]:w-[55%] min-[429px]:w-[60%] min-[375px]:w-[70%] min-[334px]:w-[80%] w-[90%]",
    imgStyle: "min-[480px]:w-[280px] w-[300px] h-[270px]",
  },
  {
    img: step,
    title: "Tutor",
    subtitle: "Matching",
    description:
      "We pair you with an expert tutor specialized in your subject and curriculum.",
    style:
      "min-[641px]:w-[80%] min-[481px]:w-[75%] min-[449px]:w-[54%] min-[409px]:w-[60%] min-[358px]:w-[70%] min-[319px]:w-[80%] w-[90%]",
    imgStyle: "min-[480px]:w-[280px] w-[300px] h-[270px]",
  },
  {
    img: step2,
    title: "Personalized",
    subtitle: "Learning Plan",
    description:
      "Your tutor creates a tailored strategy to address your specific needs.",
    style:
      "min-[641px]:w-[80%] min-[481px]:w-[75%] min-[476px]:w-[54%] min-[466px]:w-[58%] min-[421px]:w-[65%] min-[395px]:w-[70%] min-[372px]:w-[75%] min-[352px]:w-[80%] w-[85%]",
    imgStyle: "min-[480px]:w-[280px] w-[300px] h-[270px]",
  },
  {
    img: step,
    title: "Regular",
    subtitle: "Sessions",
    description:
      "Attend flexible, one-on-one online sessions at times that suit you.",
    style:
      "min-[641px]:w-[80%] min-[481px]:w-[75%] min-[471px]:w-[54%] min-[401px]:w-[60%] min-[350px]:w-[70%] min-[303px]:w-[80%] w-[90%]",
    imgStyle: "min-[480px]:w-[280px] w-[300px] h-[270px]",
  },
  {
    img: step2,
    title: "Progress",
    subtitle: "Tracking",
    description: "We continuously monitor and report on your improvement.",
    style:
      "min-[641px]:w-[80%] min-[481px]:w-[75%] min-[467px]:w-[55%] min-[432px]:w-[60%] min-[377px]:w-[70%] min-[336px]:w-[80%] w-[90%]",
    imgStyle: "min-[480px]:w-[280px] w-[300px] h-[270px]",
  },
  {
    img: lastStep,
    title: "Achieve Your",
    subtitle: "Goals",
    description: "Watch your grades improve and confidence soar.",
    style:
      "min-[641px]:w-[86%] min-[481px]:w-[86%] min-[420px]:w-[60%] min-[367px]:w-[70%] min-[327px]:w-[80%] w-[90%]",
    imgStyle:
      "min-[1200px]:w-[190px] min-[1100px]:w-[180px] min-[1025px]:w-[170px] min-[960px]:w-[200px] min-[841px]:w-[175px] min-[801px]:w-[160px] min-[750px]:w-[200px] min-[641px]:w-[180px] min-[570px]:w-[230px] min-[510px]:w-[210px] min-[481px]:w-[190px] w-[230px] h-[270px]",
  },
];

const tutors = [
  {
    icon: avatar1,
    name: "Theresa Webb",
    subject: "Physics",
    experience: "15 Years",
    grade: "70% A grades",
  },
  {
    icon: avatar2,
    name: "Courtney Henry",
    subject: "Metathetic",

    experience: "15 Years",
    grade: "70% A grades",
  },
  {
    icon: avatar3,
    name: "Albert Flores",
    subject: "Career Educator",

    experience: "15 Years",
    grade: "70% A grades",
  },
  {
    icon: avatar4,
    name: "Marvin McKinney",
    subject: "English",

    experience: "15 Years",
    grade: "70% A grades",
  },
  {
    icon: avatar4,
    name: "Marvin McKinney",
    subject: "English",

    experience: "15 Years",
    grade: "70% A grades",
  },
];

const faqs = [
  {
    question: "Can I use the modem/router I already have?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sed dignissim sit aenean orci. Mollis nunc massa molestie ut eget egestas. Ipsum platea leo euismod mauris diam nunc quis. Ac eros a arcu amet viverra elementum elit.",
  },
  {
    question: "Will speeds go up and down?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sed dignissim sit aenean orci. Mollis nunc massa molestie ut eget egestas. Ipsum platea leo euismod mauris diam nunc quis. Ac eros a arcu amet viverra elementum elit.",
  },
  {
    question: "When will my service go live?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sed dignissim sit aenean orci. Mollis nunc massa molestie ut eget egestas. Ipsum platea leo euismod mauris diam nunc quis. Ac eros a arcu amet viverra elementum elit.",
  },
  {
    question: "I already have broadband, how do I switch?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sed dignissim sit aenean orci. Mollis nunc massa molestie ut eget egestas. Ipsum platea leo euismod mauris diam nunc quis. Ac eros a arcu amet viverra elementum elit.",
  },
];

const products = ["Features", "Integration", "Changelog", "Roadmap"];
const company = ["Our Team", "Our Value", "Blog"];
const resources = ["Download", "Documentation", "Contact"];

const selectedCountries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo (Kinshasa)",
  "Costa Rica",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See (Vatican City)",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const subjectsOffer = [
  "English",
  "Mathematics",
  "Science",
  "Economics",
  "Biology",
  "Chemistry",
  "Physics",
  "Business",
  "Computer Science",
];

const ourCurriculum = [
  "British",
  "American",
  "IB",
  "French",
  "Indian",
  "FBISE",
];

const socialIcons = [
  {
    icon: fbIcon,
    alt: "facebook",
    to: "https://www.facebook.com/tuitionhighway",
  },
  {
    icon: linkedInIcon,
    alt: "linkedIn",
    to: "https://www.linkedin.com/company/tuition-highway",
  },
  {
    icon: instaIcon,
    alt: "instagram",
    to: "https://www.instagram.com/tuitionhighway/",
  },
];

export {
  navigation,
  reasons,
  numbers,
  subjects,
  testimonials,
  stepsContent,
  tutors,
  faqs,
  products,
  company,
  resources,
  selectedCountries,
  subjectsOffer,
  ourCurriculum,
  socialIcons,
  curricula,
};
