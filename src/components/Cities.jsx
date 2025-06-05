import { useState } from "react"


function App() {
  const [cities, setCities] = useState([])
  const [showButton, setShowButton] = useState (true)

  function handleClick() {
    fetch("https://avancera.app/cities/")
      .then((response) => response.json())
      .then((json) => {
          console.log(json[1].name);        
          console.log(JSON.stringify(json));
  
        setCities(json)      
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
    value="Hämta städer"
    />
    ) : (
<dl>
  {cities.map(city => ([
    <dt key={city.id + "-dt"}>{city.name}</dt>,
    <dd key={city.id + "-dd"}>{city.population}</dd>
  ]))}
</dl>


    )}
    </>
  )
}

export default App
