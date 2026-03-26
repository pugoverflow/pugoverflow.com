import type { Variants } from "motion/react"

/**
 * Motion tokens — layered, product-style timing.
 * Enter: decelerate out. Exit: slightly shorter + snappier.
 */
const easeOut = [0.22, 1, 0.36, 1] as const
const easeIn = [0.4, 0, 1, 1] as const

/** Scroll-triggered reveal */
export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: easeOut,
    },
  },
}

/** Lighter scroll reveal */
export const scrollRevealSubtle: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.44, ease: easeOut },
  },
}

/** Initial load blocks */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
}

/** Hero shell — card enters first */
export const heroShell: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
}

/** Hero left column — stepped children */
export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.072,
      delayChildren: 0.07,
    },
  },
}

export const heroBadgeStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.048,
      delayChildren: 0,
    },
  },
}

export const heroBadge: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.38, ease: easeOut },
  },
}

export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.64, ease: easeOut },
  },
}

export const heroIntro: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: easeOut },
  },
}

export const heroBlock: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.46, ease: easeOut },
  },
}

/** Hero image column */
export const heroImage: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.78, ease: easeOut, delay: 0.1 },
  },
}

export const heroImageFrame: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.68, ease: easeOut, delay: 0.16 },
  },
}

/** Inner photo — settles after frame */
export const heroImageInner: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.72, ease: easeOut, delay: 0.22 },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.38, ease: "easeOut" },
  },
}

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.06,
    },
  },
}

export const staggerRelaxed: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.05,
    },
  },
}

/** Section header — clear eyebrow → title → body rhythm */
export const staggerSectionHeader: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.02,
    },
  },
}

export const staggerTight: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
}

/** About — 3-up feature cards */
export const aboutCardsStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.06,
    },
  },
}

/** About — focus checklist rows */
export const aboutFocusListStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
}

/** Uses — gear grid */
export const usesCardGridStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.095,
      delayChildren: 0.05,
    },
  },
}

export const usesSectionStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.03,
    },
  },
}

/** Cards — slight scale + lift for depth */
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
}

/** Uses — same family, slightly snappier cadence */
export const usesCardReveal: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.988 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.46, ease: easeOut },
  },
}

/** List rows — less travel than cards */
export const listItemReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.44, ease: easeOut },
  },
}

export const slideUpFade: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.44, ease: easeOut },
  },
}

/** Eyebrow — quick, tight */
export const sectionEyebrow: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.36, ease: easeOut },
  },
}

/** Title — primary motion */
export const sectionTitle: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.56, ease: easeOut },
  },
}

/** Description — last, softer */
export const sectionDescription: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
}

/** Route transitions — enter calm, exit quick */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.18, ease: easeIn },
  },
}
