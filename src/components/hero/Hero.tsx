import * as S from "./styles/HeroStyles.tsx";
import img from '../../assets/avatar.webp'


export const Hero = () => {
    return (
        <S.Section id="home">
            <S.Container>

                <S.Left>
                    <S.Badge>
                        🟢 Available for new projects
                    </S.Badge>

                    <S.Title>
                        Hi, I'm <br />
                        <span>Bohdan.</span>
                    </S.Title>

                    <S.Description>
                        A Frontend Developer focused on building
                        modern, responsive and performant web applications
                        using React and TypeScript.
                    </S.Description>

                    <S.Buttons>
                        <S.PrimaryButton href="mailto:bohdan.krav4enko@gmail.com">
                            Contact Me →
                        </S.PrimaryButton>

                        <S.SecondaryButton>
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
    );
};