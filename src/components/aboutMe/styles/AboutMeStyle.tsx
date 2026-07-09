import styled from "styled-components";

export const Section = styled.section`
    max-width: 1400px;
    margin: 0 auto;
    padding: 120px 40px;
    scroll-margin-top: 120px;
`;

export const Title = styled.h2`
    font-size: clamp(32px, 7vw, 72px);
    text-align: center;

    span {
        background: linear-gradient(
                135deg,
                #00d4ff 0%,
                #00d4ff 35%,
                #7c5cff 65%,
                #7c5cff 100%
        );

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @media (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    color: #888;
    text-align: center;
    max-width: 700px;
    margin: 24px auto 80px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 24px;

    @media(max-width:1100px){
        grid-template-columns: repeat(2,1fr);
    }

    @media(max-width:768px){
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.div`
    padding: 40px;

    background: rgba(255,255,255,.03);

    border: 1px solid rgba(255,255,255,.06);

    border-radius: 28px;

    transition: .3s;

    &:hover{
        transform: translateY(-10px);
        border-color:#7c5cff;
    }

    svg{
        font-size: 42px;
        margin-bottom: 24px;
        color:#7c5cff;
    }

    h3{
        margin-bottom:20px;
        font-size:24px;
    }

    p{
        color:#999;
        line-height:1.8;
    }
`;