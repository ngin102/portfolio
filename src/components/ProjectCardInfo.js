import PortfolioPic from "../assets/portfolio_pic.png"
import ServiceNovigrad from "../assets/service_novigrad.png"

const ProjectCardInfo =
[
    {
        imgsrc: "https://www.youtube.com/embed/wA9pJnUlyEY",
        title: "Manipulated Image Detector Chrome Extension",
        desc: "As a companion to the Manipulated Image Detector and Recommender, I independently developed a Chrome extension that uses machine learning"
        + " and image recognition to detect if an image on a website is manipulated.",
        task1: "• Designed the extension using HTML, CSS, JavaScript, and TensorFlow.js.",
        task2: "• Converted the neural networks used in the Manipulated Image Detector and Recommender to suitable formats (.json and .bin) for the extension.",
        source_code: "https://github.com/ngin102/manipulated-image-detector-extension"
    },

    {
        imgsrc: "https://www.youtube.com/embed/22KvUPddP0I",
        title: "Manipulated Image Detector and Recommender",
        desc: "I independently developed a mobile Android application that uses machine learning"
        + " and image recognition to detect if an uploaded image is manipulated and recommends images that are similar to the uploaded image.",
        task1: "• Designed the application's frontend using Java and Android Studio, integrating development tools, including Picasso and MLKit, for application functionality.",
        task2: "• Engineered custom image detection neural networks using Python and industry-standard machine learning libraries, such as TensorFlow, Keras, and Scikit-Learn.",
        task3: "• Configured the application backend using Firebase Database and Firebase Cloud Storage, ensuring reliable and secure data storage and retrieval.",
        source_code: "https://github.com/ngin102/manipulated-image-detector-and-recommender"
    },

    {
        imgsrc: "https://www.youtube.com/embed/D-zZ0QyAfnU",
        title: "Guess It",
        desc: "I collaborated with a team to design, develop, and deploy an interactive word-guessing game that runs on a web server and is accessed using a web browser.",
        task1: "• Designed and implemented the game's frontend, including five different game modes, using HTML, CSS, and JavaScript.",
        task2: "• Configured the game's backend, including an interactive leaderboard system, using PHP and PostgreSQL.",
        task3: "• Utilized CSS and CSS frameworks (Bootstrap) to style and customize the game's layout and components.",
        source_code: "https://github.com/ngin102/guess-it"
    },

    {
        imgsrc: ServiceNovigrad,
        title: "ServiceNovigrad",
        desc: "I worked on a team to design a mobile Android application that enables users to access and track various provincial services, similar to ServiceOntario.",
        task1: "• Utilized Java and Android Studio to write frontend functionalities and create UI elements for three distinct user types: Administrator, Branch, and Customer.",
        task2: "• Integrated a login system using Firebase Authentication and utilized regexes to enforce password validation.",
        task3: "• Implemented backend storage for stored service data using Firebase Storage.",
        source_code: "https://github.com/ngin102/service-novigrad"
    },

    {
        imgsrc: PortfolioPic,
        title: "Portfolio",
        desc: "I designed and developed a portfolio website (this website) to showcase my skills and projects. The website was built with React.js and offers a responsive layout that adapts to various screen sizes and devices.",
        task1: "• Designed and developed a responsive portfolio website using React.js, ensuring optimal user experience across various devices and screen sizes.",
        task2: "• Utilized React and TypewriterJS components, as well as JSX, to create a dynamic, interactive and animated user interface.",
        task3: "• Implemented seamless navigation using HashRouter, enabling smooth transitions between different pages of the portfolio website and providing a user-friendly browsing experience.",
        source_code: "https://github.com/ngin102/portfolio"
    }
]

export default ProjectCardInfo
