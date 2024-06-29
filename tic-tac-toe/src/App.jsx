import { useState } from 'react'
import './App.css'

function App() {

  const[boardData, setBoardData] = useState ([null,null,null,null,null,null,null,null,null]);

  function Tile({index,tile}){
    return(
      <div className='Tile'>
        {index}
      </div>
    )
  }

  function Board(){
    return(
     <div className='Board'> 
    {
     boardData.map((tile,index) => {
      return <Tile key={index} index={index} tile={tile}/> 
     })
    }
    </div>
    )
  }

  return (
    <>
      <Board/>
    </>
  )
}

export default App
