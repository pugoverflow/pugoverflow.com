import { Brain, Desktop } from "@phosphor-icons/react"
import { motion } from "motion/react"

import { FeatureCard } from "@/components/feature-card"
import { IconHeading } from "@/components/icon-heading"
import { SectionHeader } from "@/components/section-header"
import { fadeUp, stagger } from "@/lib/motion"

const setup = {
  desk: [
    {
      name: 'MacBook Pro 14"',
      note: "My main machine for development, writing, and day-to-day work.",
    },
    {
      name: "Ultrawide monitor",
      note:
        "An ultrawide display that lets me keep code, documentation, and the browser open side by side — much easier than constantly switching tabs.",
    },
    {
      name: "Magic Mouse",
      note: "Simple and reliable for everyday navigation and desk work.",
    },
    {
      name: "Dog treats (for Minnie)",
      note:
        "An essential part of the desk setup. Minnie is my workday companion. Treats help with morale, negotiations, and timely walk reminders.",
    },
  ],
  neurodiversity: [
    {
      name: "Standing desk",
      note:
        "A sit-stand desk that lets me change posture throughout the day. Movement helps me stay focused and reduce mental fatigue.",
    },
    {
      name: "PiperSong meditation chair",
      note:
        "A cross-legged meditation chair that lets me sit in different positions throughout the day. It helps with ADHD restlessness — and bonus: it makes room for Minnie to curl up on my lap during deep work.",
    },
    {
      name: "Echo Dot",
      note:
        "Useful for timers, reminders, routines, and reducing the number of things I need to hold in my head.",
    },
    {
      name: "reMarkable tablet",
      note:
        "Helpful for brain-dumping, handwritten notes, and getting thoughts out without the distraction of extra tabs or notifications.",
    },
    {
      name: "Goblin Tools",
      note:
        "A lifesaver for breaking overwhelming tasks into smaller, more manageable steps.",
    },
  ],
}

type GearSectionProps = {
  icon: React.ReactNode
  title: string
  description: string
  items: Array<{
    name: string
    note: string
  }>
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
        {items.map(({ name, note }) => (
          <FeatureCard key={name} title={name} description={note} />
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
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <SectionHeader
            eyebrow="Uses"
            title="My desk setup"
            description="The tools that keep me productive, focused, and (mostly) organized — including a few that help me manage ADHD."
          />
        </motion.div>

        <GearSection
          icon={<Desktop className="h-5 w-5" weight="bold" />}
          title="What’s on my desk"
          description="The core setup I work from every day."
          items={setup.desk}
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