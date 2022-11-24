// import "./SignInCard.style.css"

const SignInCard = () => {
  return (
    <div className="sign-in-card">
      <div className="header">
        <h1>Sign In</h1>
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
        <button className="btn mx-auto w-[25%] min-w-[300px]">Sign In</button>
      </div>
    </div>
  )
}

export default SignInCard
