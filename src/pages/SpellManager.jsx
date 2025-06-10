/* 
# This is the main page where the spell manager component go
# SpellFilter, SpellListRendering, SpellCards
*/
import { useState } from "react";
import SpellFilter from "../components/SpellFilter";
import SpellRender from "../components/SpellRender";
import SpellCard from "../components/SpellCard";


function SpellManager (props) {
    console.log (props.spellDataByClass)
    const [selectedClass, setSelectedClass] = useState("");
    const [selectedSpellLevel, setSelectedSpellLevel] = useState(1);
    const [selectedSpellUrl, setSelectedSpellUrl] = useState(null);
    const [spellDetails, setSpellDetails] = useState(null)

  /* 
  # spells for the selected class from the full dataset
  # teranary expression used in variabel declaration, could be done with if or function
    # checks if selectedClass is truthy
    # ?. optional chaining https://www.geeksforgeeks.org/javascript/javascript-optional-chaining/

  */
  const spellsForClass =
    selectedClass && props.spellDataByClass[selectedClass]?.results
      ? props.spellDataByClass[selectedClass].results
      : [];


  //  up to and including the selected level
  const filteredSpells = spellsForClass.filter(
    (spell) => spell.level <= Number(selectedSpellLevel) //  spells up to selected level
  );


function handleSpellClick(url) {
  setSelectedSpellUrl(url);
  fetch(url)
    .then(r => r.json())
    .then(data => {
      setSpellDetails(data);
      console.log(data);        // ← logs the fetched object immediately
    });
}



  return (
    <>
    <div>
        <h1>
        Spellbook
        </h1>
    </div>
    <div>
        
        <SpellFilter
     /*      title={"Select your options"} */
          selectedClass={selectedClass}
          selectedSpellLevel={selectedSpellLevel}
          onClassChange={setSelectedClass}
          onSpellLevelChange={setSelectedSpellLevel}
        />
        
    </div>
        <SpellRender 
          spells={filteredSpells} 
          onSpellClick={handleSpellClick} 
          loading={props.loading} />
        <SpellCard 
        spellDetails={spellDetails}
         />


    </>
        
  );
}

export default SpellManager