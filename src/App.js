import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import LoginPage from './components/pages/Login'
import ProfilePage from './components/pages/Profile'
import RegisterPage from './components/pages/Register'
import HomePage from './components/pages/Home'
import NewCampaign from './components/pages/NewCampaign';
import CampaignsPage from './components/pages/Campaigns'
import Navbar from './components/Navbar'
import './App.css'
import jwt_decode from 'jwt-decode'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token) {
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, [])

  const handleLogout = () => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt')
      setCurrentUser(null)
    }
  }

  return (
    <Router>
      <header>
        <Navbar 
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
      </header>

      <div className="App">
        <Routes>
          <Route 
            path="/"
            element={<HomePage />}
          />

          <Route 
            path="/register"
            element={<RegisterPage currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          <Route 
            path="/login"
            element={<LoginPage currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          <Route 
            path="/newCampaign"
            element={<NewCampaign currentUser={currentUser} />}
          />

          <Route 
            path="/campaigns"
            element={<CampaignsPage currentUser={currentUser} />}
          />

          <Route 
            path="/profile"
            element={<ProfilePage handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />
        </Routes>
      </div>
    </Router>
  )
}
export default App
