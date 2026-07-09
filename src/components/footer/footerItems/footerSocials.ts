import {FaGithub, FaTelegramPlane, FaLinkedinIn, FaEnvelope} from "react-icons/fa";
import {GITHUB_URL, LINKEDIN_URL, TELEGRAM_URL} from "../../../constants/socialLinks";
import {EMAIL} from "../../../constants/contacts.ts";

export const footerSocials = [
    {
        icon: FaGithub,
        href: GITHUB_URL,
        target: "_blank"
    },
    {
        icon: FaLinkedinIn,
        href: LINKEDIN_URL,
        target: "_blank"
    },
    {
        icon: FaTelegramPlane,
        href: TELEGRAM_URL,
        target: "_blank"
    },
    {
        icon: FaEnvelope,
        href: `mailto:${EMAIL}`
    }
];