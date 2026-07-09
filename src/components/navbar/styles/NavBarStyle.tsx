import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 24px;
    left: 0;
    right: 0;

    z-index: 1000;

    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        top: 16px;
    }
`;
export const Container = styled.div`
    width: min(1200px, calc(100% - 32px));
    z-index: 1000;
    
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 24px;

    border-radius: 999px;

    background: rgba(15, 15, 15, 0.75);

    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);

    border: 1px solid rgba(255, 255, 255, 0.06);

    box-shadow:
            0 8px 40px rgba(0, 0, 0, 0.35);

    @media (max-width: 1250px) {
        height: 64px;
        padding: 0 18px;
        width: calc(100% - 24px);
    }
`;
export const Logo = styled.div`
    width: 48px;
    height: 48px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18px;
    font-weight: 700;

    color: white;

    background: linear-gradient(
            135deg,
            #00d4ff 0%,
            #00d4ff 35%,
            #7c5cff 65%,
            #7c5cff 100%
    );

    flex-shrink: 0;

    cursor: pointer;

    @media (max-width: 1250px) {
        width: 42px;
        height: 42px;
        font-size: 16px;
    }
`;
export const Menu = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;

    a {
        color: #9f9f9f;

        text-decoration: none;

        font-size: 15px;
        font-weight: 500;

        transition: .25s ease;

        position: relative;

        &:hover {
            color: white;
        }

        &::after {
            content: "";

            position: absolute;

            left: 0;
            bottom: -6px;

            width: 0;
            height: 2px;

            border-radius: 999px;

            background: linear-gradient(
                    135deg,
                    #00d4ff 0%,
                    #00d4ff 35%,
                    #7c5cff 65%,
                    #7c5cff 100%
            );

            transition: .3s;
        }

        &:hover::after {
            width: 100%;
        }

        &.active {
            color: white;

            &::after {
                width: 100%;

                box-shadow:
                        0 0 10px #00d4ff,
                        0 0 20px #7c5cff;
            }
        }
    }
    @media (max-width: 830px) {
        gap: 12px;
    }
    @media (max-width: 1250px) {
        display: none;
    }
`;
export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 20px;
`;
export const ContactButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    height: 48px;

    padding: 0 24px;

    border: none;
    border-radius: 999px;

    background: linear-gradient(
            135deg,
            #00d4ff 0%,
            #7c5cff 100%
    );

    color: white;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition: .25s ease;

    &:hover {
        transform: translateY(-2px);

        box-shadow:
                0 10px 30px rgba(124, 92, 255, 0.35);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 1250px) {
        display: none;
    }
`;
interface BurgerProps {
    $open: boolean;
}
export const BurgerButton = styled.button<BurgerProps>`
    display: none;

    width: 48px;
    height: 48px;

    position: relative;

    background: transparent;
    border: none;

    cursor: pointer;

    span {
        position: absolute;

        left: 12px;

        width: 24px;
        height: 2px;

        background: white;

        border-radius: 999px;

        transition: .3s;
    }

    span:nth-child(1) {
        top: ${({ $open }) => ($open ? "23px" : "16px")};

        transform: ${({ $open }) =>
    $open ? "rotate(45deg)" : "rotate(0deg)"};
    }

    span:nth-child(2) {
        top: 23px;

        opacity: ${({ $open }) => ($open ? 0 : 1)};
    }

    span:nth-child(3) {
        top: ${({ $open }) => ($open ? "23px" : "30px")};

        transform: ${({ $open }) =>
    $open ? "rotate(-45deg)" : "rotate(0deg)"};
    }

    @media (max-width: 1250px) {
        display: block;
    }
`;
export const MobileMenu = styled.div<BurgerProps>`
    position: fixed;
    z-index: 999;
    top: 100px;
    left: 50%;

    transform:
        translateX(-50%)
        ${({ $open }) =>
    $open ? "translateY(0)" : "translateY(-20px)"};

    width: calc(100% - 32px);
    max-width: 500px;

    padding: 32px;

    border-radius: 32px;

    background: rgba(15,15,15,.92);

    backdrop-filter: blur(30px);

    border: 1px solid rgba(255,255,255,.08);

    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};

    transition: .35s;

    display: flex;
    flex-direction: column;
    gap: 24px;

    a {
        color: white;
        text-decoration: none;
        font-size: 18px;
        &.active {
            color: #00d4ff;
        }
    }

    button {
        height: 52px;

        border: none;
        border-radius: 999px;

        font-weight: 600;

        cursor: pointer;
    }

    @media (min-width: 1250px) {
        display: none;
    }
`;
export const Overlay = styled.div<BurgerProps>`
    position: fixed;

    inset: 0;

    background: rgba(0,0,0,.6);

    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);

    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};

    transition: .3s;

    z-index: 998;

    @media (min-width: 1250px) {
        display: none;
    }
`;