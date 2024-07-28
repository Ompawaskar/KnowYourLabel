import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup'
import Auth from './components/Auth/Auth.jsx'
import OCRComponent from './components/OCR/OCRComponent';

function App() {
  return (
    <Router>
  
    <Routes>

      <Route path="/" element={<Auth />} />
      <Route path="/OCR" element={<OCRComponent />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  </Router>
  )
}

export default App
