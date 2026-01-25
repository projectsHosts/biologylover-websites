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
import { Route, Routes, useLocation } from 'react-router-dom'
import Faq from './components/Faq'
import AIPracticeChat from './components/AIPracticeChat'
import Resources from './components/pdfnotes/Resources'
import VerifyEmail from './components/auth/VerifyEmail'
import OAuthSuccess from './components/auth/OAuthSuccess'
import AddProfile from './components/Profile/add-Profile'
import ProfileView from './components/Profile/view-Profile'
import EditProfile from './components/Profile/edit-Profile'
import ProtectedRoute from './routes/ProtectedRoute'
import ContactUs from './components/ContactUs'
import Dashboard from './components/Dashboard/Dashboard'
import ScrollToTop from './components/Scrollhandle/ScrollToTop'
import DailyQuizPage from './components/quizzes/pages/DailyQuizPage'
import LoginForm from './components/auth/LoginForm'
import ForgotPassword from './components/auth/ForgotPassword'
import ResetPassword from './components/auth/ResetPassword'


function App() {
  const location = useLocation(); 
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      
      <Routes location={location} key={location.pathname}>
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
        <Route path="/contactus" element={<ContactUs />} />
        {/* New: Blogs Page */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/ai-practice" element={<AIPracticeChat />} />
          <Route path="/daily-quiz" element={<DailyQuizPage />} />
          <Route path="/daily-quiz/leaderboard" element={<DailyQuizPage />} />

          {/* New: Individual Blog Detail */}
          <Route path="/blog/:subject/:topicId?" element={<BlogDetail />}
           />
       {/* New: Resources Page */}
             <Route path="/resources" element={<Resources />} />
             <Route path="/verify-email" element={<VerifyEmail />} />
             <Route path="/oauth-success" element={<OAuthSuccess />} />
             <Route path="/login" element={<LoginForm onForgot={function (): void {
          throw new Error('Function not implemented.')
        } } onSwitchRegister={function (): void {
          throw new Error('Function not implemented.')
        } } />} />
             <Route path="/forgot-password" element={<ForgotPassword onBack={function (): void {
          throw new Error('Function not implemented.')
        } } />} />
             <Route path="/reset-password" element={<ResetPassword />} />
          {/* Protect Routes  */}
             {/* <Route path="/profile" element={<ProtectedRoute><ProfileView /></ProtectedRoute>} />
             <Route path="/profile/edit" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
             <Route path="/profile/add" element={<ProtectedRoute><AddProfile /></ProtectedRoute>} />
             <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}

             <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<ProfileView />} />
              <Route path="/profile/edit" element={<EditProfile />} />
              <Route path="/profile/add" element={<AddProfile />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

      </Routes>

      <Footer />
      {location.pathname === "/" && <ScrollButton />}

      {/* <ScrollButton /> */}
    </div>
  )
}

export default App
