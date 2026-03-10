import type { ReactNode } from "react"
import { motion } from "motion/react"

type IconHeadingProps = {
  icon: ReactNode
  title: string
  description?: string
}

export function IconHeading({
  icon,
  title,
  description,
}: IconHeadingProps) {
  return (
    <motion.div
      className="space-y-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.04, delayChildren: 0.01 },
        },
      }}
    >
      <motion.div
        className="flex items-center gap-3"
        variants={{
          hidden: { opacity: 0, x: -8 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.28, ease: "easeOut" },
          },
        }}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/70 bg-muted/50 shadow-sm">
          {icon}
        </div>

        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      </motion.div>

      {description ? (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 6 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.28, ease: "easeOut" },
            },
          }}
          className="max-w-2xl text-sm leading-6 text-muted-foreground"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  )
}