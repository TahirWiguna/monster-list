import { Fragment, useState } from "react"
import { Outlet } from "react-router-dom"
// import "./Navbar.style.css"
import { Link } from "react-router-dom"
import Logo from "../../logo.svg"
import { BsCloudSunFill, BsCloudMoon } from "react-icons/bs"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"
import { useDispatch } from "react-redux"
import { SignOutStart } from "../../store/user/user.action"

const Navbar = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  const [theme, setTheme] = useState("")

  const themeChangeHandler = () => {
    if (theme) {
      setTheme("")
      document.documentElement.classList.remove("dark")
    } else {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }

  const signOutHandler = () => {
    dispatch(SignOutStart(currentUser.token))
  }

  return (
    <Fragment>
      <div className="navbar">
        <div className="logo">
          <ul>
            <li>
              <Link to="/">
                <img src={Logo} alt="logo" width="100px" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu-container">
          <ul>
            <li className="theme-toggler" onClick={themeChangeHandler}>
              {theme ? (
                <BsCloudSunFill size={20} className="cursor-pointer" />
              ) : (
                <BsCloudMoon size={20} className="cursor-pointer" />
              )}
            </li>
            {currentUser ? (
              <>
                <li>
                  <Link to="admin">Admin Panel</Link>
                </li>
                <li>
                  <button onClick={signOutHandler}>Sign Out</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="signin">Sign In</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="area bg-primary-100 dark:bg-black-300">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navbar
