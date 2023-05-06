import React, { useContext } from 'react'
import { AppContext } from './context'
const Home = () => {
  const name = useContext(AppContext);
  return (
    <>
      <div>
        My HomePage
      </div>

      <p>
        {name}
      </p>
    </>  
  )
}

export default Home
