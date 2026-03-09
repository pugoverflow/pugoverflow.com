import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          <section className="mx-auto w-full max-w-7xl px-6 py-8 md:px-8 lg:px-12">
            <Hero />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App