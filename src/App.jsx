import React from 'react'
import { Data } from './Data';
import Cards from './components/Cards/Cards';

const App = () => {
  
  return (
    <>
      {Data.map((e, i) => (
        
        <Cards key={e.id} title={e.title} price={e.price} description={e.description} image={e.image} rating={e.rating.rate} count={e.rating.count} />        
      ))}
      
     
      
    </>
  )
}

export default App