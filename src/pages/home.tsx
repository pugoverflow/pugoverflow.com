import { ArrowUpRight, Dog, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import { motion } from "motion/react"

import profile from "@/assets/profile.png"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
}

const skills = [
  "HTML",
  "CSS",
  "React",
  "TypeScript",
  "Storybook",
  "Vite",
  "Tailwind",
  "Styled Components",
  "Cypress",
  "Playwright",
  "Git",
  "Accessibility",
]

export function Home() {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border-border/60 bg-card/90 shadow-xl shadow-black/5">
          <CardContent className="relative grid items-center gap-10 p-6 md:grid-cols-2 md:p-10 lg:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--muted))_0%,transparent_38%)]" />

            <motion.div
              className="order-2 space-y-7 md:order-1"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-4" variants={fadeUp}>
                <div className="flex flex-wrap gap-2">
                  <Badge className="rounded-full px-4 py-1">Senior Front-End Engineer</Badge>
                  <Badge className="rounded-full px-4 py-1">Design Systems</Badge>
                  <Badge variant="secondary" className="rounded-full px-4 py-1">
                    Pug Mum
                  </Badge>
                </div>

                <div className="space-y-4">
                  <motion.h1
                    variants={fadeUp}
                    className="max-w-xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
                  >
                    Amanda Cashin
                  </motion.h1>

                  <motion.p
                    variants={fadeUp}
                    className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg"
                  >
                    I build thoughtful front-end systems that help teams ship faster,
                    stay consistent, and scale without turning every release into a rebuild.
                  </motion.p>

                  <motion.p
                    variants={fadeUp}
                    className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg"
                  >
                    My work sits at the intersection of engineering, design systems,
                    accessibility, and maintainable UI architecture — where strong
                    foundations quietly make everything else better.
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    className="inline-flex flex-wrap items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm leading-6 text-muted-foreground shadow-sm backdrop-blur-sm"
                  >
                    <span>Usually accompanied by Minnie, my curly-tailed pair programmer.</span>
                    <Dog className="h-5 w-5" weight="fill" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div className="flex flex-wrap gap-3" variants={fadeUp}>


                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild variant="outline" size="lg" className="gap-2 rounded-full shadow-sm">
                    <a href="https://github.com/pugoverflow" target="_blank" rel="noreferrer">
                      <GithubLogo className="h-5 w-5" weight="fill" />
                      GitHub
                    </a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild variant="outline" size="lg" className="gap-2 rounded-full shadow-sm">
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

              <motion.div className="flex flex-wrap gap-2 pt-1" variants={fadeUp}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.025, duration: 0.22 }}
                  >
                    <Badge
                      variant="outline"
                      className="rounded-full border-border/60 bg-background/70 px-3 py-1 shadow-sm"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="order-1 flex justify-center md:order-2 md:justify-end"
              initial={{ opacity: 0, scale: 0.96, x: 24 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
            >
              <motion.div
                className="relative"
                whileHover={{ y: -4, scale: 1.01, rotate: -1.2 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-border/40 bg-muted/70" />

                <motion.img
                  src={profile}
                  alt="Amanda and Minnie"
                  className="relative h-72 w-72 rounded-[2rem] border border-border/60 bg-background object-cover shadow-xl shadow-black/10 md:h-80 md:w-80 lg:h-96 lg:w-96"
                  initial={{ filter: "blur(8px)" }}
                  animate={{ filter: "blur(0px)" }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}