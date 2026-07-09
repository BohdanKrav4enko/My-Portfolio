import * as S from "./styles/HeroStyles.tsx";
import img from '../../assets/avatar.webp'
import {ScrollIndicator} from "../scrollIndicator";


export const Hero = () => {
    return (<>
            <S.Section id="home">
                <S.Container>

                    <S.Left>
                        <S.Badge>
                            🟢 Available for new projects
                        </S.Badge>

                        <S.Title>
                            Frontend <br/>
                            <span>Developer</span>
                        </S.Title>

                        <S.Description>
                            A Frontend Developer focused on building modern, responsive and performant web applications
                            using React and TypeScript.
                        </S.Description>

                        <S.Buttons>
                            <S.PrimaryButton href="mailto:bohdan.krav4enko@gmail.com">
                                Contact Me →
                            </S.PrimaryButton>

                            <S.SecondaryButton
                                href="/Bohdan_Kravchenko_CV_en.pdf"
                                download
                            >
                                Download CV ↓
                            </S.SecondaryButton>
                        </S.Buttons>
                    </S.Left>

                    <S.Right>
                        <S.ImageWrapper>
                            <S.Avatar alt={'Avatar'} src={img}/>
                        </S.ImageWrapper>
                    </S.Right>

                </S.Container>
            </S.Section>
            <ScrollIndicator/>
        </>
    );
};