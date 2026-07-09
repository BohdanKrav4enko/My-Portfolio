interface Props {
    links: {
        id: string;
        label: string;
    }[];
    onClick: (id: string) => void;
}

export const MobileMenu = ({
                               links,
                               onClick,
                           }: Props) => {
    return (
        <>
            {links.map((link) => (
                <a
                    key={link.id}
                    onClick={() => onClick(link.id)}
                >
                    {link.label}
                </a>
            ))}
        </>
    );
};