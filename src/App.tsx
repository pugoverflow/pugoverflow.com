import { Routes, Route } from "react-router-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Home } from "@/pages/home"
import { About } from "@/pages/about"
import { Articles } from "@/pages/articles"
import { Uses } from "@/pages/uses"
import { motion } from "motion/react"

export function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-screen bg-background text-foreground"
    >
      <div className="relative isolate flex min-h-screen flex-col overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--muted))_0%,_transparent_55%)]"
        />

        <Header />

        <main className="flex-1">
          <section className="mx-auto w-full max-w-7xl px-6 py-8 md:px-8 lg:px-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/uses" element={<Uses />} />
            </Routes>
          </section>
        </main>

        <Footer />
      </div>
    </motion.div>
  )
}

export default App