import "./Searchbox.component"
import { Fragment } from "react"
import "./Searchbox.style.css"

import { ChangeEvent } from "react"

type SearchboxProps = {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const Searchbox = ({ onChangeHandler }: SearchboxProps) => {
  return (
    <Fragment>
      <input
        type="search"
        placeholder="Search Monster"
        className="searchbox"
        onChange={onChangeHandler}
      />
    </Fragment>
  )
}

export default Searchbox
