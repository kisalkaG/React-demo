import React from "react"
import './style.css'
import Header from "./components/Header"
import Boxes from "./components/Boxes"
import Form from "./components/Form"
import Form2 from "./components/Form2"
import Star from "./components/Star"

export default function App() {
  const [squares, setSquares] = React.useState(Boxes)

  function toggle(id) {
    setSquares(prevSquares => {
      // const newSquare = []
      // for (let i = 0; i < prevSquares.length; i++) {
      //   const currentSquare = prevSquares[i]
      //   if (currentSquare.id === id) {
      //     const upadatedSquare = {
      //       ...currentSquare,
      //       on: !currentSquare.on
      //     }
      //     newSquare.push(upadatedSquare)

      //   } else {
      //     newSquare.push(currentSquare)
      //   }
      // }
      // return newSquare

      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })

    }

    )
  }

  const squareElements = squares.map(square => (
    <Header key={square.id} id={square.id} on={square.on} toggle={toggle} />
  ))



  return (
    <div>
      {squareElements}
      <br />
      <br />
      <br />

      <Form />

      <br />
      <br />
      <br />
      <br />
      <br />

      <Form2 />

      <br />
      <br />
      <br />
      <br />
      <br />

      <Star />

    </div>

  )
}

