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
import AIPracticeChat from './components/AIPracticeChat'
import Resources from './components/pdfnotes/Resources'
import VerifyEmail from './components/auth/VerifyEmail'

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
          <Route path="/ai-practice" element={<AIPracticeChat />} />

          {/* New: Individual Blog Detail */}
          <Route path="/blog/:subject/:topicId?" element={<BlogDetail />}
           />
       {/* New: Resources Page */}
             <Route path="/resources" element={<Resources />} />
             <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>

      <Footer />
      <ScrollButton />
    </div>
  )
}

export default App
