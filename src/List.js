import React from "react"

const List = (props) => {
  const { name, age, image } = props
  return (
    <>
      <div className="person">
        <img src={image} alt={name} />
        <h4>{name}</h4>

        <p>{age}</p>
      </div>
    </>
  )
}

export default List
