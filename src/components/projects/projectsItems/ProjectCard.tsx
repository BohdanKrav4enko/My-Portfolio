import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import * as S from "../styles/ProjectsStyle";

import { getTechColor } from "../../../utils/getTechColor";
import { cardVariants } from "./animations";

import type { Project } from "./projectsData";


interface ProjectCardProps {
    project: Project;
}


export const ProjectCard = ({
                                project,
                            }: ProjectCardProps) => {

    const { t } = useTranslation();


    return (
        <motion.article
            variants={cardVariants}
        >

            <S.Card>


                <S.Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                >

                    <S.Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                    />

                </S.Link>



                <S.Content>


                    <S.ProjectTitle>
                        {project.title}
                    </S.ProjectTitle>



                    <S.Description>
                        {
                            t(
                                `projects.items.${project.description}.description`
                            )
                        }
                    </S.Description>



                    <S.Tags>

                        {
                            project.stack.map((tech) => (

                                <S.Tag
                                    key={tech}
                                    color={getTechColor(tech)}
                                >
                                    {tech}
                                </S.Tag>

                            ))
                        }

                    </S.Tags>




                    <S.Links>


                        <S.Link
                            href={project.git}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} GitHub repository`}
                        >

                            <FaGithub aria-hidden="true" />

                            {t("projects.github")}

                        </S.Link>



                        <S.Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live demo`}
                        >

                            <FaExternalLinkAlt aria-hidden="true" />

                            {t("projects.liveDemo")}

                        </S.Link>


                    </S.Links>


                </S.Content>


            </S.Card>


        </motion.article>
    );
};