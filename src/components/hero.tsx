import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import { motion } from "motion/react"

import profile from "@/assets/profile.png"

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
}

export function Hero() {
    return (
        <section className="w-full py-16 md:py-24">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Card className="mx-auto max-w-6xl overflow-hidden rounded-3xl border-border/60 shadow-sm">
                    <CardContent className="grid items-center gap-10 p-8 md:grid-cols-2 md:p-12 lg:p-16">
                        <motion.div
                            className="order-2 space-y-6 md:order-1"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.12,
                                        delayChildren: 0.1,
                                    },
                                },
                            }}
                        >
                            <motion.div className="space-y-4" variants={fadeUp}>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className="rounded-full px-4 py-1">
                                        Front End Developer
                                    </Badge>
                                    <Badge variant="secondary" className="rounded-full px-4 py-1">
                                        Pug Mum
                                    </Badge>
                                </div>

                                <div className="space-y-3">
                                    <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                                        Amanda Cashin
                                    </h1>
                                    <p className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                                        I design and build accessible, responsive web interfaces with
                                        React, TypeScript, and Tailwind, focusing on clean user
                                        experience and thoughtful front-end development.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap gap-3"
                                variants={fadeUp}
                            >
                                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                                    <Button asChild variant="outline" size="lg" className="gap-2 rounded-full">
                                        <a
                                            href="https://github.com/pugoverflow"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <GithubLogo className="h-5 w-5" weight="fill" />
                                            GitHub
                                        </a>
                                    </Button>
                                </motion.div>

                                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                                    <Button asChild variant="outline" size="lg" className="gap-2 rounded-full">
                                        <a
                                            href="https://www.linkedin.com/in/amanda-cashin/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <LinkedinLogo className="h-5 w-5" weight="fill" />
                                            LinkedIn
                                        </a>
                                    </Button>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap gap-2 pt-2"
                                variants={fadeUp}
                            >
                                <Badge variant="outline">React</Badge>
                                <Badge variant="outline">TypeScript</Badge>
                                <Badge variant="outline">Next.js</Badge>
                                <Badge variant="outline">Tailwind</Badge>
                                <Badge variant="outline">Accessibility</Badge>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="order-1 flex justify-center md:order-2 md:justify-end"
                            initial={{ opacity: 0, scale: 0.96, x: 24 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            <motion.div
                                className="relative"
                                whileHover={{ y: -4, scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            >
                                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-muted" />
                                <img
                                    src={profile}
                                    alt="Amanda and Minnie"
                                    className="relative h-72 w-72 rounded-[2rem] object-cover border border-border/60 bg-background shadow-sm md:h-80 md:w-80 lg:h-96 lg:w-96"
                                />
                            </motion.div>
                        </motion.div>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    )
}