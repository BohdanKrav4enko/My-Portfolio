import styled from "styled-components";

export const Section = styled.section`
    max-width: 1400px;
    margin: 0 auto;
    padding: 120px 40px;

    @media (max-width: 768px) {
        padding: 80px 20px;
    }
`;
export const Phone = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 24px;

    color: #00d4ff;
    text-decoration: none;

    font-size: 22px;
    font-weight: 600;

    transition: color .25s ease,
    transform .25s ease;

    &:hover {
        color: #7c5cff;
        transform: translateY(-2px);
    }

    @media (max-width: 480px) {
        font-size: 18px;
    }
`;
export const Card = styled.div`
    position: relative;
    overflow: hidden;

    padding: 100px 40px;

    text-align: center;

    border-radius: 40px;

    background: radial-gradient(
            circle at center,
            rgba(124, 92, 255, .25),
            transparent 70%
    ),
    rgba(255, 255, 255, .03);

    border: 1px solid rgba(255, 255, 255, .08);

    @media (max-width: 768px) {
        padding: 60px 24px;
        border-radius: 28px;
    }

    @media (max-width: 480px) {
        padding: 48px 20px;
        border-radius: 24px;
    }
`;

export const Title = styled.h2`
    max-width: 750px;

    margin: 0 auto 24px;

    font-size: clamp(32px, 7vw, 72px);

    line-height: 1.1;
    text-align: center;
    text-wrap: balance;

    @media (max-width: 768px) {
        font-size: 36px;
    }

    @media (max-width: 480px) {
        font-size: 28px;
        line-height: 1.2;
    }
    @media (max-width: 480px) {
        font-size: 32px;
    }
`;
export const Text = styled.p`
    color: #999;

    max-width: 600px;

    margin: 0 auto 32px;

    line-height: 1.8;
    font-size: 18px;

    @media (max-width: 480px) {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 24px;
    }
`;

export const Button = styled.a`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 220px;
    height: 60px;

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

    transition: transform .25s ease,
    box-shadow .25s ease;

    box-shadow: 0 10px 30px rgba(124, 92, 255, .25);

    &:hover {
        transform: translateY(-2px);

        box-shadow: 0 14px 35px rgba(124, 92, 255, .35);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 480px) {
        width: 100%;
        height: 56px;
        font-size: 16px;
    }
`;
export const Email = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    color: #b5b5b5;
    text-decoration: none;

    font-size: 18px;
    font-weight: 500;

    transition: color .25s ease,
    transform .25s ease;

    &:hover {
        color: #00d4ff;
        transform: translateY(-2px);
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }
`;
export const ResponseTime = styled.p`
    margin-top: 20px;

    color: #777;

    font-size: 14px;

    opacity: .8;
`;