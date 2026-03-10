import { Bone } from "@phosphor-icons/react"
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react"
import { useEffect, useState } from "react"

const trail = [
  { stiffness: 120, damping: 18, mass: 1.2, size: 48, opacity: 1 },
  { stiffness: 100, damping: 17, mass: 1.4, size: 44, opacity: 0.94 },
  { stiffness: 85, damping: 16, mass: 1.6, size: 40, opacity: 0.88 },
  { stiffness: 72, damping: 15, mass: 1.8, size: 36, opacity: 0.8 },
  { stiffness: 60, damping: 14, mass: 2, size: 32, opacity: 0.72 },
  { stiffness: 50, damping: 13, mass: 2.3, size: 28, opacity: 0.62 },
  { stiffness: 42, damping: 12, mass: 2.6, size: 26, opacity: 0.54 },
  { stiffness: 35, damping: 11, mass: 3, size: 24, opacity: 0.46 },
  { stiffness: 30, damping: 10, mass: 3.4, size: 22, opacity: 0.38 },
  { stiffness: 26, damping: 9, mass: 3.8, size: 20, opacity: 0.3 },
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
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 hidden md:block"
      style={{ x, y, zIndex: 90 - index }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            rotate: [0, 120, 260, 360],
            y: [0, 6, 14, 8, 0],
            scale: [1, 1.08, 0.94, 1],
          }}
          transition={{
            duration: 3.6 + index * 0.4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ opacity }}
        >
          <Bone
            weight="duotone"
            className="text-foreground/90"
            style={{
              width: size,
              height: size,
            }}
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
      pointerX.set(event.clientX + 30)
      pointerY.set(event.clientY + 26)
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