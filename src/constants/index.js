import {
    mortarboard,
    frontend,
    backend,
    rocket,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    question,
    sol,
    carrent,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Junior Developer",
        icon: mortarboard,
    },
    {
        title: "Front-End",
        icon: frontend,
    },
    {
        title: "Back-End",
        icon: backend,
    },
    {
        title: "Ready to create",
        icon: rocket,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "???",
        company_name: "TBA",
        icon: question,
        iconBg: "#383E56",
        date: "? - ?",
        points: ["The future awaits..."],
    },
    {
        title: "IT Technician",
        company_name: "Sol Technology",
        icon: sol,
        iconBg: "#E6DEDD",
        date: "Apr 2024 - Current",
        points: [
            "Basic maintainance of web applications using wordpress, css and php.",
            "Collaborating developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
];

const projects = [
    {
        name: "Getaway Rentals",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/Pixz1/car-rental",
        live_link: "https://getawayrentals-pixz1s-projects.vercel.app/",
    },
];

export { services, technologies, experiences, projects };
