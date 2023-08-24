//
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Pages
import Home from "./pages/home" 
import Profile from "./pages/profile"
 

function App() {
  return (
    <div className="w-100 md:px-0 lg:px-0 px-6">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/profile" element={<Profile />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
