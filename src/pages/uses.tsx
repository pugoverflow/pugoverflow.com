import { Brain, Desktop } from "@phosphor-icons/react"
import { motion } from "motion/react"

import { FeatureCard } from "@/components/feature-card"
import { IconHeading } from "@/components/icon-heading"
import { SectionHeader } from "@/components/section-header"
import { fadeUp, stagger } from "@/lib/motion"

const setup = {
  standard: [
    {
      name: 'MacBook Pro 14"',
      note:
        "My main machine for development, writing, and general day-to-day work.",
    },
    {
      name: "External monitor",
      note:
        "A larger display for coding, reading documentation, and keeping multiple windows visible.",
    },
    {
      name: "Mouse",
      note:
        "Simple and reliable for everyday navigation and general desk work.",
    },
  ],
  neurodiversity: [
    {
      name: "Standing desk",
      note:
        "A sit-stand desk that lets me change posture throughout the day. Movement helps me stay focused and avoid mental fatigue.",
    },
    {
      name: "ADHD chair",
      note:
        "A chair designed to support movement and posture. It helps with restlessness and makes long work sessions more comfortable.",
    },
    {
      name: "Echo Dot",
      note:
        "Helpful for timers, reminders, routines, and reducing the number of things I need to hold in my head.",
    },
    {
      name: "reMarkable tablet",
      note:
        "Great for brain-dumping, handwritten notes, and getting thoughts out without the distraction of extra tabs or notifications.",
    },
    {
      name: "Goblin Tools",
      note:
        "Helps break overwhelming tasks into smaller, more manageable steps.",
    },
  ],
}

type GearSectionProps = {
  icon: React.ReactNode
  title: string
  description: string
  items: Array<{ name: string; note: string }>
}

function GearSection({
  icon,
  title,
  description,
  items,
}: GearSectionProps) {
  return (
    <motion.section className="space-y-5" variants={fadeUp}>
      <IconHeading icon={icon} title={title} description={description} />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <FeatureCard
            key={item.name}
            title={item.name}
            description={item.note}
          />
        ))}
      </div>
    </motion.section>
  )
}

export function Uses() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <motion.div
        className="mx-auto max-w-6xl space-y-12"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <SectionHeader
            eyebrow="Uses"
            title="My desk setup"
            description="The gear I use day-to-day for development, writing, focus, and staying organised — including a few tools that help me manage ADHD."
          />
        </motion.div>

        <GearSection
          icon={<Desktop className="h-5 w-5" weight="bold" />}
          title="Standard setup"
          description="The core hardware I use for development and everyday work."
          items={setup.standard}
        />

        <GearSection
          icon={<Brain className="h-5 w-5" weight="bold" />}
          title="Neurodiversity supports"
          description="Tools that help with focus, movement, reminders, task breakdown, and reducing cognitive load."
          items={setup.neurodiversity}
        />
      </motion.div>
    </section>
  )
}