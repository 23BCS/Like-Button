import { useState } from 'react'
import LikeButton from './components/LikeButton'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
       <LikeButton/>
    </>
  )
}

export default App
