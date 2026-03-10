import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"

import { Cursor } from "@/components/effects/cursor"
import { Container } from "@/components/layout/container"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { pageTransition } from "@/lib/motion"
import { About } from "@/pages/about"
import { Articles } from "@/pages/articles"
import { Home } from "@/pages/home"
import { Uses } from "@/pages/uses"

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/articles"
          element={
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Articles />
            </motion.div>
          }
        />
        <Route
          path="/uses"
          element={
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Uses />
            </motion.div>
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
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--muted))_0%,_transparent_52%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[linear-gradient(180deg,hsl(var(--background))_0%,transparent_100%)]" />

        <Header />

        <main className="flex-1">
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