import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const SideBar = () => {
  return (
    <aside className="sidebar h-[100vh] bg-primary-500 fixed w-[225px]">
      <header className="bg-gray-300 h-20">LOGO</header>
      <div className="bg-gray-100 h-20 flex flex-row justify-center items-center gap-5">
        <div className="">picture</div>
        <div>
          <h4>FIRST NAME</h4>
          <h5>USR GROUP</h5>
        </div>
      </div>
      <ul>
        <li className="h-10 grid grid-cols-2">
          <FontAwesomeIcon icon={faCoffee} />
          <h4>Dashboard </h4>
        </li>
        <li>Monsters</li>
      </ul>
    </aside>
  )
}
export default SideBar
