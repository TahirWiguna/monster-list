import { Fragment, useState } from "react"
import { Outlet } from "react-router-dom"
// import "./Navbar.style.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [theme, setTheme] = useState("")

  const themeChangeHandler = () => {
    if (theme) {
      setTheme("")
      document.body.classList.remove("dark")
    } else {
      setTheme("dark")
      document.body.classList.add("dark")
    }
  }
  return (
    <Fragment>
      <div className="navbar">
        <div className="logo">
          <ul>
            <li>
              <Link to="/">LOGO</Link>
            </li>
          </ul>
        </div>
        <div className="menu-container">
          <ul>
            <li className="theme-toggler" onClick={themeChangeHandler}>
              TOGGLE
            </li>
            <li>
              <Link to="learn">Learn More</Link>
            </li>
            <li>
              <Link to="signin">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navbar
