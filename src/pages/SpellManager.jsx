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



  return (
    <>
    <div>
        <h1>
        Spellbook
        </h1>
    </div>
    <div>
        
        <SpellFilter
          selectedClass={selectedClass}
          selectedSpellLevel={selectedSpellLevel}
          onClassChange={setSelectedClass}
          onSpellLevelChange={setSelectedSpellLevel}
        />
        
    </div>
        <SpellRender spells={filteredSpells} loading={props.loading} />
        <SpellCard />


    </>
        
  );
}

export default SpellManager