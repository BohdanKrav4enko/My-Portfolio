import {motion} from "framer-motion";
import * as S from "./styles/ContactCTAStyles.tsx";

export const ContactCTA = () => {
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
            <S.Section id="contact">

                <S.Card>

                    <S.Title>
                        Let's Build Something Amazing Together.
                    </S.Title>

                    <S.Text>
                        I'm currently looking for frontend opportunities
                        and interesting projects to work on.
                    </S.Text>
                    <S.Text>
                        <S.Phone href="tel:+380660827985">
                            +380 (66) 082-79-85
                        </S.Phone>
                    </S.Text>
                    <S.Button href="mailto:bohdan.krav4enko@gmail.com">
                        Contact Me
                    </S.Button>


                </S.Card>

            </S.Section>
        </motion.div>
    );
};