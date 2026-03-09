import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Amanda Cashin</h2>
        <p className="text-muted-foreground">Front End Developer and Pug Mum</p>
      </main>

      <Footer />
    </div>
  )
}

export default App