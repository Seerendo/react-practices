import { useState } from 'react'

const ButtonState = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    let newCount = count
    newCount = newCount + 1
    setCount(newCount)
    console.log(count)
  }

  return <button onClick={handleClick}>buttonState: {count}</button>
}

export default ButtonState
