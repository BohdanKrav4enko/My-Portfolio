import * as S from "./styles/TechStackStyle";
import {TbApi} from "react-icons/tb";
import {MdPhoneIphone} from "react-icons/md";
import {FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaReact,} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
    SiAxios,
    SiJavascript,
    SiMui,
    SiNextdotjs,
    SiNpm,
    SiPnpm,
    SiReactrouter,
    SiRedux,
    SiSass,
    SiStyledcomponents,
    SiTailwindcss,
    SiTypescript,
    SiVite,
    SiYarn,
} from "react-icons/si";


const technologies = [
    {icon: <FaReact/>, title: "React"},
    {icon: <SiTypescript/>, title: "TypeScript"},
    {icon: <SiJavascript/>, title: "JavaScript ES6+"},

    {icon: <SiRedux/>, title: "Redux Toolkit"},
    {icon: <SiRedux/>, title: "RTK Query"},
    {icon: <SiRedux/>, title: "Redux Thunk"},

    {icon: <SiReactrouter/>, title: "React Router DOM"},

    {icon: <TbApi/>, title: "REST API"},

    {icon: <SiAxios/>, title: "Axios"},

    {icon: <FaHtml5/>, title: "HTML5"},
    {icon: <FaCss3Alt/>, title: "CSS3"},
    {icon: <SiSass/>, title: "SCSS"},
    {icon: <SiStyledcomponents/>, title: "Styled Components"},
    {icon: <SiMui/>, title: "Material UI"},
    {icon: <SiTailwindcss/>, title: "Tailwind CSS"},

    {icon: <SiNextdotjs/>, title: "Next.js"},

    {icon: <MdPhoneIphone/>, title: "React Native"},

    {icon: <FaGitAlt/>, title: "Git"},
    {icon: <FaGithub/>, title: "GitHub"},

    {icon: <SiVite/>, title: "Vite"},

    {icon: <SiPnpm/>, title: "pnpm"},
    {icon: <SiNpm/>, title: "npm"},
    {icon: <SiYarn/>, title: "yarn"},

    {icon: <FaFigma/>, title: "Figma"},
];

export const TechStack = () => {

    const { t } = useTranslation();

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
        >
            <S.Section id="technology">

                <S.Title>
                    {t("technology.title")}
                </S.Title>

                <S.Subtitle>
                    {t("technology.subtitle")}
                </S.Subtitle>

                <S.Grid>
                    {technologies.map((tech) => (
                        <S.Card key={tech.title}>
                            {tech.icon}
                            {tech.title}
                        </S.Card>
                    ))}
                </S.Grid>

            </S.Section>
        </motion.div>
    );
};