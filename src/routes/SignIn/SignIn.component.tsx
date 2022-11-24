// import "./SignIn.style.css"
import axios from "axios"
import { useEffect, useState, ChangeEvent } from "react"

import SignInCard from "../../components/SignInCard/SignInCard.component"

const Home = () => {
  return <div className="sign-in">{<SignInCard />}</div>
}

export default Home
