import { Routes, Route } from "react-router-dom"

import "./App.css"
import Navbar from "./components/Navbar/Navbar.component"
import SignInCard from "./components/SignInCard/SignInCard.component"
import Home from "./routes/Home/Home.component"
import NotFound from "./components/NotFound/NotFound.component"

import { selectCurrentUser } from "./store/user/user.selector"
import { useSelector } from "react-redux"
import Layout from "./components/Admin/Layout/Layout.component"

function App() {
  const currentUser = useSelector(selectCurrentUser)
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="SignIn" element={<SignInCard />} />
      </Route>
      <Route path="/admin" element={<Layout />}>
        <Route path="dashboard" />
      </Route>
    </Routes>
  )
}

export default App
