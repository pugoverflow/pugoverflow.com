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
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerRelaxed}
      >
        <motion.div variants={fadeUp}>
          <SectionHeader
            eyebrow="Articles"
            title="Notes on front-end engineering, systems, and maintainability"
            description="I write about the practical side of front-end work — the decisions, trade-offs, and systems thinking behind resilient UI."
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
          <Card className="rounded-2xl border-dashed border-border/70 bg-muted/25 shadow-none transition-shadow duration-300 hover:shadow-sm">
            <CardContent className="flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-tight">
                  First posts are brewing
                </h2>

                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                  I’m taking my time with it — quality over volume, with useful content coming soon.
                </p>
              </div>

              <Badge className="w-fit rounded-md px-4 py-1 shadow-sm">
                Quality over volume
              </Badge>
            </CardContent>
          </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}