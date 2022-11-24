// import "./SignInCard.style.css"

import Logo from "../../logo.svg"

const SignInCard = () => {
  return (
    <div className="sign-in-card">
      <div className="header">
        <img src={Logo} alt="logo" width="150px" className="mx-auto" />
      </div>
      <div className="body flex justify-center flex-col">
        <input type="text" placeholder="Username" className="mb-2 mx-auto" />
        <input
          type="password"
          placeholder="Password"
          className="mb-2 mx-auto"
        />
      </div>
      <div className="footer flex justify-center items-center">
        <button className="btn mx-auto w-[75%]">Sign In</button>
      </div>
    </div>
  )
}

export default SignInCard
