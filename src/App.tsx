import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"

import { Cursor } from "@/components/effects/cursor"
import { Container } from "@/components/layout/container"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { pageTransition } from "@/lib/motion"

import { About } from "@/pages/about"
import { Home } from "@/pages/home"
import { Uses } from "@/pages/uses"

function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="will-change-[opacity,transform]"
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          }
        />

        <Route
          path="/about"
          element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          }
        />

        <Route
          path="/uses"
          element={
            <AnimatedPage>
              <Uses />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Cursor />

      <div className="relative isolate flex min-h-screen flex-col overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-64 w-[min(32rem,90vw)] bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.06)_0%,transparent_60%)] blur-2xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[linear-gradient(180deg,hsl(var(--background))_0%,transparent_100%)]" />
        <div className="pointer-events-none absolute right-0 top-0 -z-10 hidden h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.18)_0%,transparent_70%)] blur-3xl md:block" />

        <Header />

        <main className="relative flex-1">
          <Container className="relative">
            <AnimatedRoutes />
          </Container>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App