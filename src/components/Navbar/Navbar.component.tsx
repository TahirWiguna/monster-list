import { Fragment, useState } from "react"
import { Outlet } from "react-router-dom"
import "./Navbar.style.css"

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
    console.log(theme)
  }
  return (
    <Fragment>
      <div className="navbar">
        <div className="logo">
          <ul>
            <li>LOGO</li>
          </ul>
        </div>
        <div className="menu-container">
          <ul>
            <li className="theme-toggler" onClick={themeChangeHandler}>
              SUN
            </li>
            <li>Learn More</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navbar
