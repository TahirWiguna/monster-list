import "./CardList.style.css"
import Card from "../Card/Card.component"
import { Monster } from "./../../routes/Home.component"

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />
      })}
    </div>
  )
}

export default CardList
