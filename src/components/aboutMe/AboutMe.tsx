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

                        <h3>Clean Code</h3>

                        <p>
                            Writing maintainable, scalable and reusable code.
                        </p>
                    </S.Card>

                    <S.Card>
                        <FaReact/>

                        <h3>Modern Stack</h3>

                        <p>
                            React, TypeScript, Redux Toolkit and Next.js.
                        </p>
                    </S.Card>

                    <S.Card>
                        <FaLaptopCode/>

                        <h3>Responsive UI</h3>

                        <p>
                            Pixel-perfect interfaces for desktop and mobile.
                        </p>
                    </S.Card>

                    <S.Card>
                        <FaRocket/>

                        <h3>Continuous Learning</h3>

                        <p>
                            Constantly improving skills and exploring new technologies.
                        </p>
                    </S.Card>

                </S.Grid>

            </S.Section>
        </motion.div>
    );
};