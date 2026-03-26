import { Brain, Desktop } from "@phosphor-icons/react"
import { motion } from "motion/react"

import { usesContent } from "@/content/uses"
import { FeatureCard } from "@/components/feature-card"
import { IconHeading } from "@/components/icon-heading"
import { SectionHeader } from "@/components/section-header"
import { stagger } from "@/lib/motion"

function Section({ icon, title, description, items }: any) {
  return (
    <div className="space-y-5">
      <IconHeading icon={icon} title={title} description={description} />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item: any) => (
          <FeatureCard
            key={item.name}
            title={item.name}
            description={item.note}
          />
        ))}
      </div>
    </div>
  )
}

export function Uses() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <motion.div
        className="mx-auto max-w-7xl space-y-12"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
      >
        <SectionHeader {...usesContent.header} />

        <Section
          icon={<Desktop className="h-5 w-5" weight="bold" />}
          title="What’s on my desk"
          description="The core setup I work from every day."
          items={usesContent.desk}
        />

        <Section
          icon={<Brain className="h-5 w-5" weight="bold" />}
          title="Neurodiversity supports"
          description="Tools that support focus, structure, and cognitive load."
          items={usesContent.neurodiversity}
        />
      </motion.div>
    </section>
  )
}