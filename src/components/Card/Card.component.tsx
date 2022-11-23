import "./Card.style.css"
import { Monster } from "./../../routes/Home.component"

type CardProps = {
  monster: Monster
}

const Card = ({ monster }: CardProps) => {
  const { name, id } = monster
  return (
    <div className="card">
      <div className="img-container bg-pink-300">
        <img
          src={`https://robohash.org/${id}?set=set2&size=150x150`}
          alt={name}
          className="mx-auto"
        />
      </div>
      <h1
        className="text-center font-bigelow text-3xl p-[27px] truncate"
        title={name}
      >
        {name}
      </h1>
    </div>
  )
}

export default Card
