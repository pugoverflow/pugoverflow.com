import { Header } from "@/components/header"

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Amanda Cashin </h2>
        <p className="text-muted-foreground">   Front End Developer and Pug Mum   </p>
      </main>
    </div>
  )
}

export default App