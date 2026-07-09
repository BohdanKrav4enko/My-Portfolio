
interface Props {
    links: {
        id: string;
        label: string;
    }[];
    activeLink: string;
    onClick: (id: string) => void;
}

export const DesktopMenu = ({
                                links,
                                activeLink,
                                onClick,
                            }: Props) => {
    return (
        <>
            {links.map((link) => (
                <a
                    key={link.id}
                    className={activeLink === link.id ? "active" : ""}
                    onClick={() => onClick(link.id)}
                >
                    {link.label}
                </a>
            ))}
        </>
    );
};