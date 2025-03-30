import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import { useState } from 'react'
import { ResumeData } from './types'
import LandingPage from './components/LandingPage'
import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview'

const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    summary: ''
  },
  experience: [],
  education: [],
  skills: [],
  projects: []
}

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="mock-ready-theme">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/create"
            element={
              <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <ResumeForm data={resumeData} onChange={setResumeData} />
                  <div className="sticky top-4">
                    <ResumePreview data={resumeData} />
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
