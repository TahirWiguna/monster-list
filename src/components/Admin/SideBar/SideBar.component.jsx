import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import Logo from "../../../logo.svg"

const SideBar = () => {
  return (
    <aside className="sidebar h-[100vh] bg-white fixed w-[250px] border-accent border-r-[6px]">
      <header className="bg-white h-20 w-full">
        <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
      </header>
      <div className="bg-accent2 h-20 flex flex-row justify-center items-center gap-5">
        <div className="">picture</div>
        <div>
          <h4>FIRST NAME</h4>
          <h5>USR GROUP</h5>
        </div>
      </div>
      <div className="menu-container w-full h-full">
        <ul>
          <li className="min-h-10">
            <Link to="/admin/dashboard" className="w-full h-full block p-3">
              <i className="inline-block align-top mt-[2px]">
                <FontAwesomeIcon icon={faCoffee} />
              </i>
              <h5 className="ml-2 inline-block w-[85%]">Dashboard</h5>
            </Link>
          </li>
          <li className="min-h-10">
            <Link to="/admin/monster" className="w-full h-full block p-3">
              <i className="inline-block align-top mt-[2px]">
                <FontAwesomeIcon icon={faCoffee} />
              </i>
              <h5 className="ml-2 inline-block w-[85%]">Monster</h5>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
export default SideBar
