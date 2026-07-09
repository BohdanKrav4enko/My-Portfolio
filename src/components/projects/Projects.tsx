import {motion} from "framer-motion";
import * as S from "./styles/ProjectsStyle";
import {useTranslation} from "react-i18next";

import {FaStar} from "react-icons/fa";
import {ProjectCard} from "./projectsItems/ProjectCard.tsx";
import {projects} from "./projectsItems/projectsData.ts";
import {containerVariants} from "./projectsItems/animations.ts";

export const Projects = () => {

    const {t} = useTranslation();

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
                    {t("projects.badge")}
                </S.Badge>

                <S.Header>
                    <div>
                        <S.Title>
                            {t("projects.titleFirst")} <span>{t("projects.titleSecond")}</span>
                        </S.Title>

                        <S.Subtitle>
                            {t("projects.subtitle")}
                        </S.Subtitle>
                    </div>

                    <S.ViewAll target="_blank" href={"https://github.com/BohdanKrav4enko?tab=repositories"}>
                        {t("projects.viewAll")}
                    </S.ViewAll>
                </S.Header>

                <S.Grid>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                        />
                    ))}
                </S.Grid>

            </S.Section>
        </motion.div>
    );
};