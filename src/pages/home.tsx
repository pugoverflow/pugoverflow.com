import {
  Dog,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react"
import { motion } from "motion/react"

import logo from "@/assets/logo.png"
import { homeContent } from "@/content/home"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  heroBadge,
  heroBadgeStagger,
  heroBlock,
  heroImage,
  heroImageFrame,
  heroImageInner,
  heroIntro,
  heroShell,
  heroStagger,
  heroTitle,
} from "@/lib/motion"

const iconMap = {
  GitHub: GithubLogo,
  LinkedIn: LinkedinLogo,
  Instagram: InstagramLogo,
}

export function Home() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24">
      <motion.div initial="hidden" animate="visible" variants={heroShell}>
        <Card className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border-border/70 bg-card/90 shadow-2xl shadow-black/5 backdrop-blur-sm">
          <CardContent className="relative grid items-center gap-10 p-6 md:grid-cols-[1.08fr_.92fr] md:p-10 lg:p-14 xl:p-16">
            {/* BG */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08)_0%,transparent_36%)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.2)_0%,transparent_60%)] md:block" />

            {/* LEFT */}
            <motion.div
              className="order-2 max-w-2xl space-y-8 md:order-1"
              variants={heroStagger}
            >
              {/* badges */}
              <motion.div
                variants={heroBadgeStagger}
                className="flex flex-wrap gap-2"
              >
                {homeContent.badges.map(({ label, variant }) => (
                  <motion.div key={label} variants={heroBadge}>
                    <Badge variant={variant}>{label}</Badge>
                  </motion.div>
                ))}
              </motion.div>

              <motion.h1
                variants={heroTitle}
                className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
              >
                Amanda Cashin
              </motion.h1>

              <motion.p
                variants={heroIntro}
                className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base"
              >
                {homeContent.intro}
              </motion.p>

              {/* Minnie */}
              <motion.div
                className="rounded-2xl border border-border/70 bg-muted/40 p-5"
                variants={heroBlock}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background">
                    <Dog className="h-5 w-5 text-primary" weight="fill" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      {homeContent.minnie.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {homeContent.minnie.description}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* links */}
              <motion.div className="flex gap-3" variants={heroBlock}>
                {homeContent.links.map(({ label, href, variant }) => {
                  const Icon = iconMap[label as keyof typeof iconMap]

                  return (
                    <Button
                      key={label}
                      asChild
                      size="lg"
                      variant={variant}
                      className="rounded-lg px-6 gap-2"
                    >
                      <a href={href} target="_blank">
                        <Icon className="h-5 w-5" weight="fill" />
                        {label}
                      </a>
                    </Button>
                  )
                })}
              </motion.div>

              {/* skills */}
              <motion.div className="space-y-3" variants={heroBlock}>
                <p className="text-sm text-muted-foreground">Core skills</p>

                <div className="flex flex-wrap gap-2">
                  {homeContent.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              className="order-1 flex justify-center md:order-2 md:justify-end"
              variants={heroImage}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-border/40 bg-primary/8"
                  variants={heroImageFrame}
                />

                <div className="relative h-72 w-72 overflow-hidden rounded-[2rem] border border-border/70 md:h-80 md:w-80 lg:h-[28rem] lg:w-[28rem]">
                  <motion.img
                    src={logo}
                    alt="Pug Overflow"
                    className="h-full w-full object-cover"
                    variants={heroImageInner}
                  />
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}