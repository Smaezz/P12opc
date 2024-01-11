import ArgentBank from '../src/assets/images/ArgentBank.png';
import Kasa from '../src/assets/images/Kasa.png';
import SophieBluel from '../src/assets/images/SophieBluel.png';
import ohmyfood from '../src/assets/images/ohmyfood.png';
const logotext = "Ismaël EZZEDINE";
const meta = {
    title: "Ismaël EZZEDINE",
    description: "Intégrateur Web",
};

const introdata = {
    title: "Je suis Ismaël, je vous propose:",
    animated: {
        first: "La conception de votre site web et web mobile",
        second: "L' Augmentation des performances de votre application",
        third: "L' Amélioration de votre référencement web",
    },
    description: "Languages: Html, Css, Javascript, React",
    your_img_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const dataabout = {
    title: "Ma formation",
    aboutme: "Integrateur Web chez Openclassrooms (2023)",
};
const worktimeline = [{
        jobtitle: "Site Wordpress",
        where: "Mon entreprise de Naturopathe",
        date: "2020",
    },
    {
        jobtitle: "Travaux dans le cadre de ma formation",
        where: "12 projets chez Openclassrooms",
        date: "2023",
    },
];

const skills = [{
        name: "Html",
        value: 80,
    },
    {
        name: "Css",
        value: 70,
    },
    {
        name: "Javascript",
        value: 70,
    },
    {
        name: "React",
        value: 70,
    },
];

const services = [{
        title: "Conception de sites web et web mobile",
        description: "Nous élaborerons ensemble les contours et fonctionnalités de votre application pour répondre à vos objectifs.",
    },
    {
        title: "Augmentation des performances de sites web",
        description: "À la suite d'un audit de votre application, je vous proposerais des adaptations permettants une navigation plus fluide et plus accessible.",
    },
    {
        title: "Amélioration du référencement web",
        description: "Améliorons le référencement de votre application pour accueillir plus de visiteurs ou de clients. ",
    },
];

const dataportfolio = [{
        img: ArgentBank,
        description: "Application bancaire utilisant REACT / REDUX toolkit",
        link: "https://github.com/Smaezz/P11opc.git",
        detail1: ">>> Gestion du state global avec Redux.",
        detail2: ">>> Utilisation des Hooks pour gérer l'état des éléments ainsi que le déclenchement de mises à jour.",
        detail3: ">>> Gestion des appels API et création de nouvelles routes pour la suite du développement.",
    },
    {
        img: Kasa,
        description: "Application de locations immobiliéres avec : REACT",
        link: "https://github.com/Smaezz/P8opc-myapp.git",
        detail1: ">>> Initialiser un projet, développer des composants en react et configurer la navigation avec React Router.",
        detail2: ">>> Développer une interface web avec Sass.",
        detail3: ">>> Mettre en oeuvre des animations CSS.",
    },
    {
        img: SophieBluel,
        description: "Application portfolio pour une architecte avec Javascript",
        link: "https://github.com/Smaezz/P6opc.git",
        detail1: ">>> Gérer les événements utilisateurs avec JavaScript.",
        detail2: ">>> Manipuler les éléments du DOM avec JavaScript.",
        detail3: ">>> Récupérer les données utilisateurs dans le JavaScript via des formulaires.",
    },
    {
        img: ohmyfood,
        description: "Application dédiée à la restauration utilisant des animations CSS",
        link: "https://smaezz.github.io/P4opc/",
        detail1: ">>> Intégrer une maquette en mobile-first.",
        detail2: ">>> Mettre en œuvre des animations CSS.",
        detail3: ">>> Versionner un projet avec Git et Github.",
    },
];

const contactConfig = {
    YOUR_EMAIL: "i.ezzedine76@gmail.com",
    YOUR_FONE: "0688354407",
    description: "À bientôt !",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_1hotbrn",
    YOUR_TEMPLATE_ID: "template_r8e3t44",
    YOUR_USER_ID: "eur5oP6TjCqV1Bex_",
};

const socialprofils = {
    github: "https://github.com/Smaezz",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com/in/ismaël-ezzedine-75649420b",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};