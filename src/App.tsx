import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import TimelineSection from './components/sections/TimelineSection'
import GamesSection from './components/sections/GamesSection'

function App() {
  return (
    <main className="app-container">
      <Navbar />
      <HeroSection />
      <TimelineSection />
      <GamesSection />
      <Footer />
    </main>
  )
}

export default App
