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

export function About() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <motion.div
        className="mx-auto max-w-6xl space-y-10"
        initial="hidden"
        animate="visible"
        variants={staggerRelaxed}
      >
        <motion.div variants={fadeUp}>
          <SectionHeader
            eyebrow="About"
            title="I care about building front ends that stay good as they grow"
            description="After nearly eight years in front-end development, I’ve found my niche in scalable design systems, accessible interfaces, and UI architecture that makes product teams more effective."
          />
        </motion.div>

        <motion.div className="grid gap-6 md:grid-cols-3" variants={fadeUp}>
          <FeatureCard
            icon={<Code className="h-5 w-5" weight="bold" />}
            title="Engineering foundations"
            description="I enjoy the work that makes everything else smoother: reusable components, sensible APIs, stronger state boundaries, and code that’s easier to extend."
            titleAs="h2"
          />

          <FeatureCard
            icon={<Palette className="h-5 w-5" weight="bold" />}
            title="Design system thinking"
            description="I like turning visual consistency into practical, documented systems that help designers and engineers work from the same shared language."
            titleAs="h2"
          />

          <FeatureCard
            icon={<Sparkle className="h-5 w-5" weight="bold" />}
            title="User experience details"
            description="Accessibility, clarity, and polish matter. The best interfaces feel straightforward because someone cared about the edge cases."
            titleAs="h2"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card className="rounded-[2rem] border-border/60 bg-card/90 shadow-sm">
            <CardContent className="grid gap-10 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-10">
              <div className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight">How I work</h2>

                <p className="leading-7 text-muted-foreground">
                  I’m at my best in teams that care about long-term product quality,
                  collaboration, and building systems that other people can actually use.
                  I like creating structure where there’s friction — whether that’s
                  standardising components, reducing duplication, improving documentation,
                  or making accessibility a default instead of an afterthought.
                </p>

                <p className="leading-7 text-muted-foreground">
                  A lot of my work is about reducing hidden cost. Cleaner foundations mean
                  fewer regressions, more predictable implementation, and less time spent
                  re-solving the same UI problems across a codebase.
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
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * index, duration: 0.28 }}
                      className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/60 p-4 shadow-sm"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" weight="fill" />
                      <p className="text-sm leading-6 text-muted-foreground">{item}</p>
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