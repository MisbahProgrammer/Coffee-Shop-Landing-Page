import { useState } from 'react'
import './App.css'
import Header from './Components/header'
import Main from './Components/Main'
import Menu from './Components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
      <Menu/>
    </>
  )
}

export default App
