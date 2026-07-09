import { motion } from "framer-motion";
import type {ReactNode} from "react";

interface AnimatedSectionProps {
    children: ReactNode;
}

export const AnimatedSection = ({
                                    children,
                                }: AnimatedSectionProps) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
        >
            {children}
        </motion.div>
    );
};