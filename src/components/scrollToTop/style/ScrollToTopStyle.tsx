import styled from "styled-components";

interface ButtonProps {
    $visible: boolean;
}

export const Button = styled.button<ButtonProps>`
    position: fixed;

    right: 32px;
    bottom: 32px;

    width: 64px;
    height: 64px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(15,15,15,.85);

    backdrop-filter: blur(24px);

    border: 1px solid rgba(255,255,255,.08);

    color: white;

    font-size: 20px;

    cursor: pointer;

    z-index: 999;

    transition: .3s;

    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};

    transform: ${({ $visible }) =>
    $visible
        ? "translateY(0)"
        : "translateY(20px)"};

    &:hover {
        transform: translateY(-6px);

        border-color: #7c5cff;

        box-shadow:
            0 0 30px rgba(124,92,255,.35);
    }

    @media (max-width: 768px) {
        width: 56px;
        height: 56px;

        right: 20px;
        bottom: 20px;
    }
`;