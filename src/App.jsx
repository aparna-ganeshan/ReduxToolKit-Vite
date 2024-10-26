import { useState } from 'react'


import UsersComp from './FetchApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UsersComp/>
    </>
  )
}

export default App
