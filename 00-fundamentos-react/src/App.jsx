import img1 from './assets/img1.jpg' // Esto lo hace vite por nosotros
import MyButton from './components/MyButton'
import WelcomeText from './components/WelcomeText'
import ListFruits from './components/fruits/ListFruits'
import ButtonState from './components/ButtonState'

const App = () => {
  const title = 'Mi titulo desde una constante'
  const classTitle = 'text-center'
  const user = true
  const fruits = ['apple', 'banana', 'cherry']


  return (
    <>
      <ButtonState></ButtonState>
      <h1 className={classTitle}>{title.toUpperCase()}</h1>
      <img src={img1} alt={`imagen-${title}`} />
      <MyButton text="boton 1"></MyButton>
      <MyButton text="boton 2"></MyButton>
      <MyButton text="boton 3"></MyButton>
      <WelcomeText user={user}></WelcomeText>
      <ListFruits fruits={fruits}></ListFruits>
     
    </>
  )
}

export default App
