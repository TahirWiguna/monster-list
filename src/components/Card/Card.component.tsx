// import "./Card.style.css"
import { Monster } from "../../routes/Home/Home.component"

type CardProps = {
  monster: Monster
}

const Card = ({ monster }: CardProps) => {
  const { name, id } = monster
  return (
    <div className="card">
      <div className="img-container bg-pink-300 dark:bg-black-500 shadow-sm">
        <img
          src={`https://robohash.org/${id}?set=set2&size=150x150`}
          alt={name}
          className="mx-auto"
        />
      </div>
      <h1
        className="text-center font-bigelow text-3xl p-[27px] truncate text-black-500 dark:text-white"
        title={name}
      >
        {name}
      </h1>
    </div>
  )
}

export default Card
