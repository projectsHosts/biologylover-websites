import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollButton from './components/ScrollButton'
import OurTeam from './components/Team'
import AIExamPrep from './components/EntrenchPrep'
import AboutUs from './components/About'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Separate pages */}
        <Route path="/" element={
          <>
            <main>
              <Landing />
              <OurTeam />
              <AIExamPrep />
              <Courses />
              <Contact />
            </main>
          </>
        } />

        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <Footer />
      <ScrollButton />
    </div>
  )
}

export default App
