import React from 'react'
// import { AppContext } from './context'
import { useGlobalContext } from './context';
const Home = () => {
  // const name = useContext(AppContext);
  const name = useGlobalContext();
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
