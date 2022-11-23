import { Routes, Route } from "react-router-dom"

import "./App.css"
import Navbar from "./components/Navbar/Navbar.component"
import Home from "./routes/Home.component"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="login" />
      </Route>
    </Routes>
  )
}

export default App
