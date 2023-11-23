import HomePage from "./components/HomePage";
import { Navbar } from "./components/NavBar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar/>
      <HomePage/>
    </main>
  )
}
