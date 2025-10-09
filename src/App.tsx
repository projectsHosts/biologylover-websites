import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollButton from './components/ScrollButton'
import OurTeam from './components/Team'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Landing />
        <OurTeam />
        <Courses />
        <Contact />
      </main>
      <Footer />
      <ScrollButton />
    </div>
  )
}

export default App
