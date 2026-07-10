import prev1 from "../../../assets/kinoPotok Preview.webp";
import prev2 from "../../../assets/shop Preview.webp";
import prev3 from "../../../assets/lumiere Preview.png";

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
        title: "L U M I È R E",
        description: "lumiere",
        image: prev3,
        stack: ["React", "Styled Components", "React Hook Form"],
        link: "https://lumiere-elegance.vercel.app/",
        git: "https://github.com/BohdanKrav4enko/LUMIERE",
    },
];