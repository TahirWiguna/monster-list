// import "./SignIn.style.css"
import axios from "axios"
import { useEffect, useState, ChangeEvent } from "react"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"

import SignInCard from "../../components/SignInCard/SignInCard.component"
import { Navigate } from "react-router-dom"

const Home = () => {
  const currentUser = useSelector(selectCurrentUser)
  if (currentUser) {
    return <Navigate to="/" />
  }
  return <div className="sign-in">{<SignInCard />}</div>
}

export default Home
