import prev1 from "../../../assets/kinoPotok Preview.webp";
import prev2 from "../../../assets/shop Preview.webp";
import prev3 from "../../../assets/portfolio Preview.webp";

export interface Project {
    title: string;
    description: string;
    image: string;
    stack: string[];
    link: string;
    git: string;
}

export const projects: Project[] = [
    {
        title: "KinoPotok",
        description: "kinoPotok",
        image: prev1,
        stack: ["React", "TypeScript", "Redux Toolkit"],
        link: "https://kinopotok.vercel.app/",
        git: "https://github.com/BohdanKrav4enko/kinopotok",
    },
    {
        title: "Online store",
        description: "shop",
        image: prev2,
        stack: ["React", "TypeScript", "Redux Toolkit"],
        link: "https://shop-drab-delta.vercel.app/",
        git: "https://github.com/BohdanKrav4enko/Shop",
    },
    {
        title: "Portfolio",
        description: "portfolio",
        image: prev3,
        stack: ["React", "Styled Components", "Vite"],
        link: "https://bohdankrav4enko.github.io/Portfolio/",
        git: "https://github.com/BohdanKrav4enko/Portfolio",
    },
];