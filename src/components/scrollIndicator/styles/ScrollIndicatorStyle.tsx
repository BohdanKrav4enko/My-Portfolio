import styled, { keyframes } from "styled-components";

const scroll = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateY(10px);
    }
`;

export const ScrollWrapper = styled.a`
    position: absolute;
    left: 50%;
    bottom: 40px;

    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    text-decoration: none;
    color: rgba(255,255,255,.7);

    transition: color .3s ease;

    &:hover {
        color: white;
    }

    @media (max-width: 1250px) {
        display: none;
    }
`;

export const Mouse = styled.div`
    width: 28px;
    height: 46px;

    border: 2px solid rgba(255,255,255,.4);
    border-radius: 999px;

    display: flex;
    justify-content: center;

    padding-top: 8px;
`;

export const Wheel = styled.div`
    width: 4px;
    height: 8px;

    border-radius: 999px;

    background: white;

    animation: ${scroll} 1.6s infinite;
`;

export const Text = styled.span`
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
`;