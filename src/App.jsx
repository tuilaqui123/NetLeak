import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Movie from './pages/Movie/Movie'
import SignUp from './pages/SignUp/SignUp'
import Step1 from './pages/SignUp/step/step1'
import TabPage from './pages/TabPage/TabPage'
import User from './pages/User/User'
import Video from './pages/Video/Video'
import Welcome from './pages/Welcome/Welcome'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Welcome />} />
            <Route path="/login/:id" element={<SignUp />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/tab/:id" element={<TabPage />} />
            <Route path="/video/:id" element={<Video />} />
            <Route path="/welcome" element={<Welcome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
