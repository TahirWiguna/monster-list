import "./Home.style.css"
import Searchbox from "../components/Searchbox/Searchbox.component"
import CardList from "../components/CardList/CardList.component"

import axios from "axios"
import { useEffect, useState, ChangeEvent } from "react"

export type Monster = {
  name: string
  id: number
}

const Home = () => {
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>([])

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    const filtered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setFilteredMonsters(filtered)
  }

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users"
    axios
      .get<Monster[]>(url, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setMonsters(response.data)
      })
  }, [])

  useEffect(() => {
    setFilteredMonsters(monsters)
  }, [monsters])

  return (
    <div className="home">
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
      {<Searchbox onChangeHandler={onChangeHandler} />}
      {<CardList monsters={filteredMonsters} />}
    </div>
  )
}

export default Home
