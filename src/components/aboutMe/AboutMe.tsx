import { motion } from "framer-motion";
import * as S from "./styles/AboutMeStyle";

import {
    FaReact,
    FaCode,
    FaRocket,
    FaLaptopCode
} from "react-icons/fa";

export const AboutMe = () => {
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
            <S.Section id="about">

                <S.Title>
                    About <span>Me.</span>
                </S.Title>

                <S.Subtitle>
                    Frontend developer focused on building modern web
                    applications with React and TypeScript.
                </S.Subtitle>

                <S.Grid>

                    <S.Card>
                        <FaCode/>

                        <h3>Clean & Scalable Code</h3>

                        <p>
                            Building maintainable and scalable applications using modern frontend practices.
                        </p>
                    </S.Card>

                    <S.Card>
                        <FaReact/>

                        <h3>Modern Frontend Stack</h3>

                        <p>
                            React, TypeScript, Redux Toolkit and Next.js.
                        </p>
                    </S.Card>

                    <S.Card>
                        <FaLaptopCode/>

                        <h3>Responsive Interfaces</h3>

                        <p>
                            Creating responsive interfaces optimized for every screen size.
                        </p>
                    </S.Card>

                    <S.Card>
                        <FaRocket/>

                        <h3>Growth Mindset</h3>

                        <p>
                            Constantly improving skills and exploring new technologies.
                        </p>
                    </S.Card>

                </S.Grid>

            </S.Section>
        </motion.div>
    );
};