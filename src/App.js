import React, { useState } from "react"
import data from "./data"
import List from "./List"

function App() {
  const [people, setPeople] = useState(data)
  const [btnName, setBtnName] = useState("clearAll")
  const [btnText, setBtnText] = useState("Clear All")
  const handleClick = (e) => {
    const btnName = e.target.name
    if (btnName === "clearAll") {
      setPeople([])
    } else if (btnName === "reloadPage") {
      window.location.reload()
    }
    setBtnName("reloadPage")
    setBtnText("Reload Page")
  }

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays Today</h3>
          {people.map((person) => {
            const { name, age, id, image } = person
            return <List key={id} name={name} age={age} image={image} />
          })}
          <button name={btnName} onClick={handleClick}>
            {btnName}
          </button>
        </section>
      </main>
    </>
  )
}

export default App
