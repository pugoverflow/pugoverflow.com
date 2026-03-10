import { motion } from "motion/react"

import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { fadeUp, staggerRelaxed } from "@/lib/motion"

export function Articles() {
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
            eyebrow="Articles"
            title="Notes on front-end engineering, systems, and maintainability"
            description="I’m interested in writing about the practical side of front-end work — the decisions, trade-offs, and systems thinking behind resilient UI."
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card className="rounded-[2rem] border-dashed border-border/70 bg-muted/30 shadow-none">
            <CardContent className="flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-tight">First posts are on the way</h2>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                  Articles coming soon!
                </p>
              </div>

              <motion.div whileHover={{ y: -2 }}>
                <Badge className="w-fit rounded-full px-4 py-1 shadow-sm">
                  Thoughtful over frequent
                </Badge>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}