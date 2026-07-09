export const getTechColor = (tech: string): string => {
    switch (tech) {
        case "React":
            return "#06B6D4";

        case "TypeScript":
            return "#3178C6";

        case "JavaScript":
            return "#F7DF1E";

        case "Redux Toolkit":
        case "RTK Query":
            return "#764ABC";

        case "Styled Components":
            return "#14B8A6";

        case "SCSS":
            return "#CF649A";

        case "Tailwind CSS":
            return "#38BDF8";

        case "Vite":
            return "#646CFF";

        case "Next.js":
            return "#ffffff";

        default:
            return "#7c5cff";
    }
};