import Logo from "../../logo.svg"
import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { SignInStart } from "../../store/user/user.action"
import { useSelector } from "react-redux"
import { selectCurrentUserReducer } from "../../store/user/user.selector"
import { useNavigate } from "react-router-dom"

const defaultFields = {
  username: "",
  password: "",
}

const SignInCard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userSelect = useSelector(selectCurrentUserReducer)

  const [formFields, setFormFields] = useState(defaultFields)
  const { username, password } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = () => {
    dispatch(SignInStart(username, password))
  }

  useEffect(() => {
    if (userSelect.user) {
      navigate("/")
    }
  }, [userSelect, navigate])

  return (
    <div className="sign-in-card">
      {!userSelect.user ? (
        <>
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
          <div className="footer flex justify-center items-center flex-col">
            <button
              className={
                "btn mx-auto w-[75%] " +
                (userSelect.isLoading
                  ? "is-loading w-[50%] cursor-not-allowed"
                  : "")
              }
              onClick={!userSelect.isLoading ? handleSubmit : null}
            >
              {!userSelect.isLoading ? "Sign In" : ""}
            </button>
            {userSelect.error ? (
              <>
                <hr className="mt-2" />
                <p className="mx-auto text-center text-primary-400">
                  {userSelect.error}
                </p>
              </>
            ) : null}
          </div>
        </>
      ) : (
        <p className="mx-auto text-center text-primary-400">
          You already signed in bruh...
        </p>
      )}
    </div>
  )
}

export default SignInCard
