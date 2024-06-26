const MyButton = ({ text }) => {
  const handleClickButton = (title) => {
    console.log('Click en el ' + title)
  }

  return <button onClick={() => handleClickButton(text)}>{text}</button>
}

export default MyButton