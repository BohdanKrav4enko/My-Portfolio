import { motion } from "framer-motion";
import * as S from "./styles/ServicesStyle";

import {
    FaReact,
    FaPalette,
    FaDatabase,
    FaBolt,
} from "react-icons/fa";

export const Services = () => {
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
            <S.Section id="services">
                <S.Title>Beyond Just Coding</S.Title>

                <S.Subtitle>
                    Building scalable applications with attention to
                    architecture, user experience and performance.
                </S.Subtitle>

                <S.TopRow>

                    <S.FrontendCard>
                        <S.IconWrapper>
                            <FaReact/>
                        </S.IconWrapper>

                        <h3>Frontend Development</h3>

                        <p>
                            Building modern web applications using React,
                            TypeScript and scalable component architecture.
                        </p>
                    </S.FrontendCard>

                    <S.UiCard>
                        <S.IconWrapper purple>
                            <FaPalette/>
                        </S.IconWrapper>

                        <h3>UI Implementation</h3>

                        <p>
                            Turning Figma designs into responsive and
                            pixel-perfect interfaces.
                        </p>
                    </S.UiCard>

                </S.TopRow>

                <S.BottomRow>

                    <S.ApiCard>
                        <S.IconWrapper orange>
                            <FaDatabase/>
                        </S.IconWrapper>

                        <h3>State & APIs</h3>

                        <p>
                            Redux Toolkit, RTK Query, Axios and REST API
                            integration.
                        </p>
                    </S.ApiCard>

                    <S.PerformanceCard>
                        <S.IconWrapper green>
                            <FaBolt/>
                        </S.IconWrapper>

                        <h3>Optimization & Scalability</h3>

                        <p>
                            Optimizing rendering performance, architecture
                            and application scalability.
                        </p>
                    </S.PerformanceCard>

                </S.BottomRow>
            </S.Section>
        </motion.div>
    );
};