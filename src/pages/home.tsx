import {
  Dog,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
} from "@phosphor-icons/react"
import { motion } from "motion/react"

import logo from "@/assets/logo.png"
import { homeContent } from "@/content/home"
import { Section } from "@/components/layout/section"
import { IconHeading } from "@/components/icon-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
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

const sectionLabelClassName =
  "text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"

export function Home() {
  return (
    <Section>
      <motion.div initial="hidden" animate="visible" variants={heroShell}>
        <Card className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] border-border/70 bg-card/92 shadow-2xl shadow-black/5 backdrop-blur-sm">
          <CardContent className="relative grid w-full items-start gap-8 overflow-hidden p-4 sm:p-6 md:grid-cols-[minmax(0,1fr)_minmax(320px,440px)] md:gap-12 md:p-10 lg:gap-16 lg:p-14 xl:p-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08)_0%,transparent_36%)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.2)_0%,transparent_60%)] md:block" />

            {/* LEFT: professional */}
            <motion.div
              className="order-1 min-w-0 w-full max-w-none space-y-6 md:max-w-xl md:space-y-8"
              variants={heroStagger}
            >
              <motion.div
                className="flex flex-wrap gap-2"
                variants={heroBadgeStagger}
              >
                {homeContent.badges.map(({ label, variant }) => (
                  <motion.div key={label} variants={heroBadge}>
                    <Badge variant={variant}>{label}</Badge>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="space-y-3 md:space-y-4" variants={heroTitle}>
                <h1 className="break-words text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  {homeContent.title}
                </h1>

                <p className="max-w-xl text-base font-medium leading-7 text-foreground/88 sm:text-lg sm:leading-8 md:text-xl">
                  {homeContent.subtitle}
                </p>
              </motion.div>

              <motion.p
                className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base"
                variants={heroIntro}
              >
                {homeContent.intro}
              </motion.p>

              <motion.div className="space-y-3" variants={heroBlock}>
                <p className={sectionLabelClassName}>{homeContent.linksLabel}</p>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {homeContent.links.map(({ label, href, variant }) => {
                    const Icon = iconMap[label as keyof typeof iconMap]

                    return (
                      <Button
                        key={label}
                        asChild
                        size="lg"
                        variant={variant}
                        className="w-full gap-2 rounded-lg px-5 sm:w-auto sm:px-6"
                      >
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          <Icon className="h-5 w-5" weight="fill" />
                          {label}
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </motion.div>

              <motion.div className="space-y-3" variants={heroBlock}>
                <p className={sectionLabelClassName}>{homeContent.skillsLabel}</p>

                <div className="flex flex-wrap gap-2">
                  {homeContent.skills.map(({ label, variant }) => (
                    <Badge key={label} variant={variant ?? "outline"}>
                      {label}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              <motion.div className="space-y-3" variants={heroBlock}>
                <p className={sectionLabelClassName}>{homeContent.locationLabel}</p>

                <div className="flex flex-wrap gap-2">
                  {homeContent.location.map(({ label, variant }) => (
                    <div
                      key={label}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs shadow-sm backdrop-blur-sm",
                        variant === "secondary"
                          ? "border-border/50 bg-muted/60 text-muted-foreground"
                          : "border-border/70 bg-background/70 text-muted-foreground"
                      )}
                    >
                      <MapPin className="h-3.5 w-3.5 text-primary" weight="fill" />
                      {label}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT: visual + personality */}
            <motion.div
              className="order-2 mt-2 flex w-full justify-center md:mt-0 md:justify-end"
              variants={heroImage}
            >
              <div className="flex w-full flex-col items-start gap-4 md:max-w-[28rem]">
                <div className="relative w-full pb-2">
                  <motion.div
                    className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-border/40 bg-primary/8 md:translate-x-4 md:translate-y-4"
                    variants={heroImageFrame}
                  />

                  <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-border/70 bg-background/70">
                    <motion.img
                      src={logo}
                      alt={homeContent.title}
                      className="h-full w-full object-cover"
                      variants={heroImageInner}
                    />
                  </div>
                </div>

                <motion.div className="w-full pt-2 mt-6" variants={heroBlock}>
                  <IconHeading
                    as="h3"
                    icon={<Dog className="h-5 w-5" weight="fill" />}
                    title={homeContent.minnie.title}
                    description={homeContent.minnie.description}
                  />
                </motion.div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  )
}