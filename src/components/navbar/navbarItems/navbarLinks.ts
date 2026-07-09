import type {TFunction} from "i18next";

export const getNavbarLinks = (t: TFunction) => [
    { id: "home", label: t("nav.home") },
    { id: "technology", label: t("nav.technology") },
    { id: "services", label: t("nav.services") },
    { id: "projects", label: t("nav.projects") },
    { id: "about", label: t("nav.about") },
    { id: "education", label: t("nav.education") },
    { id: "contact", label: t("nav.contact") },
];