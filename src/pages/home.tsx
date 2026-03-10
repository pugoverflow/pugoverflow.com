import { Dog, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import { motion } from "motion/react"

import profile from "@/assets/profile.png"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { fadeUp, scaleIn, stagger } from "@/lib/motion"

const topBadges = [
  { label: "Senior Front-End Engineer" },
  { label: "Woman in Tech" },
  { label: "Pug Mum", variant: "secondary" as const },
]

const skills = [
  "React",
  "TypeScript",
  "Storybook",
  "Tailwind",
  "Playwright",
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
    <section className="w-full py-12 md:py-16 lg:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Card className="mx-auto max-w-6xl overflow-hidden rounded-3xl border-border/70 bg-card/95 shadow-xl shadow-black/5">
          <CardContent className="relative grid items-center gap-12 p-6 md:grid-cols-[1.15fr_.85fr] md:p-10 lg:p-14">

            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--muted))_0%,transparent_38%)]" />

            {/* LEFT CONTENT */}
            <motion.div
              className="order-2 max-w-2xl space-y-8 md:order-1"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div className="space-y-5" variants={fadeUp}>

                {/* Top badges */}
                <motion.div className="flex flex-wrap gap-2">
                  {topBadges.map(({ label, variant }, index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 10, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: 0.04 + index * 0.04,
                        duration: 0.24,
                        ease: "easeOut",
                      }}
                    >
                      <Badge
                        variant={variant}
                        className="rounded-md px-3 py-1"
                      >
                        {label}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Heading */}
                <div className="space-y-4">
                  <motion.h1
                    className="max-w-xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
                    variants={fadeUp}
                  >
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08, duration: 0.35 }}
                    >
                      Amanda
                    </motion.span>{" "}
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.16, duration: 0.35 }}
                    >
                      Cashin
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    variants={fadeUp}
                    className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg"
                  >
                    I build front-end systems that help teams ship faster,
                    stay consistent, and scale with confidence. My work focuses
                    on design systems, accessibility, and UI architecture —
                    the foundations that make products easier to build,
                    maintain, and evolve.
                  </motion.p>
                </div>
              </motion.div>

              {/* Minnie card */}
              <motion.div
                className="relative overflow-hidden rounded-xl border border-border/50 bg-muted/50 p-4"
                variants={fadeUp}
              >
                <div className="relative flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background/80">
                    <Dog
                      className="h-4 w-4 text-muted-foreground"
                      weight="fill"
                    />
                  </div>

                  <div className="space-y-0.5">
                    <p className="text-sm font-medium">Meet Minnie</p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      I work hard so she can have nice things — my pug, office
                      companion, and morale booster. She’s currently
                      training as a support dog to help with neurodivergent
                      needs.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Links */}
              <motion.div
                className="flex flex-wrap gap-3"
                variants={fadeUp}
              >
                {links.map(({ label, href, icon: Icon }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: 0.16 + index * 0.05,
                      duration: 0.24,
                    }}
                  >
                    <Button
                      asChild
                      variant={index === 0 ? "default" : "outline"}
                      size="lg"
                      className="gap-2 rounded-md shadow-sm"
                    >
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Icon className="h-5 w-5" weight="fill" />
                        {label}
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>

              {/* Skills */}
              <motion.div className="space-y-3" variants={fadeUp}>
                <p className="text-sm font-medium text-muted-foreground">
                  Core skills
                </p>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        delay: 0.12 + index * 0.04,
                        duration: 0.24,
                      }}
                    >
                      <Badge
                        variant="outline"
                        className="rounded-md border-border/70 bg-background/70 px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="order-1 flex justify-center md:order-2 md:justify-end"
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            >
              <div className="relative">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-border/40 bg-muted/70" />

                <motion.img
                  src={profile}
                  alt="Amanda Cashin with Minnie, her pug"
                  className="relative h-72 w-72 rounded-3xl border border-border/70 bg-background object-cover shadow-xl shadow-black/10 md:h-80 md:w-80 lg:h-[26rem] lg:w-[26rem]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.12, duration: 0.35 }}
                />
              </div>
            </motion.div>

          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}