import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";
import icon3 from "../assets/img/icon3.png";
import icon4 from "../assets/img/icon4.png";
import computer from "../assets/img/computer.gif";
import maths from "../assets/img/mathematics.gif";
import physics from "../assets/img/physics.gif";
import chemistry from "../assets/img/chemistry.gif";
import biology from "../assets/img/biology.gif";
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
    icon: icon1,
  },
  {
    title: "Personalized Learning",
    icon: icon2,
  },
  {
    title: "Flexible Scheduling",
    icon: icon3,
  },
  {
    title: "Comprehensive Curriculum",
    icon: icon4,
  },
  {
    title: "Proven Results",
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
    img: maths,
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
    img: maths,
  },
  {
    title: "American Curriculum",
    img: physics,
  },
  {
    title: "International Baccalaureate",
    img: computer,
  },
  {
    title: "French Curriculum",
    img: maths,
  },
  {
    title: "Indian CBSE",
    img: physics,
  },
  {
    title: "Online Homeschooling",
    img: computer,
  },
  {
    title: "IELTS",
    img: computer,
  },
  {
    title: "SAT",
    img: computer,
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
    title: "Assessment",
    description: "We evaluate your current academic standing and goals.",
    style: "min-[481px]:w-[80%] min-[430px]:w-[60%] w-[72%]",
    imgStyle: "min-[480px]:w-[280px] w-[300px] h-[280px]",
  },
  {
    img: step,
    title: "Tutor Matching",
    description:
      "We pair you with an expert tutor specialized in your subject and curriculum.",
    style: "min-[481px]:w-[80%] min-[430px]:w-[60%] w-[72%]",
    imgStyle: "min-[480px]:w-[280px] w-[300px] h-[280px]",
  },
  {
    img: step2,
    title: "Personalized Learning Plan",
    description:
      "Your tutor creates a tailored strategy to address your specific needs.",
    style: "min-[481px]:w-[80%] min-[430px]:w-[60%] w-[72%]",
    imgStyle: "min-[480px]:w-[280px] w-[300px] h-[280px]",
  },
  {
    img: step,
    title: "Regular Sessions",
    description:
      "Attend flexible, one-on-one online sessions at times that suit you.",
    style: "min-[481px]:w-[80%] min-[430px]:w-[60%] w-[72%]",
    imgStyle: "min-[480px]:w-[280px] w-[300px] h-[280px]",
  },
  {
    img: step2,
    title: "Progress Tracking",
    description: "We continuously monitor and report on your improvement.",
    style: "min-[481px]:w-[80%] min-[430px]:w-[60%] w-[72%]",
    imgStyle: "min-[480px]:w-[280px] w-[300px] h-[280px]",
  },
  {
    img: lastStep,
    title: "Achieve Your Goals",
    description: "Watch your grades improve and confidence soar.",
    style: "min-[769px]:w-[80%]  w-[100%]",
    imgStyle: "min-[480px]:w-[200px] w-[270px] h-[280px]",
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
