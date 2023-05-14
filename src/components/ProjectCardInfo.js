import PortfolioPic from "../assets/portfolio_pic.png"
import ServiceNovigrad from "../assets/service_novigrad.png"

const ProjectCardInfo =
[
    {
        imgsrc: "https://www.youtube.com/embed/22KvUPddP0I",
        title: "Manipulated Image Detector and Recommender",
        desc: "For my honours project, I independently developed a mobile Android application that uses machine learning"
        + " and image recognition to detect if an uploaded image is manipulated and recommends images that are similar to the uploaded image.",
        task1: "• Designed the application's frontend using Java and Android Studio, integrating development tools, including Picasso and MLKit, for application functionality.",
        task2: "• Engineered custom image detection neural networks using Python and industry-standard machine learning libraries, such as TensorFlow, Keras, and Scikit-Learn.",
        task3: "• Configured the application backend using Firebase Database and Firebase Cloud Storage, ensuring reliable and secure data storage and retrieval.",
        source_code: "https://github.com/ngin102/Manipulated-Image-Detector-and-Recommender"
    },

    {
        imgsrc: "https://www.youtube.com/embed/dW0wHRrURuY",
        title: "Guess It",
        desc: "I collaborated with a team to design, develop, and deploy an interactive word-guessing game that runs on a web server and is accessed using a web browser.",
        task1: "• Designed and implemented the game's frontend using HTML, CSS, and JavaScript.",
        task2: "• Configured the game's backend, including an interactive leaderboard system, using PHP and PostgreSQL.",
        task3: "• Utilized CSS and CSS frameworks (Bootstrap) to style and customize the game's layout and components.",
        source_code: "https://github.com/ngin102/Guess-It"
    },

    {
        imgsrc: ServiceNovigrad,
        title: "Service Novigrad",
        desc: "I worked on a team to design a mobile Android application that enables users to access and track various provincial services, similar to ServiceOntario.",
        task1: "• Utilized Java and Android Studio to write frontend functionalities and create UI elements for three distinct user types: Administrator, Branch, and Customer.",
        task2: "• Integrated a login system using Firebase Authentication and backend storage using Firebase Storage.",
        source_code: "https://github.com/ngin102/service-novigrad"
    },

    {
        imgsrc: PortfolioPic,
        title: "Portfolio",
        desc: "This portfolio website!",
        task1: "• Designed and developed a responsive portfolio website using React.js.",
        task2: "• Utilized React and TypewriterJS components, as well as JSX, to create a dynamic and interactive user interface.",
        task3: "• Implemented smooth navigation using React Router to enable seamless transitions between different pages.",
        source_code: "https://github.com/ngin102/portfolio"
    }
]

export default ProjectCardInfo