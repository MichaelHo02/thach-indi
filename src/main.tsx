import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage'
import TimeJarPage from './pages/TimeJarPage'
import QuestionsGamePage from './pages/QuestionsGamePage'
import PrivacyPage from './pages/PrivacyPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename="/thach-indi">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apps/time-jar" element={<TimeJarPage />} />
        <Route path="/apps/time-jar/privacy.html" element={<PrivacyPage app="time-jar" />} />
        <Route path="/apps/questions-game" element={<QuestionsGamePage />} />
        <Route path="/apps/questions-game/privacy.html" element={<PrivacyPage app="questions-game" />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)