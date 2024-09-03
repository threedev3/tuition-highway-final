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
  businessLaw,
  accounts,
  sociology,
  psychology,
  business,
  stats,
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
  sub1,
  sub2,
  sub3,
  sub4,
  sub5,
  sub6,
  sub7,
  sub8,
  sub9,
  sub10,
  sub11,
  sub12,
  heroIcon1,
} from "../assets/img/images";

const navigationData = {
  "Main Pages": [
    { title: "Home", to: "/" },
    { title: "About Us", to: "/about" },
    { title: "Subjects", to: "/subjects" },
    { title: "Testimonials", to: "/testimonials" },
    { title: "Join As a Tutor", to: "/joinastutor" },
    { title: "Taking a Demo", to: "/takingdemo" },
    { title: "Blogs", to: "/blogs" },
    { title: "Privacy Policy", to: "/privacypolicy" },
  ],
  "What We Teach": [
    { title: "British Curriculum", to: "/british-curriculum" },
    { title: "American Curriculum", to: "/american-curriculum" },
    { title: "International Baccalaureate", to: "/ib" },
    { title: "Online / Homeschooling", to: "/online-home" },
    { title: "Indian CBSE", to: "/indian-cbse" },
    { title: "French Curriculum", to: "/french-curriculum" },
  ],
  "Subjects Offering": [
    { title: "Mathematics", to: "/subjects/maths" },
    { title: "Chemistry", to: "/subjects/chemistry" },
    { title: "Biology", to: "/subjects/biology" },
    { title: "Physics", to: "/subjects/physics" },
    { title: "Economics", to: "/subjects/economics" },
    { title: "Accounts", to: "/subjects/accounts" },
    { title: "Business Studies", to: "/subjects/business-studies" },
    { title: "English", to: "/subjects/english" },
    { title: "Sociology", to: "/subjects/sociology" },
    { title: "Psychology", to: "/subjects/psychology" },
    { title: "Business Law", to: "/subjects/business-law" },
    { title: "Computer Science", to: "/subjects/computer" },
  ],
};

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

const subjectsOffering = [
  {
    title: "Mathematics",
    mainImg: math,
    img: sub1,
    bg: "bg-[#515151]",
    description:
      "Follow the UK education system, emphasising subjects like English, Maths, and Sciences, leading to qualifications like GCSE, IGCSE and A-levels.",
    slug: "maths",
    to: "/subjects/maths",
    content: {
      IGCSE: [
        "Students opting for O-Level Maths or IGCSE Maths courses will find the classes for this subject designed to help them understand complex mathematical concepts.",
        "Our IGCSE maths tutors have been selected carefully after undergoing a stringent process to ensure they bring the right set of experience and qualifications.",
        "Whether you are opting for O-Level Maths or IGSCE Maths, our online tutors will cover the subject in-depth, so you gain a clearer knowledge of O-Levels Maths.",
        "From additional IGCSE tutoring required across the syllabus or in specific areas such as algebra or geometry and advanced maths, our tutors are highly qualified to cover all topics of O-Level and IGCSE Maths in detail",
      ],
      "A-Level": [
        "Do you need help in understanding complex topics for you're a-Levels Maths course? Or are you preparing to appear for an Edexcel A-Level maths paper?",
        "At Tuition Highway, our online A-level maths tutors will provide you the instant subject-specific guidance you need to excel in the subject.",
        "Our competent tutors specialize in all areas of A-Level mathematics including calculus, algebra, statistics, and more.",
        "Maths is an adaptive subject and our innovative platform offers students the freedom to communicate effectively with their instructors and have their learning scheduled around their busy day.",
      ],
      "Indian Curriculum": [
        "Are you seeking help with complex topics in your CBSE or ISC Maths course? Or are you preparing for your board exams in Mathematics?",
        "At Tuition Highway, our online tutors for Class 11 and 12 Maths provide you with the instant subject-specific guidance you need to excel.",
        "Our experienced tutors specialize in all areas of Mathematics, including calculus, algebra, statistics, and more.",
        "Mathematics is a dynamic subject, and our innovative platform offers students the flexibility to communicate effectively with their instructors and schedule their learning around their busy day.",
      ],
    },
  },
  {
    title: "Physics",
    mainImg: physics,
    img: sub2,
    bg: "bg-[#F46322]",
    description:
      "Follow the UK education system, emphasising subjects like English, Maths, and Sciences, leading to qualifications like GCSE, IGCSE and A-levels.",
    slug: "physics",
    to: "/subjects/physics",
    content: {
      "British Curriculum": [
        "Students opting for O-Level Physics or British Curriculum Physics courses will find the classes for this subject designed to help them understand complex Physics concepts.",
        "Our British Curriculum Physics tutors have been selected carefully after undergoing a stringent process to ensure they bring the right set of experience and qualifications.",
        "Whether you are opting for O-Level Physics or British Curriculum Physics, our online tutors will cover the subject in-depth, so you gain a clearer knowledge of O-Levels Physics.",
        "From additional British Curriculum tutoring required across the syllabus or in specific areas such as algebra or geometry and advanced maths, our tutors are highly qualified to cover all topics of O-Level and British Curriculum Physics in detail",
      ],
      "A-Level": [
        "Do you need help in understanding complex topics for you're a-Levels Physics course? Or are you preparing to appear for an Edexcel A-Level Physics paper?",
        "At Tuition Highway, our online A-level Physics tutors will provide you the instant subject-specific guidance you need to excel in the subject.",
        "Our competent tutors specialize in all areas of A-Level Physics including calculus, algebra, statistics, and more.",
        "Physics is an adaptive subject and our innovative platform offers students the freedom to communicate effectively with their instructors and have their learning scheduled around their busy day.",
      ],
      IGCSE: [
        "Are you seeking help with complex topics in your IGCSE Physics course? Or are you preparing for your board exams in Physics?",
        "At Tuition Highway, our online tutors for Class 11 and 12 Physics provide you with the instant subject-specific guidance you need to excel.",
        "Our experienced tutors specialize in all areas of Physics, including calculus, algebra, statistics, and more.",
        "Physics is a dynamic subject, and our innovative platform offers students the flexibility to communicate effectively with their instructors and schedule their learning around their busy day.",
      ],
    },
  },
  {
    title: "Chemistry",
    mainImg: chemistry,
    img: sub3,
    bg: "bg-[#515151]",
    description:
      "Follow the UK education system, emphasising subjects like English, Maths, and Sciences, leading to qualifications like GCSE, IGCSE and A-levels.",
    slug: "chemistry",
    to: "/subjects/chemistry",
    content: {
      "American Curriculum": [
        "Students opting for O-Level Chemistry or American Curriculum Chemistry courses will find the classes for this subject designed to help them understand complex Chemistry concepts.",
        "Our American Curriculum Chemistry tutors have been selected carefully after undergoing a stringent process to ensure they bring the right set of experience and qualifications.",
        "Whether you are opting for O-Level Chemistry or American Curriculum Chemistry, our online tutors will cover the subject in-depth, so you gain a clearer knowledge of O-Levels Chemistry.",
        "From additional American Curriculum tutoring required across the syllabus or in specific areas such as algebra or geometry and advanced maths, our tutors are highly qualified to cover all topics of O-Level and American Curriculum Chemistry in detail",
      ],
      SAT: [
        "Do you need help in understanding complex topics for you're SAT Chemistry course? Or are you preparing to appear for an Edexcel SAT Chemistry paper?",
        "At Tuition Highway, our online SAT Chemistry tutors will provide you the instant subject-specific guidance you need to excel in the subject.",
        "Our competent tutors specialize in all areas of SAT Chemistry including calculus, algebra, statistics, and more.",
        "Chemistry is an adaptive subject and our innovative platform offers students the freedom to communicate effectively with their instructors and have their learning scheduled around their busy day.",
      ],
      IGCSE: [
        "Are you seeking help with complex topics in your IGCSE Chemistry course? Or are you preparing for your board exams in Chemistry?",
        "At Tuition Highway, our online tutors for Class 11 and 12 Physics provide you with the instant subject-specific guidance you need to excel.",
        "Our experienced tutors specialize in all areas of Chemistry, including calculus, algebra, statistics, and more.",
        "Chemistry is a dynamic subject, and our innovative platform offers students the flexibility to communicate effectively with their instructors and schedule their learning around their busy day.",
      ],
    },
  },
  {
    title: "English",
    mainImg: english,
    img: sub8,
    bg: "bg-[#F46322]",
    description:
      "Follow the UK education system, emphasising subjects like English, Maths, and Sciences, leading to qualifications like GCSE, IGCSE and A-levels.",
    slug: "english",
    to: "/subjects/english",
    content: {
      "International Baccalaureate": [
        "Students opting for O-Level English or British Curriculum English courses will find the classes for this subject designed to help them understand complex English concepts.",
        "Our British Curriculum English tutors have been selected carefully after undergoing a stringent process to ensure they bring the right set of experience and qualifications.",
        "Whether you are opting for O-Level English or British Curriculum English, our online tutors will cover the subject in-depth, so you gain a clearer knowledge of O-Levels English.",
        "From additional British Curriculum tutoring required across the syllabus or in specific areas such as algebra or geometry and advanced English, our tutors are highly qualified to cover all topics of O-Level and British Curriculum English in detail",
      ],
      "A-Level": [
        "Do you need help in understanding complex topics for you're a-Levels English course? Or are you preparing to appear for an Edexcel A-Level English paper?",
        "At Tuition Highway, our online A-level English tutors will provide you the instant subject-specific guidance you need to excel in the subject.",
        "Our competent tutors specialize in all areas of A-Level English including calculus, algebra, statistics, and more.",
        "English is an adaptive subject and our innovative platform offers students the freedom to communicate effectively with their instructors and have their learning scheduled around their busy day.",
      ],
      IELTS: [
        "Are you seeking help with complex topics in your IGCSE English course? Or are you preparing for your board exams in English?",
        "At Tuition Highway, our online tutors for Class 11 and 12 English provide you with the instant subject-specific guidance you need to excel.",
        "Our experienced tutors specialize in all areas of English, including calculus, algebra, statistics, and more.",
        "English is a dynamic subject, and our innovative platform offers students the flexibility to communicate effectively with their instructors and schedule their learning around their busy day.",
      ],
      "French Curriculum": [
        "Are you seeking help with complex topics in your French Curriculum English course? Or are you preparing for your board exams in English?",
        "At Tuition Highway, our online tutors for Class 11 and 12 English provide you with the instant subject-specific guidance you need to excel.",
        "Our experienced tutors specialize in all areas of English, including calculus, algebra, statistics, and more.",
        "English is a dynamic subject, and our innovative platform offers students the flexibility to communicate effectively with their instructors and schedule their learning around their busy day.",
      ],
    },
  },
  {
    title: "Biology",
    mainImg: biology,
    img: sub4,
    bg: "bg-[#515151]",
    description:
      "Follow the UK education system, emphasising subjects like English, Maths, and Sciences, leading to qualifications like GCSE, IGCSE and A-levels.",
    slug: "biology",
    to: "/subjects/biology",
    content: {
      "French Curriculum": [
        "Students opting for O-Level Biology or French Curriculum Biology courses will find the classes for this subject designed to help them understand complex Biology concepts.",
        "Our French Curriculum Biology tutors have been selected carefully after undergoing a stringent process to ensure they bring the right set of experience and qualifications.",
        "Whether you are opting for O-Level Biology or French Curriculum Biology, our online tutors will cover the subject in-depth, so you gain a clearer knowledge of O-Levels Biology.",
        "From additional French Curriculum tutoring required across the syllabus or in specific areas such as algebra or geometry and advanced maths, our tutors are highly qualified to cover all topics of O-Level and French Curriculum Biology in detail",
      ],
      "A-Level": [
        "Do you need help in understanding complex topics for you're a-Levels Biology course? Or are you preparing to appear for an Edexcel A-Level Biology paper?",
        "At Tuition Highway, our online A-level Biology tutors will provide you the instant subject-specific guidance you need to excel in the subject.",
        "Our competent tutors specialize in all areas of A-Level Biology including calculus, algebra, statistics, and more.",
        "Biology is an adaptive subject and our innovative platform offers students the freedom to communicate effectively with their instructors and have their learning scheduled around their busy day.",
      ],
      SAT: [
        "Are you seeking help with complex topics in your SAT Biology course? Or are you preparing for your board exams in Biology?",
        "At Tuition Highway, our online tutors for Class 11 and 12 Biology provide you with the instant subject-specific guidance you need to excel.",
        "Our experienced tutors specialize in all areas of Biology, including calculus, algebra, statistics, and more.",
        "Biology is a dynamic subject, and our innovative platform offers students the flexibility to communicate effectively with their instructors and schedule their learning around their busy day.",
      ],
    },
  },
  {
    title: "Business ",
    mainImg: business,
    img: sub7,
    bg: "bg-[#F46322]",
    description:
      "Follow the UK education system, emphasising subjects like English, Maths, and Sciences, leading to qualifications like GCSE, IGCSE and A-levels.",
    slug: "business-studies",
    to: "/subjects/business-studies",
    content: {
      "British Curriculum": [
        "Students opting for O-Level Physics or British Curriculum Physics courses will find the classes for this subject designed to help them understand complex Physics concepts.",
        "Our British Curriculum Physics tutors have been selected carefully after undergoing a stringent process to ensure they bring the right set of experience and qualifications.",
        "Whether you are opting for O-Level Physics or British Curriculum Physics, our online tutors will cover the subject in-depth, so you gain a clearer knowledge of O-Levels Physics.",
        "From additional British Curriculum tutoring required across the syllabus or in specific areas such as algebra or geometry and advanced maths, our tutors are highly qualified to cover all topics of O-Level and British Curriculum Physics in detail",
      ],
      "A-Level": [
        "Do you need help in understanding complex topics for you're a-Levels Physics course? Or are you preparing to appear for an Edexcel A-Level Physics paper?",
        "At Tuition Highway, our online A-level Physics tutors will provide you the instant subject-specific guidance you need to excel in the subject.",
        "Our competent tutors specialize in all areas of A-Level Physics including calculus, algebra, statistics, and more.",
        "Physics is an adaptive subject and our innovative platform offers students the freedom to communicate effectively with their instructors and have their learning scheduled around their busy day.",
      ],
      IGCSE: [
        "Are you seeking help with complex topics in your IGCSE Physics course? Or are you preparing for your board exams in Physics?",
        "At Tuition Highway, our online tutors for Class 11 and 12 Physics provide you with the instant subject-specific guidance you need to excel.",
        "Our experienced tutors specialize in all areas of Physics, including calculus, algebra, statistics, and more.",
        "Physics is a dynamic subject, and our innovative platform offers students the flexibility to communicate effectively with their instructors and schedule their learning around their busy day.",
      ],
    },
  },
  {
    title: "Computer",
    mainImg: computer,
    img: sub9,
    bg: "bg-[#515151]",
    description:
      "Follow the UK education system, emphasising subjects like English, Maths, and Sciences, leading to qualifications like GCSE, IGCSE and A-levels.",
    slug: "computer",
    to: "/subjects/computer",
    content: {
      "British Curriculum": [
        "Students opting for O-Level Computer Science or British Curriculum Computer Science courses will find the classes for this subject designed to help them understand complex computing concepts.",
        "Our British Curriculum Computer Science tutors have been selected carefully after undergoing a stringent process to ensure they bring the right set of experience and qualifications.",
        "Whether you are opting for O-Level Computer Science or British Curriculum Computer Science, our online tutors will cover the subject in-depth, so you gain a clearer understanding of key topics such as programming, algorithms, and data structures.",
        "From additional British Curriculum tutoring required across the syllabus or in specific areas such as coding, network theory, and cybersecurity, our tutors are highly qualified to cover all topics in detail.",
      ],
      "A-Level": [
        "Do you need help understanding complex topics for your A-Level Computer Science course? Or are you preparing to appear for an Edexcel A-Level Computer Science paper?",
        "At Tuition Highway, our online A-level Computer Science tutors provide you with the instant subject-specific guidance you need to excel in the subject.",
        "Our competent tutors specialize in all areas of A-Level Computer Science, including programming languages, algorithms, and computational thinking.",
        "Computer Science is an evolving field, and our innovative platform offers students the flexibility to communicate effectively with their instructors and schedule their learning around their busy day.",
      ],
      IGCSE: [
        "Are you seeking help with complex topics in your IGCSE Computer Science course? Or are you preparing for your board exams in Computer Science?",
        "At Tuition Highway, our online tutors for Class 11 and 12 Computer Science provide you with the instant subject-specific guidance you need to excel.",
        "Our experienced tutors specialize in all areas of Computer Science, including programming, systems architecture, and databases.",
        "Computer Science is a dynamic subject, and our innovative platform offers students the flexibility to communicate effectively with their instructors and schedule their learning around their busy day.",
      ],
    },
  },

  {
    title: "Accounts",
    mainImg: accounts,
    img: sub5,
    bg: "bg-[#F46322]",
    description:
      "Follow the UK education system, emphasising subjects like English, Maths, and Sciences, leading to qualifications like GCSE, IGCSE and A-levels.",
    slug: "accounts",
    to: "/subjects/accounts",
    content: {
      "British Curriculum": [
        "Students opting for O-Level Physics or British Curriculum Physics courses will find the classes for this subject designed to help them understand complex Physics concepts.",
        "Our British Curriculum Physics tutors have been selected carefully after undergoing a stringent process to ensure they bring the right set of experience and qualifications.",
        "Whether you are opting for O-Level Physics or British Curriculum Physics, our online tutors will cover the subject in-depth, so you gain a clearer knowledge of O-Levels Physics.",
        "From additional British Curriculum tutoring required across the syllabus or in specific areas such as algebra or geometry and advanced maths, our tutors are highly qualified to cover all topics of O-Level and British Curriculum Physics in detail",
      ],
      "A-Level": [
        "Do you need help in understanding complex topics for you're a-Levels Physics course? Or are you preparing to appear for an Edexcel A-Level Physics paper?",
        "At Tuition Highway, our online A-level Physics tutors will provide you the instant subject-specific guidance you need to excel in the subject.",
        "Our competent tutors specialize in all areas of A-Level Physics including calculus, algebra, statistics, and more.",
        "Physics is an adaptive subject and our innovative platform offers students the freedom to communicate effectively with their instructors and have their learning scheduled around their busy day.",
      ],
      IGCSE: [
        "Are you seeking help with complex topics in your IGCSE Physics course? Or are you preparing for your board exams in Physics?",
        "At Tuition Highway, our online tutors for Class 11 and 12 Physics provide you with the instant subject-specific guidance you need to excel.",
        "Our experienced tutors specialize in all areas of Physics, including calculus, algebra, statistics, and more.",
        "Physics is a dynamic subject, and our innovative platform offers students the flexibility to communicate effectively with their instructors and schedule their learning around their busy day.",
      ],
    },
  },

  {
    title: "Economics",
    mainImg: stats,
    img: sub6,
    bg: "bg-[#515151]",
    description:
      "Follow the UK education system, emphasising subjects like English, Maths, and Sciences, leading to qualifications like GCSE, IGCSE and A-levels.",
    slug: "economics",
    to: "/subjects/economics",
    content: {
      "British Curriculum": [
        "Students opting for O-Level Physics or British Curriculum Physics courses will find the classes for this subject designed to help them understand complex Physics concepts.",
        "Our British Curriculum Physics tutors have been selected carefully after undergoing a stringent process to ensure they bring the right set of experience and qualifications.",
        "Whether you are opting for O-Level Physics or British Curriculum Physics, our online tutors will cover the subject in-depth, so you gain a clearer knowledge of O-Levels Physics.",
        "From additional British Curriculum tutoring required across the syllabus or in specific areas such as algebra or geometry and advanced maths, our tutors are highly qualified to cover all topics of O-Level and British Curriculum Physics in detail",
      ],
      "A-Level": [
        "Do you need help in understanding complex topics for you're a-Levels Physics course? Or are you preparing to appear for an Edexcel A-Level Physics paper?",
        "At Tuition Highway, our online A-level Physics tutors will provide you the instant subject-specific guidance you need to excel in the subject.",
        "Our competent tutors specialize in all areas of A-Level Physics including calculus, algebra, statistics, and more.",
        "Physics is an adaptive subject and our innovative platform offers students the freedom to communicate effectively with their instructors and have their learning scheduled around their busy day.",
      ],
      IGCSE: [
        "Are you seeking help with complex topics in your IGCSE Physics course? Or are you preparing for your board exams in Physics?",
        "At Tuition Highway, our online tutors for Class 11 and 12 Physics provide you with the instant subject-specific guidance you need to excel.",
        "Our experienced tutors specialize in all areas of Physics, including calculus, algebra, statistics, and more.",
        "Physics is a dynamic subject, and our innovative platform offers students the flexibility to communicate effectively with their instructors and schedule their learning around their busy day.",
      ],
    },
  },

  {
    title: "Business Law",
    mainImg: businessLaw,
    img: sub10,
    bg: "bg-[#F46322]",
    description:
      "Follow the UK education system, emphasising subjects like English, Maths, and Sciences, leading to qualifications like GCSE, IGCSE and A-levels.",
    slug: "business-law",
    to: "/subjects/business-law",
    content: {
      "British Curriculum": [
        "Students opting for O-Level Physics or British Curriculum Physics courses will find the classes for this subject designed to help them understand complex Physics concepts.",
        "Our British Curriculum Physics tutors have been selected carefully after undergoing a stringent process to ensure they bring the right set of experience and qualifications.",
        "Whether you are opting for O-Level Physics or British Curriculum Physics, our online tutors will cover the subject in-depth, so you gain a clearer knowledge of O-Levels Physics.",
        "From additional British Curriculum tutoring required across the syllabus or in specific areas such as algebra or geometry and advanced maths, our tutors are highly qualified to cover all topics of O-Level and British Curriculum Physics in detail",
      ],
      "A-Level": [
        "Do you need help in understanding complex topics for you're a-Levels Physics course? Or are you preparing to appear for an Edexcel A-Level Physics paper?",
        "At Tuition Highway, our online A-level Physics tutors will provide you the instant subject-specific guidance you need to excel in the subject.",
        "Our competent tutors specialize in all areas of A-Level Physics including calculus, algebra, statistics, and more.",
        "Physics is an adaptive subject and our innovative platform offers students the freedom to communicate effectively with their instructors and have their learning scheduled around their busy day.",
      ],
      IGCSE: [
        "Are you seeking help with complex topics in your IGCSE Physics course? Or are you preparing for your board exams in Physics?",
        "At Tuition Highway, our online tutors for Class 11 and 12 Physics provide you with the instant subject-specific guidance you need to excel.",
        "Our experienced tutors specialize in all areas of Physics, including calculus, algebra, statistics, and more.",
        "Physics is a dynamic subject, and our innovative platform offers students the flexibility to communicate effectively with their instructors and schedule their learning around their busy day.",
      ],
    },
  },
  {
    title: "Sociology",
    mainImg: sociology,
    img: sub11,
    bg: "bg-[#515151]",
    description:
      "Follow the UK education system, emphasising subjects like English, Maths, and Sciences, leading to qualifications like GCSE, IGCSE and A-levels.",
    slug: "sociology",
    to: "/subjects/sociology",
    content: {
      "British Curriculum": [
        "Students opting for O-Level Physics or British Curriculum Physics courses will find the classes for this subject designed to help them understand complex Physics concepts.",
        "Our British Curriculum Physics tutors have been selected carefully after undergoing a stringent process to ensure they bring the right set of experience and qualifications.",
        "Whether you are opting for O-Level Physics or British Curriculum Physics, our online tutors will cover the subject in-depth, so you gain a clearer knowledge of O-Levels Physics.",
        "From additional British Curriculum tutoring required across the syllabus or in specific areas such as algebra or geometry and advanced maths, our tutors are highly qualified to cover all topics of O-Level and British Curriculum Physics in detail",
      ],
      "A-Level": [
        "Do you need help in understanding complex topics for you're a-Levels Physics course? Or are you preparing to appear for an Edexcel A-Level Physics paper?",
        "At Tuition Highway, our online A-level Physics tutors will provide you the instant subject-specific guidance you need to excel in the subject.",
        "Our competent tutors specialize in all areas of A-Level Physics including calculus, algebra, statistics, and more.",
        "Physics is an adaptive subject and our innovative platform offers students the freedom to communicate effectively with their instructors and have their learning scheduled around their busy day.",
      ],
      IGCSE: [
        "Are you seeking help with complex topics in your IGCSE Physics course? Or are you preparing for your board exams in Physics?",
        "At Tuition Highway, our online tutors for Class 11 and 12 Physics provide you with the instant subject-specific guidance you need to excel.",
        "Our experienced tutors specialize in all areas of Physics, including calculus, algebra, statistics, and more.",
        "Physics is a dynamic subject, and our innovative platform offers students the flexibility to communicate effectively with their instructors and schedule their learning around their busy day.",
      ],
    },
  },
  {
    title: "Psychology",
    mainImg: psychology,
    img: sub12,
    bg: "bg-[#F46322]",
    description:
      "Follow the UK education system, emphasising subjects like English, Maths, and Sciences, leading to qualifications like GCSE, IGCSE and A-levels.",
    slug: "psychology",
    to: "/subjects/psychology",
    content: {
      "British Curriculum": [
        "Students opting for O-Level Physics or British Curriculum Physics courses will find the classes for this subject designed to help them understand complex Physics concepts.",
        "Our British Curriculum Physics tutors have been selected carefully after undergoing a stringent process to ensure they bring the right set of experience and qualifications.",
        "Whether you are opting for O-Level Physics or British Curriculum Physics, our online tutors will cover the subject in-depth, so you gain a clearer knowledge of O-Levels Physics.",
        "From additional British Curriculum tutoring required across the syllabus or in specific areas such as algebra or geometry and advanced maths, our tutors are highly qualified to cover all topics of O-Level and British Curriculum Physics in detail",
      ],
      "A-Level": [
        "Do you need help in understanding complex topics for you're a-Levels Physics course? Or are you preparing to appear for an Edexcel A-Level Physics paper?",
        "At Tuition Highway, our online A-level Physics tutors will provide you the instant subject-specific guidance you need to excel in the subject.",
        "Our competent tutors specialize in all areas of A-Level Physics including calculus, algebra, statistics, and more.",
        "Physics is an adaptive subject and our innovative platform offers students the freedom to communicate effectively with their instructors and have their learning scheduled around their busy day.",
      ],
      IGCSE: [
        "Are you seeking help with complex topics in your IGCSE Physics course? Or are you preparing for your board exams in Physics?",
        "At Tuition Highway, our online tutors for Class 11 and 12 Physics provide you with the instant subject-specific guidance you need to excel.",
        "Our experienced tutors specialize in all areas of Physics, including calculus, algebra, statistics, and more.",
        "Physics is a dynamic subject, and our innovative platform offers students the flexibility to communicate effectively with their instructors and schedule their learning around their busy day.",
      ],
    },
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
  // {
  //   name: "Mrs. Raghda",
  //   review:
  //     "The feedback is good. What I highly appreciate and that was the key reason for our satisfaction is communication with u and fast response and actions this makes a big difference. Overall it's going well thank u very much",
  //   class: "AP",
  //   stars: 5,
  //   circleColor: "bg-[#00D1FF]",
  // },
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
    stepNumber: 1,
    title: "Student",
    subtitle: "Assessment",
    description: "We evaluate your current academic standing and goals.",
  },
  {
    stepNumber: 2,
    title: "Tutor",
    subtitle: "Matching",
    description:
      "We pair you with an expert tutor specialized in your subject and curriculum.",
  },
  {
    stepNumber: 3,
    title: "Personalized",
    subtitle: "Learning Plan",
    description:
      "Your tutor creates a tailored strategy to address your specific needs.",
  },
  {
    stepNumber: 4,
    title: "Regular",
    subtitle: "Sessions",
    description:
      "Attend flexible, one-on-one online sessions at times that suit you.",
  },
  {
    stepNumber: 5,
    title: "Progress",
    subtitle: "Tracking",
    description: "We continuously monitor and report on your improvement.",
  },
  {
    stepNumber: 6,
    title: "Achieve Your",
    subtitle: "Goals",
    description: "Watch your grades improve and confidence soar.",
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

const products = [
  {
    title: "Join As Tutor",
    to: "/joinastutor",
  },
  {
    title: "Free Demo",
    to: "/takingdemo",
  },
  {
    title: "About Us",
    to: "/about",
  },
];
const company = [
  {
    title: "Subjects",
    to: "/subjects",
  },
  {
    title: "Testimonials",
    to: "/testimonials",
  },
  {
    title: "Blogs",
    to: "/blogs",
  },
];
const resources = [
  {
    title: "Privacy Policy",
    to: "/privacypolicy",
  },
  {
    title: "Terms of Service",
    to: "/termsofservice",
  },
  {
    title: "Contact Us",
    to: "/contact",
  },
];

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
  "Mathematics",
  "Physics",
  "Chemistry",
  "English",
  "Biology",
  "Computer Science",
  "Business Studies",
  "Economics",
  "Accounts",
  "Business Law",
  "Sociology",
  "Psychology",
];

const ourCurriculum = [
  "British Curriculum",
  "American Curriculum",
  "International Baccalaureate",
  "French Curriculum",
  "Indian CBSE",
  "Online Homeschooling",
  "SAT",
  "IELTS",
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

const privacyPolicyData = [
  {
    title: "Introduction",
    content:
      "This document provides an overview of the privacy practices for https://tuitionhighway.com, managed by Tuition Highway, part of ASE Global UAE, in compliance with applicable UAE laws.",
  },
  {
    title: "User Privacy",
    content:
      "We prioritize user privacy, ensuring that proactive measures are in place to protect personal data throughout the user’s interaction with our services.",
  },
  {
    title: "Cookies Usage",
    content:
      "Our website utilizes cookies to enhance the user experience, with the option for users to consent or decline the use of cookies on their initial visit, in line with recent legislative requirements.",
  },
  {
    title: "Data Storage and Tracking",
    content:
      "Cookies track user interactions for a personalized web experience. Users may opt out by modifying browser settings. Google Analytics is used for understanding website usage without storing personal information. External vendors may also use cookies for conversion and referral tracking.",
  },
  {
    title: "Communication Security",
    content:
      "User-provided information during website interactions is kept secure. Users engage with the website and its communication tools at their own risk. Information may be used to inform users about services or for email newsletters, with explicit consent.",
  },
  {
    title: "External Links and Adverts",
    content:
      "Users should exercise caution with external links and adverts. The website is not liable for the content or any potential damage arising from visiting such external sites.",
  },
  {
    title: "Social Media and Sharing",
    content:
      "Interactions on social media platforms are governed by the terms of those platforms. Users should be cautious when sharing personal information. Social media sharing buttons are provided for convenience but are used at the user's discretion.",
  },
  {
    title: "Shortened Social Media Links",
    content:
      "Care should be taken with shortened URLs on social media, as they may be prone to spam or hacking. The website is not liable for damages related to these links.",
  },
  {
    title: "Governing Law",
    content:
      "This privacy policy is governed by the laws of the United Arab Emirates.",
  },
  {
    title: "Miscellaneous",
    content:
      "All credit/debit cards' details and personally identifiable information will NOT be stored, sold, shared, rented or leased to any third parties https://tuitionhighway.com will not pass any debit/credit card details to third parties. https://tuitionhighway.com takes appropriate steps to ensure data privacy and security including through various hardware and software methodologies. However, https://tuitionhighway.com cannot guarantee the security of any information that is disclosed online. The https://tuitionhighway.com is not responsible for the privacy policies of websites to which it links. If you provide any information to such third parties different rules regarding the collection and use of your personal information may apply. You should contact these entities directly if you have any questions about their use of the information that they collect.",
  },
];

const termsAndConditionsData = [
  {
    title: "Introduction",
    content: [
      "ASE GLOBAL L.L.C-FZ maintains the https://tuitionhighway.com/ Website (“Site”).",
      "These Terms and Conditions govern the use of our online tuition services.",
    ],
    contactInformation: [
      "Email: hello@tuitionhighway.com",
      "Address: Business Suite, Meydan Hotel, Nad Al Sheeba, Dubai, UAE",
      "Contact Number: +971563511722",
    ],
  },
  {
    title: "Service Provision",
    content: [
      "Tuition Highway provides experienced tutors and arranges a free trial class for new students.",
      "If the student wishes to proceed, regular classes are scheduled.",
      "Tuition Highway does not guarantee any specific results or grades.",
      "Customers using the website who are Minor /under the age of 18 shall not register as a User of the website and shall not transact on or use the website. Instead their parents must create an account on their behalf and they will take all the responsibility as per terms and conditions.",
    ],
  },
  {
    title: "Class Scheduling and Availability",
    content: [
      "Tuition Highway reserves the right to release the slots of teachers to other students if a student takes an extended break.",
      "The schedule of classes is subject to availability and may be adjusted with prior notice.",
    ],
  },
  {
    title: "Payments",
    content: [
      "Customers can use varied payment options provided by Tuition Highway through its payment partners. This includes bank transfers and payment through credit/debit card.",
      "Visa or MasterCard debit and credit cards in AED will be accepted for payment.",
      "Cardholders must retain a copy of transaction records and Merchant policies and rules.",
    ],
  },
  {
    title: "Payment Terms",
    content: [
      "If a student does not attend a scheduled class, it will be considered a charged class.",
      "Payment is mandatory for all lessons taken.",
      "Tuition Highway provides different payment options including payment via credit/debit card through payment partners.",
      "Our onboarding team will communicate all options upon enrollment.",
      "Payment confirmation will be made through email, SMS, or WhatsApp upon transfer of funds within 24 to 48 hours.",
    ],
  },
  {
    title: "Refund/Cancellation Policy",
    content: [
      "Tuition Highway has no refund policy if the classes are taken.",
      "Refund is only possible if there was an advance payment made by the customer and Tuition Highway was unable to provide the tutor with whom the demo was conducted.",
      "Refunds will be done only through the Original Mode of Payment.",
      "Customer can cancel their requested services within 24 hours; refunds in case of advance payment will be made back to the payment solution used initially by the customer. Please allow for up to 45 days for the refund transfer to be completed.",
    ],
  },
  {
    title: "Use of Technology",
    content: [
      "Parents/guardians give consent for their children to open their camera during online classes.",
      "Students are expected to have a stable internet connection and the necessary equipment for online learning.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Tuition Highway is not liable for any indirect, incidental, or consequential damages arising out of or in connection with the use of our services.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms and Conditions are governed by the laws of the United Arab Emirates. Any disputes will be subject to the exclusive jurisdiction of the courts of the UAE.",
      "We will not trade with or provide any services to OFAC (Office of Foreign Assets Control) and sanctioned countries in accordance with the law of UAE.",
    ],
  },
  {
    title: "Amendments",
    content: [
      "Tuition Highway reserves the right to amend these Terms and Conditions at any time.",
      "Continued use of the services after such changes will constitute acceptance of the new Terms and Conditions.",
    ],
  },
  {
    title: "Contact and Communication",
    content: [
      "For any queries or concerns regarding these Terms and Conditions, please contact us at the provided email and phone number.",
    ],
  },
];

const enrollDetails = [
  "Welcome to Tuition Highway, your trusted partner in personalised online tutoring. We understand that every child is unique, and so should be their learning journey.",
  "Our experienced tutors are ready to meet your child's individual academic needs, whether it's building a solid foundation in a new subject or preparing for crucial examinations.",
  "Don't let the stress of today's competitive education system hold your child back. Take the first step towards academic success with Tuition Highway.",
  "Complete the form to schedule a free consultation and trial lessons with our expert tutors. Remember, this initial step is completely free and it could be the turning point in your child's academic journey.",
];
const joinTutorDetails = [
  "Tuition Highway is committed to providing quality education, and a significant part of that commitment involves our careful and thorough process for selecting and verifying tutors.",
  "We understand the importance of having skilled, knowledgeable, and reliable tutors, hence, we implement a robust selection process.",
  "All prospective tutors submit an application which includes their educational background, qualifications, teaching experience, and areas of expertise.",
  "We thoroughly review these applications to shortlist candidates who meet our initial criteria.",
];

export {
  navigationData,
  reasons,
  numbers,
  subjectsOffering,
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
  privacyPolicyData,
  termsAndConditionsData,
  enrollDetails,
  joinTutorDetails,
};
