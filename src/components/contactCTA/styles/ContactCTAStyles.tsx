import styled from "styled-components";

export const Section = styled.section`
    max-width: 1400px;
    margin: 0 auto;
    padding: 120px 40px;
    scroll-margin-top: 120px;
`;
export const Phone = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

    color: #00d4ff;
    text-decoration: none;

    font-size: 22px;
    font-weight: 600;

    transition:
        color .3s ease,
        transform .3s ease;

    &:hover {
        color: #7c5cff;
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(-1px);
    }
`;
export const Card = styled.div`
    position: relative;

    overflow: hidden;

    padding: 100px 40px;

    text-align: center;

    border-radius: 40px;

    background:
            radial-gradient(
                    circle at center,
                    rgba(124,92,255,.25),
                    transparent 70%
            ),
            rgba(255,255,255,.03);

    border: 1px solid rgba(255,255,255,.08);
`;

export const Title = styled.h2`
    max-width: 750px;

    margin: 0 auto 32px;

    font-size: clamp(42px, 6vw, 64px);

    line-height: 1.1;

    text-align: center;

    text-wrap: balance;
`;

export const Text = styled.p`
    color: #999;
    max-width: 600px;
    margin: 0 auto 48px;
    line-height: 1.8;
`;

export const Button = styled.a`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    padding: 18px 42px;

    border-radius: 999px;
    border: none;

    background: linear-gradient(
            135deg,
            #00d4ff 0%,
            #7c5cff 100%
    );

    color: white;
    text-decoration: none;

    font-size: 18px;
    font-weight: 600;

    cursor: pointer;

    position: relative;
    overflow: hidden;

    box-shadow:
            0 10px 30px rgba(124, 92, 255, .25);

    transition:
            transform .3s ease,
            box-shadow .3s ease;

    &:hover {
        transform:
                translateY(-5px)
                scale(1.03);

        box-shadow:
                0 20px 45px rgba(124, 92, 255, .45);
    }

    &:active {
        transform:
                translateY(-2px)
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

        transition: left .7s ease;
    }

    &:hover::before {
        left: 100%;
    }
`;