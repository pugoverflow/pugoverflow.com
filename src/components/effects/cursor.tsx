import { Bone } from "@phosphor-icons/react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"
import { useEffect, useState } from "react"

const trailConfig = [
  { stiffness: 150, damping: 22, mass: 1.08, size: 30, opacity: 0.92 },
  { stiffness: 126, damping: 20, mass: 1.24, size: 27, opacity: 0.74 },
  { stiffness: 104, damping: 18, mass: 1.42, size: 24, opacity: 0.58 },
  { stiffness: 84, damping: 17, mass: 1.68, size: 21, opacity: 0.44 },
  { stiffness: 68, damping: 16, mass: 1.92, size: 18, opacity: 0.3 },
] as const

type SpringValue = ReturnType<typeof useSpring>

type TrailBoneProps = {
  x: SpringValue
  y: SpringValue
  size: number
  opacity: number
  index: number
}

function TrailBone({ x, y, size, opacity, index }: TrailBoneProps) {
  const isLead = index === 0

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 hidden xl:block"
      style={{ x, y, zIndex: 100 - index }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.18 }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            rotate: [0, 4, -4, 0],
            scale: [1, 1.012, 0.995, 1],
            y: [0, 1, 0],
          }}
          transition={{
            duration: 3 + index * 0.18,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ opacity }}
          className="rounded-full"
        >
          <Bone
            weight="duotone"
            className={
              isLead
                ? "text-primary drop-shadow-[0_6px_18px_rgba(0,0,0,0.10)]"
                : "text-[color:color-mix(in_oklab,hsl(var(--primary))_88%,hsl(var(--accent))_12%)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
            }
            style={{ width: size, height: size }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Cursor() {
  const shouldReduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  const pointerX = useMotionValue(-120)
  const pointerY = useMotionValue(-120)

  const spring0X = useSpring(pointerX, {
    stiffness: trailConfig[0].stiffness,
    damping: trailConfig[0].damping,
    mass: trailConfig[0].mass,
  })
  const spring0Y = useSpring(pointerY, {
    stiffness: trailConfig[0].stiffness,
    damping: trailConfig[0].damping,
    mass: trailConfig[0].mass,
  })

  const spring1X = useSpring(pointerX, {
    stiffness: trailConfig[1].stiffness,
    damping: trailConfig[1].damping,
    mass: trailConfig[1].mass,
  })
  const spring1Y = useSpring(pointerY, {
    stiffness: trailConfig[1].stiffness,
    damping: trailConfig[1].damping,
    mass: trailConfig[1].mass,
  })

  const spring2X = useSpring(pointerX, {
    stiffness: trailConfig[2].stiffness,
    damping: trailConfig[2].damping,
    mass: trailConfig[2].mass,
  })
  const spring2Y = useSpring(pointerY, {
    stiffness: trailConfig[2].stiffness,
    damping: trailConfig[2].damping,
    mass: trailConfig[2].mass,
  })

  const spring3X = useSpring(pointerX, {
    stiffness: trailConfig[3].stiffness,
    damping: trailConfig[3].damping,
    mass: trailConfig[3].mass,
  })
  const spring3Y = useSpring(pointerY, {
    stiffness: trailConfig[3].stiffness,
    damping: trailConfig[3].damping,
    mass: trailConfig[3].mass,
  })

  const spring4X = useSpring(pointerX, {
    stiffness: trailConfig[4].stiffness,
    damping: trailConfig[4].damping,
    mass: trailConfig[4].mass,
  })
  const spring4Y = useSpring(pointerY, {
    stiffness: trailConfig[4].stiffness,
    damping: trailConfig[4].damping,
    mass: trailConfig[4].mass,
  })

  const springs = [
    { x: spring0X, y: spring0Y },
    { x: spring1X, y: spring1Y },
    { x: spring2X, y: spring2Y },
    { x: spring3X, y: spring3Y },
    { x: spring4X, y: spring4Y },
  ]

  useEffect(() => {
    setMounted(true)

    const handleMove = (event: PointerEvent) => {
      pointerX.set(event.clientX + 18)
      pointerY.set(event.clientY + 14)
      setVisible(true)
    }

    const handleLeave = () => setVisible(false)
    const handleEnter = () => setVisible(true)

    window.addEventListener("pointermove", handleMove)
    window.addEventListener("pointerleave", handleLeave)
    window.addEventListener("pointerenter", handleEnter)

    return () => {
      window.removeEventListener("pointermove", handleMove)
      window.removeEventListener("pointerleave", handleLeave)
      window.removeEventListener("pointerenter", handleEnter)
    }
  }, [pointerX, pointerY])

  if (!mounted || shouldReduceMotion) {
    return null
  }

  return (
    <AnimatePresence>
      {visible &&
        trailConfig
          .slice()
          .reverse()
          .map((item, reversedIndex) => {
            const springIndex = trailConfig.length - 1 - reversedIndex
            const spring = springs[springIndex]

            return (
              <TrailBone
                key={springIndex}
                x={spring.x}
                y={spring.y}
                size={item.size}
                opacity={item.opacity}
                index={reversedIndex}
              />
            )
          })}
    </AnimatePresence>
  )
}