import {
  CheckCircle,
  Code,
  Palette,
  Sparkle,
} from "@phosphor-icons/react"
import { motion } from "motion/react"

import { aboutContent } from "@/content/about"
import { FeatureCard } from "@/components/feature-card"
import { SectionHeader } from "@/components/section-header"
import { Section } from "@/components/layout/section"
import { Card, CardContent } from "@/components/ui/card"
import {
  aboutFocusListStagger,
  cardReveal,
  listItemReveal,
  staggerRelaxed,
} from "@/lib/motion"

const icons = [Code, Palette, Sparkle]

export function About() {
  return (
    <Section>
      <motion.div
        className="mx-auto max-w-7xl space-y-10"
        variants={staggerRelaxed}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <SectionHeader {...aboutContent.header} />

        <div className="grid gap-6 md:grid-cols-3">
          {aboutContent.features.map((item, index) => {
            const Icon = icons[index]

            return (
              <motion.div key={item.title} variants={cardReveal}>
                <FeatureCard
                  icon={<Icon className="h-5 w-5" weight="bold" />}
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            )
          })}
        </div>

        <motion.div variants={cardReveal}>
          <Card className="rounded-[2rem] border-border/70 bg-card/92">
            <CardContent className="grid gap-10 p-8 md:grid-cols-[1.2fr_0.8fr]">
              <motion.div className="space-y-4" variants={staggerRelaxed}>
                {aboutContent.howIWork.map((text) => (
                  <motion.p
                    key={text}
                    variants={listItemReveal}
                    className="text-sm leading-7 text-muted-foreground"
                  >
                    {text}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div className="space-y-3" variants={aboutFocusListStagger}>
                {aboutContent.focusAreas.map((item) => (
                  <motion.div
                    key={item}
                    variants={listItemReveal}
                    className="flex gap-3 rounded-xl border border-border/70 bg-background/45 p-3"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 text-primary" weight="fill" />
                    <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  )
}