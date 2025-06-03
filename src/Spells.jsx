import { useState } from "react"


function App() {
  const [spells, setSpells] = useState({})
  const [showButton, setShowButton] = useState (true)

  function handleClick() {
    fetch("https://www.dnd5eapi.co/api/2014/spells")
      .then((response) => response.json())
      .then((json) => {
          console.log(json.results[1].name);
       
          console.log(json.results);
  
        setSpells(json)      
        setShowButton(false)    
      })
      .catch((err) => {
        console.error("Fetch failed:", err)
      })
  }



  return (
    <>
    {showButton ? (
    <input 
    onClick = {handleClick}
    type="button" 
    value="Get all spells"
    />
    ) : (
<ul>
    {spells.results?.map(spell => (
        <li key= {spell.index} >
            {spell.name}
        </li>
    ))}
</ul>


    )}
    </>
  )
}

export default App
