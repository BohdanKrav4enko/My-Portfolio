import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Section = styled.section`
    min-height: 100vh;

    display: flex;
    align-items: center;

    background:
            radial-gradient(
                    900px circle at top left,
                    rgba(59,130,246,.16),
                    transparent 70%
            ),
            radial-gradient(
                    900px circle at bottom right,
                    rgba(124,92,255,.16),
                    transparent 70%
            ),
            radial-gradient(
                    600px circle at center,
                    rgba(255,255,255,.03),
                    transparent 80%
            );

    padding: 120px 40px;

    @media (max-width: 768px) {
        padding: 100px 20px 40px;
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


    @media (max-width: 1250px) {
        grid-template-columns: 1fr;

        gap: 32px;

        text-align: center;
    }
`;


export const Left = styled.div`
    @media (max-width: 1250px) {
        order: 2;
    }
`;


export const Right = styled.div`
    display: flex;

    justify-content: center;


    @media (max-width: 1250px) {
        order: 1;

        margin-bottom: 32px;
    }
`;


export const Badge = styled.p`
    display: inline-flex;

    align-items: center;

    gap: 10px;

    padding: 8px 18px;

    margin: 0 0 24px;

    border-radius: 999px;

    background: rgba(255,255,255,.05);

    border: 1px solid rgba(255,255,255,.08);


    @media (max-width: 1250px) {
        margin-left: auto;
        margin-right: auto;
    }
`;


export const Title = styled.h1`
    font-size: clamp(56px, 10vw, 120px);

    line-height: .9;

    font-weight: 800;

    margin-bottom: 24px;


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
        font-size: 48px;
    }


    @media (max-width: 480px) {
        font-size: 38px;

        line-height: 1;
    }
`;


export const Description = styled.p`
    max-width: 650px;

    color: #9f9f9f;

    font-size: 24px;

    line-height: 1.7;

    margin-bottom: 20px;


    @media (max-width: 1250px) {
        margin-left: auto;

        margin-right: auto;
    }


    @media (max-width: 768px) {
        font-size: 18px;
    }


    @media (max-width: 480px) {
        font-size: 14px;
    }
`;


export const Buttons = styled.div`
    display: flex;

    gap: 20px;


    @media (max-width: 1250px) {
        justify-content: center;
    }


    @media (max-width: 480px) {
        width: 100%;
    }
`;


export const PrimaryButton = styled.a`
    display: flex;

    align-items: center;

    justify-content: center;

    width: 170px;

    height: 54px;

    border-radius: 999px;

    background: linear-gradient(
            135deg,
            #00d4ff,
            #7c5cff
    );

    color: white;

    text-decoration: none;

    font-size: 16px;

    font-weight: 600;


    transition:
            transform .25s ease,
            box-shadow .25s ease;


    box-shadow:
            0 8px 20px rgba(124,92,255,.25);


    &:hover {
        transform: translateY(-2px);

        box-shadow:
                0 12px 28px rgba(124,92,255,.35);
    }


    &:active {
        transform: translateY(0);
    }


    &:focus-visible {
        outline: 3px solid #00d4ff;

        outline-offset: 4px;
    }


    @media (max-width: 480px) {
        width: 150px;

        height: 50px;

        font-size: 14px;
    }
`;


export const SecondaryButton = styled.a`
    display: flex;

    align-items: center;

    justify-content: center;

    width: 170px;

    height: 54px;

    padding: 0 16px;

    border-radius: 999px;

    border: 1px solid rgba(255,255,255,.12);

    background: rgba(255,255,255,.02);

    color: white;

    text-decoration: none;

    font-size: clamp(12px,1vw,16px);

    font-weight: 600;

    white-space: nowrap;


    transition:
            transform .25s ease,
            border-color .25s ease,
            background .25s ease,
            box-shadow .25s ease;


    &:hover {
        transform: translateY(-2px);

        border-color: rgba(124,92,255,.5);

        background: rgba(124,92,255,.08);
    }


    &:active {
        transform: translateY(0);
    }


    &:focus-visible {
        outline: 3px solid #00d4ff;

        outline-offset: 4px;
    }


    @media (max-width: 480px) {
        width: 150px;

        height: 50px;

        font-size: 12px;

        padding: 0 12px;
    }
`;


export const ImageWrapper = styled.div`
    width: 420px;

    height: 420px;

    position: relative;

    border-radius: 50%;

    display: flex;

    justify-content: center;

    align-items: center;


    &::before {
        content: "";

        animation: ${rotate} 15s linear infinite;

        position: absolute;

        inset: -10px;

        border-radius: 50%;

        background: conic-gradient(
                from 0deg,
                #00d4ff,
                #7c5cff,
                #00d4ff
        );

        filter: blur(30px);

        opacity: .8;

        z-index: -1;
    }


    @media (prefers-reduced-motion: reduce) {
        &::before {
            animation: none;
        }
    }


    @media (max-width: 768px) {
        width: 260px;

        height: 260px;
    }


    @media (max-width: 480px) {
        width: 180px;

        height: 180px;
    }
`;


export const Avatar = styled.img`
    width: 100%;

    height: 100%;

    object-fit: cover;

    object-position: center 20%;

    border-radius: 50%;


    transition: transform .3s ease;


    &:hover {
        transform: scale(1.03);
    }
`;