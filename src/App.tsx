import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
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
            <Hero />
          </section>
        </main>

        <Footer />
      </div>
    </motion.div>
  )
}

export default App