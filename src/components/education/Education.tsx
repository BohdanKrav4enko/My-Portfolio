import { motion } from "framer-motion";
import * as S from "./styles/EducationStyle";

import {
    FaGraduationCap,
    FaUniversity,
    FaCode
} from "react-icons/fa";

export const Education = () => {
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
            <S.Section id="education">

                <S.Title>
                    Academic <span>Background.</span>
                </S.Title>

                <S.Subtitle>
                    My educational foundation in software engineering and development principles.
                </S.Subtitle>

                <S.Card>

                    <S.IconWrapper>
                        <FaGraduationCap/>
                    </S.IconWrapper>

                    <S.Content>

                        <S.Degree>
                            Bachelor of Software Engineering
                        </S.Degree>

                        <S.University>
                            Admiral Makarov National University of Shipbuilding
                        </S.University>

                        <S.Period>
                            │ 2017 — 2020
                        </S.Period>

                        <S.Description>
                            Built a strong foundation in software architecture,
                            algorithms, databases and object-oriented programming,
                            forming the basis for modern frontend development.
                        </S.Description>

                        <S.Tags>
                            <S.Tag>
                                <FaCode/>
                                Programming
                            </S.Tag>

                            <S.Tag>
                                <FaUniversity/>
                                Higher Education
                            </S.Tag>
                        </S.Tags>

                    </S.Content>

                </S.Card>

            </S.Section>
        </motion.div>
    );
};