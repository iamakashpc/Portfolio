import {
	meta,
	shopify,
	starbucks,
	tesla,
	school,
	collage,
	cbtech,
	namastejavascript,
	netflix,
} from "../assets/images";
import {
	car,
	contact,
	css,
	estate,
	express,
	git,
	github,
	html,
	javascript,
	linkedin,
	mongodb,
	mui,
	nodejs,
	pricewise,
	react,
	redux,
	sass,
	snapgram,
	summiz,
	tailwindcss,
	threads,
	typescript,
} from "../assets/icons";

export const skills = [
	{
		imageUrl: css,
		name: "CSS",
		type: "Frontend",
	},
	{
		imageUrl: express,
		name: "Express",
		type: "Backend",
	},
	{
		imageUrl: git,
		name: "Git",
		type: "Version Control",
	},
	{
		imageUrl: github,
		name: "GitHub",
		type: "Version Control",
	},
	{
		imageUrl: html,
		name: "HTML",
		type: "Frontend",
	},
	{
		imageUrl: javascript,
		name: "JavaScript",
		type: "Frontend",
	},
	{
		imageUrl: mongodb,
		name: "MongoDB",
		type: "Database",
	},
	{
		imageUrl: mui,
		name: "Material-UI",
		type: "Frontend",
	},
	{
		imageUrl: nodejs,
		name: "Node.js",
		type: "Backend",
	},
	{
		imageUrl: react,
		name: "React",
		type: "Frontend",
	},
	{
		imageUrl: redux,
		name: "Redux",
		type: "State Management",
	},
	{
		imageUrl: sass,
		name: "Sass",
		type: "Frontend",
	},
	{
		imageUrl: tailwindcss,
		name: "Tailwind CSS",
		type: "Frontend",
	},
	{
		imageUrl: typescript,
		name: "TypeScript",
		type: "Frontend",
	},
];

export const experiences = [
	{
		title: "Computer Science",
		company_name: "Govt HSS School Avala Kuttoth",
		icon: school,
		iconBg: "#accbe1",
		date: "July 2017 - Mar 2019",
		points: [
			" Ensure you have a strong grasp of fundamental computer science concepts such as algorithms, data structures, and programming paradigms",
			"Learn and practice programming languages widely used in the industry such as C and C++",
			"Computer science is a broad field with various specializations such as artificial intelligence, cybersecurity, software engineering, etc. Explore different areas of interest to identify your passion and focus your studies accordingly.",
			"While academics are important, don't neglect extracurricular activities. Participate in clubs, sports, or cultural events to develop soft skills like teamwork, communication, and leadership, which are equally essential for your overall growth.",
		],
	},
	{
		title: "Diploma in Computer Engineering",
		company_name: "Govt Polytechnic Collage Mananthavady",
		icon: collage,
		iconBg: "#fff",
		date: "Aug 2019 - Sept 2022",
		points: [
			" I've gained a solid understanding of the basic concepts in computer science, including data structures, algorithms, and computer architecture",
			"Throughout my studies, I've become proficient in programming languages such as C, C++, and Java, JavaScript enabling me to write efficient and optimized code.",
			" I now have knowledge of database systems, including designing, querying, and managing databases using tools like SQL.",
			"I've gained insight into computer networking fundamentals, including the OSI model, TCP/IP protocol suite, network devices, and security.",
			"I'm familiar with web development technologies like HTML, CSS, JavaScript, and server-side scripting languages such as PHP or ASP.NET.",
			"Throughout my coursework, I've learned about software engineering principles, including development life cycle models, requirements engineering, software design, testing, and maintenance.",
			" Throughout my studies, I've also developed communication, teamwork, and presentation skills, which are crucial for success in the field of computer engineering.",
		],
	},
	{
		title: "MERN Stack Developer",
		company_name: "CB TECH",
		icon: cbtech,
		iconBg: "#b7e4c7",
		date: "Nov 2022 - Aug 2023",
		points: [
			" I have gained a strong understanding of the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js, key technologies widely used in modern web development.",
			"I've acquired skills in MongoDB, a NoSQL database, learning how to design schemas, perform CRUD operations, and manage data effectively.",
			"Through hands-on experience, I've become proficient in building backend services using Node.js and Express.js, enabling me to create robust and scalable server-side applications.",
			"I've learned to develop interactive and user-friendly web interfaces using React.js, mastering concepts such as components, state management, and routing.",
			"I have experience in developing RESTful APIs using Express.js, allowing me to build interfaces for client-server communication and data manipulation.",
			" Despite the challenges faced during the internship, I've demonstrated a commitment to continuous learning, seeking out resources, tutorials, and additional training to further enhance my skills in web development and the MERN stack.",
		],
	},
	{
		title: "Namaste JavaScript",
		company_name: "Namaste Dev By Akshay Saini",
		icon: namastejavascript,
		iconBg: "#a2d2ff",
		date: "Sept 2023 - Nov 2023",
		points: [
			"A thorough understanding of JavaScript basics including variables, data types, operators, functions, conditionals, loops, and objects.",
			" Mastery of asynchronous programming in JavaScript, including callbacks, promises, and async/await syntax for handling asynchronous operations effectively.",
			" Understanding functional programming concepts in JavaScript, including higher-order functions, closures, and the use of functional methods like map, filter, and reduce.",
			"Learning best practices and design patterns for writing clean, maintainable, and efficient JavaScript code, including code organization, naming conventions, and code optimization techniques.",
		],
	},

	{
		title: "Namaste React",
		company_name: "Namaste Dev By Akshay Saini",
		icon: namastejavascript,
		iconBg: "#a2d2",
		date: "Nov 2023 - Feb 2024",
		points: [
			" Comprehensive understanding of React fundamentals including JSX syntax, components, props, state, and lifecycle methods.",
			"Proficiency in using React Hooks such as useState, useEffect, useContext, and custom hooks to manage state and side effects in functional components.",
			" Implementation of client-side routing in React applications using React Router to manage navigation and render different components based on URLs.",
			"Techniques for managing application state in React applications, including lifting state up, context API, and state management libraries like Redux.",
			"Integration of external APIs with React applications to fetch and display data dynamically, including handling asynchronous operations using fetch or axios.",
			"Understanding of testing React components and applications using testing libraries such as Jest and React Testing Library.",
			"Adoption of best practices and design patterns for writing clean, maintainable, and scalable React code, including component structure, naming conventions, and code organization.",
		],
	},
];

export const socialLinks = [
	{
		name: "Contact",
		iconUrl: contact,
		link: "/contact",
	},
	{
		name: "GitHub",
		iconUrl: github,
		link: "https://github.com/iamakashpc",
	},
	{
		name: "LinkedIn",
		iconUrl: linkedin,
		link: "https://www.linkedin.com/in/akashpc/",
	},
];

export const projects = [
	{
		iconUrl: starbucks,
		theme: "btn-back-green",
		name: "StarBuks Clone ",
		description:
			"Developed starbuks clone using html css and it more simple project and its fully responsive",
		link: "https://github.com/iamakashpc/starbuks-clone-using-html-css-responsive",
	},
	{
		iconUrl: threads,
		theme: "btn-back-green",
		name: "React Advise App",
		description:
			'React Advice App with Third-Party API" is a dynamic web application developed in React.js',
		link: "https://github.com/iamakashpc/react-advise-app-using-Third-party-APIs",
	},
	{
		iconUrl: netflix,
		theme: "btn-back-red",
		name: "Narravia GPT",
		description:
			"It is a dynamic web application developed in for movie Recommendation using TMDB api with react & redux authentication using google firebase it also comes with movie search option using chat GPT",
		link: "https://narravia-gpt.vercel.app/browse",
	},
	{
		iconUrl: snapgram,
		theme: "btn-back-pink",
		name: "Full Stack Instagram Clone",
		description:
			"Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
		link: "https://github.com/adrianhajdin/social_media_app",
	},
	{
		iconUrl: estate,
		theme: "btn-back-black",
		name: "Real-Estate Application",
		description:
			"Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
		link: "https://github.com/adrianhajdin/projects_realestate",
	},
	{
		iconUrl: summiz,
		theme: "btn-back-yellow",
		name: "AI Summarizer Application",
		description:
			"App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
		link: "https://github.com/adrianhajdin/project_ai_summarizer",
	},
];
