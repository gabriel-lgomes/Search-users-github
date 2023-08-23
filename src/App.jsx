//
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Pages
import Home from "./pages/home"
import Profile from "./pages/profile"
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
