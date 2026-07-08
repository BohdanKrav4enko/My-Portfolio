import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;

    display: flex;
    align-items: center;

    padding: 120px 40px;

    @media (max-width: 768px) {
        padding: 140px 20px 80px;
    }
`;

export const Container = styled.div`
    max-width: 1400px;
    width: 100%;

    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 550px;

    gap: 80px;
    align-items: center;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`;

export const Left = styled.div`
    @media (max-width: 1100px) {
        order: 2;
    }
`;

export const Badge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 10px;

    padding: 8px 18px;

    border-radius: 999px;

    background: rgba(255,255,255,.05);
    border: 1px solid rgba(255,255,255,.08);

    margin-bottom: 40px;

    @media (max-width: 1100px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Title = styled.h1`
    font-size: clamp(56px, 10vw, 120px);

    line-height: .9;
    font-weight: 800;

    margin-bottom: 32px;

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

    @media (max-width: 768px) {
        font-size: 56px;
    }

    @media (max-width: 480px) {
        font-size: 42px;
    }
`;

export const Description = styled.p`
    max-width: 650px;

    color: #9f9f9f;

    font-size: 24px;
    line-height: 1.8;

    margin-bottom: 48px;

    @media (max-width: 1100px) {
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 1100px) {
        justify-content: center;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const PrimaryButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 64px;

    border: none;
    border-radius: 999px;

    background: linear-gradient(
            135deg,
            #00d4ff,
            #7c5cff
    );

    color: white;
    text-decoration: none;

    font-size: 18px;
    font-weight: 600;

    cursor: pointer;

    position: relative;
    overflow: hidden;

    transition:
            transform .3s ease,
            box-shadow .3s ease;

    box-shadow:
            0 10px 30px rgba(124,92,255,.25);

    &:hover {
        transform:
                translateY(-4px)
                scale(1.03);

        box-shadow:
                0 20px 45px rgba(124,92,255,.45);
    }

    &:active {
        transform:
                translateY(-1px)
                scale(.98);
    }

    &::before {
        content: "";

        position: absolute;

        top: 0;
        left: -100%;

        width: 100%;
        height: 100%;

        background: linear-gradient(
                120deg,
                transparent,
                rgba(255,255,255,.25),
                transparent
        );

        transition: .7s;
    }

    &:hover::before {
        left: 100%;
    }
`;

export const SecondaryButton = styled.button`
    height: 64px;

    padding: 0 32px;

    background: transparent;

    border: 1px solid rgba(255,255,255,.12);
    border-radius: 999px;

    color: white;

    font-size: 18px;
    font-weight: 600;

    cursor: pointer;

    transition: .3s ease;

    &:hover {
        transform: translateY(-4px);

        border-color: #7c5cff;

        background: rgba(124,92,255,.08);

        box-shadow:
                0 10px 30px rgba(124,92,255,.2);
    }

    &:active {
        transform: translateY(-1px);
    }
`;

export const Right = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 1100px) {
        order: 1;
    }
`;

export const ImageWrapper = styled.div`
    width: 500px;
    height: 600px;

    border-radius: 36px;

    background: #111;

    position: relative;

    &::before {
        content: "";

        position: absolute;

        inset: -3px;

        background: linear-gradient(
                135deg,
                #00d4ff 0%,
                #00d4ff 35%,
                #7c5cff 65%,
                #7c5cff 100%
        );

        border-radius: 40px;

        z-index: -1;

        filter: blur(25px);
    }

    @media (max-width: 768px) {
        width: 380px;
        height: 460px;
    }

    @media (max-width: 480px) {
        width: 280px;
        height: 340px;
    }
`;
export const Avatar = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center top;

    border-radius: 36px;

    transition:
        transform .5s ease,
        filter .5s ease;

    &:hover {
        transform: scale(1.03);
    }
`;