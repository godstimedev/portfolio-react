import todpImg from '../assets/logo.png';
import shortlyImg from '../assets/logo.svg';
import calcImg from '../assets/calc.jpg';
import quizImg from '../assets/quiz.jpg';
import ecommerce from '../assets/ecommerce.png';
import space from '../assets/space.png';
import tesla from '../assets/tesla.png';
import eshop from '../assets/eshop.png';
import defi from '../assets/defi.png';
import portal from '../assets/portal.png';
import pp from '../assets/pp.png';

const data = [
	{
		image: pp,
		demoLink: 'https://www.patternandproduce.com/',
		name: 'Pattern & Produce Studios',
		type: 'Website',
		about:
			'This is a Next.js website tailored for a garment production and manufacturing hub. This platform empowers users with an array of features, enabling them to book appointments, register for training programs, and explore a comprehensive range of services. It also contains an Admin Panel which is managed by an Admin to update website content.',
		techDets:
			'This website was built using Next.js and styled with styled-components. React context was used to manage auth state for the Admin Panel.',
		projectLink: '',
	},
	{
		image: portal,
		demoLink: 'https://ydev-admin-v2-git-develop-hbr-dev.vercel.app/',
		name: 'Admin Portal',
		type: 'Web App',
		about:
			'This is an efficient and comprehensive admin portal designed to streamline data tracking and management for an organizations. This tool enables seamless monitoring and control of vital data within an organization.',
		techDets: 'This web app was built using ReactJs and styled with styled-components.',
		projectLink: '',
	},
	{
		image: eshop,
		demoLink: 'https://eshop-vert-eta.vercel.app/',
		name: 'Ceramic e-commerce website',
		type: 'Website',
		about:
			'This is an e-commerce website with typical e-commerce website pages like the products page, the products details page, and the cart page. It also has typical e-commerce website features like the ability to add and remove items from the cart as well as change the quantity of the items in the cart.',
		techDets:
			'This website was built using ReactJs, Typescript and Redux toolkit to manage the cart state. Tailwind Css was used in styling the website.',
		projectLink: 'https://github.com/godstimedev/eshop',
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
		image: space,
		demoLink: 'https://space-website-teal.vercel.app/',
		name: 'Space tourism multi-page website',
		type: 'Website',
		about:
			'This website, which is about space, contains a lot of pages and features including a carousel slider.',
		techDets:
			'This website was built using ReactJs, react router-dom and react-slick library. And it was styled with pure CSS.',
		projectLink: 'https://github.com/godstimedev/space-website',
	},
	{
		image: defi,
		demoLink: 'https://defi-site-axios.vercel.app/',
		name: 'Defi Website',
		type: 'Website',
		about:
			'This is a cryptocurrency website that provides current values for well-known cryptocurrencies as well as information on their trends. The prices were obtained via the CoinGecko API.',
		techDets:
			'This website was built using ReactJs and axios was used to fetch the crypto data from the CoinGecko API. It was styled using pure CSS.',
		projectLink: 'https://github.com/godstimedev/defi-site-axios',
	},
	{
		image: ecommerce,
		demoLink: 'https://product-details-page-redux.vercel.app/',
		name: 'E-commerce product page',
		type: 'Web Page',
		about:
			'This is an ecommerce product page, it contains the typical e-commerce product page features like increment and decrement of product quantity and ability to add product to cart. And it also contains an image slider to showcase the product.',
		techDets:
			'This web page was built using ReactJs & Redux and styled with Styled components. Redux was used to manage the cart state and modal state, it was a challenging project and fun too.',
		projectLink: 'https://github.com/godstimedev/product-details-page-redux',
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
		image: tesla,
		demoLink: 'https://tesla-clone-seven-blush.vercel.app/',
		name: 'Tesla Clone',
		type: 'Website',
		about: 'This is a clone of Tesla website.',
		techDets:
			'This website was built using React & Redux and styled with styled components. Redux was used to manage the cars state.',
		projectLink: 'https://github.com/godstimedev/tesla-clone',
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
];

export default data;
