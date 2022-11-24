import { Routes, Route } from "react-router-dom"

import "./App.css"
import Navbar from "./components/Navbar/Navbar.component"
import SignInCard from "./components/SignInCard/SignInCard.component"
import Home from "./routes/Home/Home.component"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="SignIn" element={<SignInCard />} />
      </Route>
    </Routes>
  )
}

export default App
