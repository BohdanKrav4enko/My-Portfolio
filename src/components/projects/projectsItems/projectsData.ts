import prev1 from "../../../assets/kinopotokPreview.webp";
import prev2 from "../../../assets/VelionPreview.webp";
import prev3 from "../../../assets/lumierePreview.webp";

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
        title: "Velion",
        description: "velion",
        image: prev2,
        stack: ["RTK Query", "Zod", "Redux Toolkit"],
        link: "https://velion-marketplace.vercel.app/",
        git: "https://github.com/BohdanKrav4enko/Velion",
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