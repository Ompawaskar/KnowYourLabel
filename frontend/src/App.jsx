import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup'
import { SignUpProvider } from './context/SignUpContext';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={
          <SignUpProvider>
            <Signup />
          </SignUpProvider>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
