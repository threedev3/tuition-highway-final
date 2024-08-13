import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";
import icon3 from "../assets/img/icon3.png";
import icon4 from "../assets/img/icon4.png";
import icon5 from "../assets/img/icon5.png";
import computer from "../assets/img/computer.gif";
import maths from "../assets/img/mathematics.gif";
import physics from "../assets/img/physics.gif";
import chemistry from "../assets/img/chemistry.gif";
import biology from "../assets/img/biology.gif";
import english from "../assets/img/english.gif";
import step from "../assets/img/step.png";
import firstStep from "../assets/img/firstStep.png";
import step2 from "../assets/img/step2.png";
import lastStep from "../assets/img/lastStep.png";
import avatar1 from "../assets/img/avatar1.png";
import avatar2 from "../assets/img/avatar2.png";
import avatar3 from "../assets/img/avatar3.png";
import avatar4 from "../assets/img/avatar4.png";
import xIcon from "../assets/img/xIcon.png";
import fbIcon from "../assets/img/fbIcon.png";
import instaIcon from "../assets/img/instaIcon.png";
import linkedInIcon from "../assets/img/linkedInIcon.png";
import curricula1 from "../assets/img/curricula1.png";
import curricula2 from "../assets/img/curricula2.png";
import curricula3 from "../assets/img/curricula3.png";
import curricula4 from "../assets/img/curricula4.png";
import curricula5 from "../assets/img/curricula5.png";
import heroIcon1 from "../assets/img/heroIcon1.png";

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
    title: "Qualified Expert Tutors",
    description:
      "Specialized in British (IGCSE, GCSE, A-levels), American, IB, and CBSE curriculum.",
    icon: icon1,
  },
  {
    title: "Personalized Learning",
    description: "Tailored lessons to suit individual student needs.",
    icon: icon2,
  },
  {
    title: "Flexible Scheduling",
    description: "Experience our teaching style before committing.",
    icon: icon3,
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Over 90,000 live lessons in Maths, Physics, Computer Science, and more.",
    icon: icon5,
  },
  {
    title: "Proven Results",
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
    img: maths,
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
];

const curricula = [
  {
    title: "British Curriculum",
    img: curricula1,
  },
  {
    title: "American Curriculum",
    img: curricula2,
  },
  {
    title: "International Baccalaureate",
    img: curricula3,
  },
  {
    title: "French Curriculum",
    img: curricula4,
  },
  {
    title: "Indian CBSE",
    img: curricula5,
  },
  {
    title: "Online Homeschooling",
    img: heroIcon1,
  },
  {
    title: "IELTS",
    img: curricula2,
  },
  {
    title: "SAT",
    img: curricula3,
  },
];

const testimonials = [
  {
    name: "Emily R.",
    review:
      "The strategies I learned at Tuition Highway boosted my score by 200 points!The strategies I learned at Tuition Highway boosted my score by 200 points!",
  },
  {
    name: "Emily R.",
    review:
      "The strategies I learned at Tuition Highway boosted my score by 200 points!",
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
