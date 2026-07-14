export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    element.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });

    element.setAttribute("tabindex", "-1");
    element.focus({
        preventScroll: true,
    });
};