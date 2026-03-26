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
import { Card, CardContent } from "@/components/ui/card"
import { fadeUp, staggerRelaxed } from "@/lib/motion"

const icons = [Code, Palette, Sparkle]

export function About() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <motion.div
        className="mx-auto max-w-7xl space-y-10"
        variants={staggerRelaxed}
        initial="hidden"
        whileInView="visible"
      >
        <SectionHeader {...aboutContent.header} />

        <div className="grid gap-6 md:grid-cols-3">
          {aboutContent.features.map((item, i) => {
            const Icon = icons[i]

            return (
              <FeatureCard
                key={item.title}
                icon={<Icon className="h-5 w-5" weight="bold" />}
                title={item.title}
                description={item.description}
              />
            )
          })}
        </div>

        <Card className="rounded-[2rem] border-border/70 bg-card/90">
          <CardContent className="grid gap-10 p-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              {aboutContent.howIWork.map((text) => (
                <p key={text} className="text-sm text-muted-foreground">
                  {text}
                </p>
              ))}
            </div>

            <div className="space-y-3">
              {aboutContent.focusAreas.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-border/70 p-3"
                >
                  <CheckCircle className="h-4 w-4 text-primary" weight="fill" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}