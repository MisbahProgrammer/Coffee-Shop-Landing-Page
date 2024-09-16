import { useState } from 'react'
import './App.css'
import Header from './Components/header'
import Main from './Components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}

export default App
