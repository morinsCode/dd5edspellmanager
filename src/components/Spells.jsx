import { useState } from "react"


function App() {
  const [spells, setSpells] = useState({})


  function handleClick() {
    fetch("https://www.dnd5eapi.co/api/2014/spells")
      .then((response) => response.json())
      .then((data) => {
       
          console.log(data.results);
          console.log(data.count)
          console.log(data.results[0].url)
  
        setSpells(data)      
  
      })
      .catch((err) => {
        console.error("Fetch failed:", err)
      })
  }



  return (
    <>
    
    <input 
    onClick = {handleClick}
    type="button" 
    value="Get all spells"
    />
  
<ol>
    {spells.results?.map(spell => (
        <li key= {spell.index} >
            {spell.name}
        </li>
    ))}
</ol>


    
    </>
  )
}

export default App
