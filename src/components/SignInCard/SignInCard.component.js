import Logo from "../../logo.svg"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { SignInStart } from "../../store/user/user.action"

const defaultFields = {
  username: "",
  password: "",
}

const SignInCard = () => {
  const dispatch = useDispatch()

  const [formFields, setFormFields] = useState(defaultFields)
  const { username, password } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = () => {
    try {
      const user = dispatch(SignInStart(username, password))
      console.log("user", user)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="sign-in-card">
      <div className="header">
        <img src={Logo} alt="logo" width="150px" className="mx-auto" />
      </div>
      <div className="body flex justify-center flex-col">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="mb-2 mx-auto"
          onChange={handleChange}
          value={username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-2 mx-auto"
          onChange={handleChange}
          value={password}
        />
      </div>
      <div className="footer flex justify-center items-center">
        <button className="btn mx-auto w-[75%]" onClick={handleSubmit}>
          Sign In
        </button>
      </div>
    </div>
  )
}

export default SignInCard
