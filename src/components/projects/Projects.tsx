import { motion } from "framer-motion";
import * as S from "./styles/ProjectsStyle";
import prev1 from "../../assets/kinoPotok Preview.webp";
import prev2 from "../../assets/shop Preview.webp";
import prev3 from "../../assets/portfolio Preview.webp";

import {
    FaGithub,
    FaExternalLinkAlt, FaStar
} from "react-icons/fa";

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
            "Online store with product catalog, shopping cart, filters and responsive design.",
        image: prev2,
        stack: ["React", "TypeScript", "Redux"],
        link: "https://shop-drab-delta.vercel.app/",
        git: "https://github.com/BohdanKrav4enko/Shop"
    },
    {
        title: "Portfolio",
        description:
            "Modern portfolio website inspired by premium SaaS landing pages.",
        image: prev3,
        stack: ["React", "Styled Components", "Vite"],
        link: "https://bohdankrav4enko.github.io/Portfolio/",
        git: "https://github.com/BohdanKrav4enko/Portfolio"
    }
];

export const Projects = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 100
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 0.8
            }}
            viewport={{
                once: true
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
                        <S.Card key={project.title}>

                            <S.Image src={project.image}/>

                            <S.Content>

                                <S.ProjectTitle>
                                    {project.title}
                                </S.ProjectTitle>

                                <S.Description>
                                    {project.description}
                                </S.Description>

                                <S.Tags>
                                    {project.stack.map((tech) => (
                                        <S.Tag key={tech}>
                                            {tech}
                                        </S.Tag>
                                    ))}
                                </S.Tags>

                                <S.Links>
                                    <S.IconButton target={'_blank'} href={project.git}>
                                        <FaGithub/>
                                    </S.IconButton>

                                    <S.IconButton target={'_blank'} href={project.link}>
                                        <FaExternalLinkAlt/>
                                    </S.IconButton>
                                </S.Links>

                            </S.Content>

                        </S.Card>
                    ))}
                </S.Grid>

            </S.Section>
        </motion.div>
    );
};