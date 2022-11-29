import todpImg from '../assets/logo.png';
import shortlyImg from '../assets/logo.svg';
import calcImg from '../assets/calc.jpg';
import quizImg from '../assets/quiz.jpg';
import ecommerce from '../assets/ecommerce.png';

const data = [
	{
		image: todpImg,
		demoLink: 'http://techclub-landing-page.vercel.app/',
		name: 'TODP Tech Bootcamp',
		type: 'Web Page',
		about:
			'This is a Landing page for TODP Tech Bootcamp, Its a web page where users who are interested in the tech bootcamp can go register.',
		techDets:
			'This landing page was built with ReactJs and styled with TailwindCSS, I also used some animation libraries to make the page feel alive, Framer Motion and AOS(Animation OnScroll) was also used.',
		projectLink: 'https://github.com/godstimedev/techclub-landing-page',
	},
	{
		// image: quizImg,
		demoLink: 'https://space-website-teal.vercel.app/',
		name: 'Space tourism multi-page website',
		type: 'Website',
		about: 'This is a space website, it is a challenge from Frontend mentor .',
		techDets: 'This website was built using ReactJs and styled with pure CSS.',
		projectLink: 'https://github.com/godstimedev/space-website',
	},
	{
		image: shortlyImg,
		demoLink: 'https://url-shortener-ten-hazel.vercel.app/',
		name: 'URL Shortener',
		type: 'Website',
		about:
			'This is a Website where a user can shorten any valid URL and copy the shortened link to their clipboard in a single click.',
		techDets:
			'I built this using ReactJs and styled it using TailwindCSS. I integrated the website  with the shrtcode API to create shortened URLs.',
		projectLink: 'https://github.com/godstimedev/url-shortener',
	},
	{
		image: calcImg,
		demoLink: 'https://calculator-ten-hazel.vercel.app/',
		name: 'Calculator',
		type: 'Web App',
		about:
			'This is a calculator app where user can perform basic mathematical operations like addition, subtraction, multiplication, and division. User can also adjust the color theme based on their preference.',
		techDets:
			'This web app was built using ReactJs hooks mainly the useReducer hook and styled with CSS and SCSS for the different themes.',
		projectLink: 'https://github.com/godstimedev/calculator',
	},
	{
		image: quizImg,
		demoLink: 'https://quizzical-app-theta.vercel.app/',
		name: 'Quzzical',
		type: 'Web App',
		about: 'This is a Quiz app where user can test their knowledge in sport.',
		techDets:
			'This web app was built using ReactJs and styled with pure CSS. I integrated the web app with open trivia database API to fetch the questions that will be displayed to the user.',
		projectLink: 'https://github.com/godstimedev/quizzical-app',
	},

	// {
	// 	// image: quizImg,
	// 	demoLink: 'https://tesla-clone-seven-blush.vercel.app/',
	// 	name: 'Tesla Clone',
	// 	type: 'Website',
	// 	about: 'This is a Quiz app where user can test their knowledge in sport.',
	// 	techDets:
	// 		'This web app was built using ReactJs and styled with pure CSS. I integrated the web app with open trivia database API to fetch the questions that will be displayed to the user.',
	// 	projectLink: 'https://github.com/godstimedev/tesla-clone',
	// },
	// {
	// 	image: ecommerce,
	// 	demoLink: 'https://product-details-page-redux.vercel.app/',
	// 	name: 'E-commerce product page',
	// 	type: 'Web Page',
	// 	about: 'This is a Quiz app where user can test their knowledge in sport.',
	// 	techDets:
	// 		'This web app was built using ReactJs and styled with pure CSS. I integrated the web app with open trivia database API to fetch the questions that will be displayed to the user.',
	// 	projectLink: 'https://github.com/godstimedev/product-details-page-redux',
	// },
];

export default data;
