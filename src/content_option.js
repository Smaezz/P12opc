import ArgentBank from '../src/assets/images/ArgentBank.png';
import Kasa from '../src/assets/images/Kasa.png';
import SophieBluel from '../src/assets/images/SophieBluel.png';
import ohmyfood from '../src/assets/images/ohmyfood.png';
const logotext = "Bienvenue";
const meta = {
    title: "Ismaël EZZEDINE",
    description: "Intégrateur Web",
};

const introdata = {
    title: "Je suis Ismaël, je vous propose:",
    animated: {
        first: "Conception de sites web et web mobile",
        second: "Augmentation des performances de votre site",
        third: "Amélioration du référencement",
    },
    description: "Languages: Html, Css, Javascript, React",
    your_img_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const dataabout = {
    title: "Ma formation",
    aboutme: "Integrateur Web chez Openclassrooms (2023)",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
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
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: ArgentBank,
        description: "Application bancaire utilisant : REACT / REDUX toolkit",
        link: "https://github.com/Smaezz/P11opc.git",
    },
    {
        img: Kasa,
        description: "Application de locations immobiliéres avec : REACT",
        link: "https://github.com/Smaezz/P8opc-myapp.git",
    },
    {
        img: SophieBluel,
        description: "Application portfolio pour une architecte avec Javascript",
        link: "https://github.com/Smaezz/P6opc.git",
    },
    {
        img: ohmyfood,
        description: "Application dédiée à la restauration utilisant des animations CSS",
        link: "https://smaezz.github.io/P4opc/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "i.ezzedine76@gmail.com",
    YOUR_FONE: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    // YOUR_SERVICE_ID: "service_id",
    // YOUR_TEMPLATE_ID: "template_id",
    // YOUR_USER_ID: "user_id",
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