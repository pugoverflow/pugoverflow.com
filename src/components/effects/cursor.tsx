import { Bone } from "@phosphor-icons/react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react"
import { useEffect, useState } from "react"

const trail = [
  { stiffness: 140, damping: 20, mass: 1.1, size: 30, opacity: 0.9 },
  { stiffness: 118, damping: 18, mass: 1.28, size: 27, opacity: 0.72 },
  { stiffness: 96, damping: 17, mass: 1.5, size: 24, opacity: 0.56 },
  { stiffness: 78, damping: 16, mass: 1.75, size: 21, opacity: 0.42 },
  { stiffness: 62, damping: 15, mass: 2, size: 18, opacity: 0.3 },
]

function TrailBone({
  x,
  y,
  size,
  opacity,
  index,
}: {
  x: ReturnType<typeof useSpring>
  y: ReturnType<typeof useSpring>
  size: number
  opacity: number
  index: number
}) {
  const isLead = index === 0

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 hidden xl:block"
      style={{ x, y, zIndex: 100 - index }}
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
                ? "text-primary drop-shadow-[0_6px_16px_rgba(0,0,0,0.10)]"
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
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  const pointerX = useMotionValue(-100)
  const pointerY = useMotionValue(-100)

  const springs = trail.map((item) => ({
    x: useSpring(pointerX, {
      stiffness: item.stiffness,
      damping: item.damping,
      mass: item.mass,
    }),
    y: useSpring(pointerY, {
      stiffness: item.stiffness,
      damping: item.damping,
      mass: item.mass,
    }),
  }))

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

  if (!mounted) return null

  return (
    <AnimatePresence>
      {visible &&
        trail
          .slice()
          .reverse()
          .map((item, reversedIndex) => {
            const springIndex = trail.length - 1 - reversedIndex
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