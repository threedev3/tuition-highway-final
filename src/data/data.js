import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";
import computer from "../assets/img/computer.gif";
import maths from "../assets/img/maths.gif";
import physics from "../assets/img/physics.gif";
import step from "../assets/img/step.png";
import firstStep from "../assets/img/firstStep.png";
import step2 from "../assets/img/step2.png";
import lastStep from "../assets/img/lastStep.png";
import avatar1 from "../assets/img/avatar1.png";
import avatar2 from "../assets/img/avatar2.png";
import avatar3 from "../assets/img/avatar3.png";
import avatar4 from "../assets/img/avatar4.png";

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
    icon: icon1,
  },
  {
    title: "Comprehensive Curriculum",
    icon: icon2,
  },
  {
    title: "Proven Results",
    icon: icon2,
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
    img: computer,
  },
  {
    title: "English",
    img: maths,
  },
  {
    title: "Biology",
    img: physics,
  },
  {
    title: "Modern Languages",
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
    style: "min-[769px]:w-[80%]  w-[90%]",
    imgStyle: "min-[480px]:w-[220px] w-[270px] h-[280px]",
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
    subject: "metathetic",

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
};
