import { motion } from "motion/react"

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full border-t border-border/60 bg-background/80"
        >
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground md:flex-row md:px-8 lg:px-12">
                <p>© 2026 Pug Overflow. All rights reserved.</p>

                <p>
                    Source code available on{" "}
                    <a
                        href="https://github.com/pugoverflow/pugoverflow.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-80"
                    >
                        GitHub
                    </a>
                    .
                </p>
            </div>
        </motion.footer>
    )
}