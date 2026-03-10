import { Dog, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import { motion } from "motion/react"

import profile from "@/assets/profile.png"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { fadeUp, scaleIn, stagger } from "@/lib/motion"

const badges = [
  { label: "Senior Front-End Engineer" },
  { label: "Design Systems" },
  { label: "Woman in Tech", variant: "secondary" as const },
  { label: "Neurodivergent", variant: "secondary" as const },
  { label: "Pug Mum", variant: "secondary" as const },
]

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

const links = [
  {
    label: "GitHub",
    href: "https://github.com/pugoverflow",
    icon: GithubLogo,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amanda-cashin/",
    icon: LinkedinLogo,
  },
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
        <Card className="mx-auto max-w-6xl overflow-hidden rounded-2xl border-border/70 bg-card/95 shadow-xl shadow-black/5">
          <CardContent className="relative grid items-center gap-10 p-6 md:grid-cols-2 md:p-10 lg:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--muted))_0%,transparent_38%)]" />

            <motion.div
              className="order-2 space-y-7 md:order-1"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div className="space-y-4" variants={fadeUp}>
                <div className="flex flex-wrap gap-2">
                  {badges.map(({ label, variant }) => (
                    <Badge
                      key={label}
                      variant={variant}
                      className="rounded-md px-4 py-1"
                    >
                      {label}
                    </Badge>
                  ))}
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
                    I build front-end systems that help teams ship faster,
                    stay consistent, and scale without rebuilding the UI every
                    few months.
                  </motion.p>

                  <motion.p
                    variants={fadeUp}
                    className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg"
                  >
                    My work sits across engineering, design systems,
                    accessibility, and UI architecture — strengthening the
                    foundations that make product work easier to deliver and
                    maintain.
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="inline-flex flex-wrap items-center gap-2 rounded-lg border border-border/70 bg-background/80 px-4 py-2 text-sm leading-6 text-muted-foreground shadow-sm backdrop-blur-sm"
                  >
                    <span>
                      Usually working with Minnie nearby — part office companion,
                      part walk break scheduler, and consistently more interested
                      in snacks than stand-ups.
                    </span>
                    <Dog className="h-5 w-5" weight="fill" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div className="flex flex-wrap gap-3" variants={fadeUp}>
                {links.map(({ label, href, icon: Icon }) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="gap-2 rounded-md shadow-sm"
                    >
                      <a href={href} target="_blank" rel="noreferrer">
                        <Icon className="h-5 w-5" weight="fill" />
                        {label}
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="flex flex-wrap gap-2 pt-1" variants={fadeUp}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.96, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 0.16 + index * 0.025,
                      duration: 0.22,
                      ease: "easeOut",
                    }}
                  >
                    <Badge
                      variant="outline"
                      className="rounded-md border-border/70 bg-background/80 px-3 py-1 shadow-sm"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="order-1 flex justify-center md:order-2 md:justify-end"
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
            >
              <motion.div
                className="relative"
                whileHover={{ y: -4, scale: 1.01, rotate: -0.5 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-border/40 bg-muted/70" />

                <motion.img
                  src={profile}
                  alt="Amanda and Minnie"
                  className="relative h-72 w-72 rounded-2xl border border-border/70 bg-background object-cover shadow-xl shadow-black/10 md:h-80 md:w-80 lg:h-96 lg:w-96"
                  initial={{ filter: "blur(10px)" }}
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