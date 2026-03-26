import { Brain, Desktop } from "@phosphor-icons/react"
import { motion } from "motion/react"

import { usesContent } from "@/content/uses"
import { FeatureCard } from "@/components/feature-card"
import { IconHeading } from "@/components/icon-heading"
import { SectionHeader } from "@/components/section-header"
import { Section } from "@/components/layout/section"
import { cardReveal, stagger, usesCardGridStagger } from "@/lib/motion"

type UsesItem = {
  name: string
  note: string
}

type UsesSectionProps = {
  icon: React.ReactNode
  title: string
  description: string
  items: UsesItem[]
}

function UsesSection({
  icon,
  title,
  description,
  items,
}: UsesSectionProps) {
  return (
    <motion.div className="space-y-5" variants={cardReveal}>
      <IconHeading icon={icon} title={title} description={description} />

      <motion.div
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        variants={usesCardGridStagger}
      >
        {items.map((item) => (
          <motion.div key={item.name} variants={cardReveal}>
            <FeatureCard title={item.name} description={item.note} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export function Uses() {
  return (
    <Section>
      <motion.div
        className="mx-auto max-w-7xl space-y-12"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <SectionHeader {...usesContent.header} />

        <UsesSection
          icon={<Desktop className="h-5 w-5" weight="bold" />}
          title="What’s on my desk"
          description="The core setup I work from every day."
          items={usesContent.desk}
        />

        <UsesSection
          icon={<Brain className="h-5 w-5" weight="bold" />}
          title="Neurodiversity supports"
          description="Tools that support focus, structure, and cognitive load."
          items={usesContent.neurodiversity}
        />
      </motion.div>
    </Section>
  )
}