import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup'
import Auth from './components/Auth/Auth.jsx'
import OCRComponent from './components/OCR/OCRComponent';
import { SignUpProvider } from './context/SignUpContext';

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/signup" element={
          <SignUpProvider>
            <Signup />
          </SignUpProvider>} />

        <Route path="/OCR" element={<OCRComponent />} />
        {/* <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  )
}

export default App
