import { CheckCircle, Code, Palette, Sparkle } from "@phosphor-icons/react"
import { motion } from "motion/react"

import { FeatureCard } from "@/components/feature-card"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { fadeUp, staggerRelaxed } from "@/lib/motion"

const focusAreas = [
  "Scalable component architecture",
  "Accessible patterns and interaction design",
  "Design system maintenance and adoption",
  "Developer experience and documentation",
  "Reducing tech debt in UI layers",
]

const featureCards = [
  {
    title: "Engineering foundations",
    description:
      "I focus on the work that makes product development smoother: reusable components, sensible APIs, clear state boundaries, and code that stays maintainable.",
    icon: <Code className="h-5 w-5" weight="bold" />,
  },
  {
    title: "Design system thinking",
    description:
      "I turn visual consistency into practical systems with documentation, patterns, and conventions that designers and engineers can rely on.",
    icon: <Palette className="h-5 w-5" weight="bold" />,
  },
  {
    title: "User experience details",
    description:
      "Accessibility, clarity, and polish matter. Good interfaces feel straightforward because the underlying decisions have been made carefully.",
    icon: <Sparkle className="h-5 w-5" weight="bold" />,
  },
]

export function About() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <motion.div
        className="mx-auto max-w-6xl space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerRelaxed}
      >
        <motion.div variants={fadeUp}>
          <SectionHeader
            eyebrow="About"
            title="I build front ends that scale without becoming harder to work on"
            description="After nearly eight years in front-end development, I’ve focused my work on scalable design systems, accessible interfaces, and UI architecture that helps teams deliver more reliably."
          />
        </motion.div>

        <motion.div className="grid gap-6 md:grid-cols-3" variants={fadeUp}>
          {featureCards.map(({ title, description, icon }) => (
            <FeatureCard
              key={title}
              icon={icon}
              title={title}
              description={description}
              titleAs="h2"
            />
          ))}
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card className="rounded-2xl border-border/70 bg-card/95 shadow-sm">
            <CardContent className="grid gap-10 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-10">
              <div className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight">
                  How I work
                </h2>

                <p className="leading-7 text-muted-foreground">
                  I do my best work in teams that care about long-term product
                  quality, collaboration, and systems other people can actually
                  use. I like creating structure where there’s friction —
                  standardising components, reducing duplication, improving
                  documentation, and making accessibility part of the default
                  approach.
                </p>

                <p className="leading-7 text-muted-foreground">
                  A lot of my work is about reducing hidden cost. Cleaner
                  foundations mean fewer regressions, more predictable
                  implementation, and less time spent re-solving the same UI
                  problems across a codebase.
                </p>

                <p className="leading-7 text-muted-foreground">
                  I’m also neurodivergent, which shapes how I approach systems
                  and problem solving. I tend to notice inconsistencies, edge
                  cases, and unnecessary complexity quickly, which naturally
                  pulls me toward improving design systems, accessibility, and
                  maintainable UI architecture.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">
                  What I tend to focus on
                </h3>

                <div className="space-y-3">
                  {focusAreas.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 10, filter: "blur(4px)" }}
                      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        delay: 0.06 * index,
                        duration: 0.28,
                        ease: "easeOut",
                      }}
                      className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/70 p-4 shadow-sm"
                    >
                      <CheckCircle
                        className="mt-0.5 h-5 w-5 shrink-0"
                        weight="fill"
                      />
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}