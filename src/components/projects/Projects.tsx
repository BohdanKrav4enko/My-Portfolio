import {motion} from "framer-motion";
import * as S from "./styles/ProjectsStyle";
import prev1 from "../../assets/kinoPotok Preview.webp";
import prev2 from "../../assets/shop Preview.webp";
import prev3 from "../../assets/portfolio Preview.webp";


import {FaExternalLinkAlt, FaGithub, FaStar} from "react-icons/fa";
import {getTechColor} from "../../utils/getTechColor.ts";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const projects = [
    {
        title: "KinoPotok",
        description:
            "Movie streaming platform with search, categories, ratings and detailed information about films.",
        image: prev1,
        stack: ["React", "TypeScript", "Redux Toolkit"],
        link: "https://kinopotok.vercel.app/",
        git: "https://github.com/BohdanKrav4enko/kinopotok"
    },
    {
        title: "Online store",
        description:
            "E-commerce application featuring product filtering, shopping cart management and responsive UI.",
        image: prev2,
        stack: ["React", "TypeScript", "Redux Toolkit"],
        link: "https://shop-drab-delta.vercel.app/",
        git: "https://github.com/BohdanKrav4enko/Shop"
    },
    {
        title: "Portfolio",
        description:
            "Personal portfolio featuring smooth animations, modern UI patterns and responsive layouts.",
        image: prev3,
        stack: ["React", "Styled Components", "Vite"],
        link: "https://bohdankrav4enko.github.io/Portfolio/",
        git: "https://github.com/BohdanKrav4enko/Portfolio"
    }
];

export const Projects = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <S.Section id="projects">

                <S.Badge>
                    <FaStar/>
                    Selected Works
                </S.Badge>

                <S.Header>
                    <div>
                        <S.Title>
                            Featured <span>Projects.</span>
                        </S.Title>

                        <S.Subtitle>
                            A selection of projects showcasing my frontend expertise.
                        </S.Subtitle>
                    </div>

                    <S.ViewAll target="_blank" href={"https://github.com/BohdanKrav4enko?tab=repositories"}>
                        View All Projects →
                    </S.ViewAll>
                </S.Header>

                <S.Grid>
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={cardVariants}
                        >
                            <S.Card>

                                <S.Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <S.Image
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </S.Link>

                                <S.Content>

                                    <S.ProjectTitle>
                                        {project.title}
                                    </S.ProjectTitle>

                                    <S.Description>
                                        {project.description}
                                    </S.Description>

                                    <S.Tags>
                                        {project.stack.map((tech) => (
                                            <S.Tag
                                                key={tech}
                                                color={getTechColor(tech)}
                                            >
                                                {tech}
                                            </S.Tag>
                                        ))}
                                    </S.Tags>

                                    <S.Links>
                                        <S.Link
                                            target="_blank"
                                            href={project.git}
                                        >
                                            <FaGithub />
                                            GitHub
                                        </S.Link>

                                        <S.Link
                                            target="_blank"
                                            href={project.link}
                                        >
                                            <FaExternalLinkAlt />
                                            Live Demo
                                        </S.Link>
                                    </S.Links>

                                </S.Content>

                            </S.Card>
                        </motion.div>
                    ))}
                </S.Grid>

            </S.Section>
        </motion.div>
    );
};