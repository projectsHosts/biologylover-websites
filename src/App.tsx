import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollButton from './components/ScrollButton'
import OurTeam from './components/Team'
import AIExamPrep from './components/EntrenchPrep'
import AboutUs from './components/About'
import Blogs from './components/Blogs'; 
import BlogDetail from './components/BlogDetail'; 
import { Route, Routes } from 'react-router-dom'
import Faq from './components/Faq'

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
              <Faq />
              <Contact />
            </main>
          </>
        } />

        <Route path="/about" element={<AboutUs />} />
        {/* New: Blogs Page */}
          <Route path="/blogs" element={<Blogs />} />

          {/* New: Individual Blog Detail */}
          <Route path="/blog/:subject" element={<BlogDetail />} />
      </Routes>

      <Footer />
      <ScrollButton />
    </div>
  )
}

export default App
