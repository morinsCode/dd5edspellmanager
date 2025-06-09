/* 
# This is the main page where the spell manager component go
# SpellFilter, SpellListRendering, SpellCards
*/
import { useState } from "react";
import SpellFilter from "../components/SpellFilter";
import SpellRender from "../components/SpellRender";


function SpellManager (props) {
    console.log (props.spellData)
    const [selectedClass, setSelectedClass] = useState("");
    const [selectedSpellLevel, setSelectedSpellLevel] = useState(1);

  // Get spells for the selected class from the full dataset
  const spellsForClass =
    selectedClass && props.spellData[selectedClass]?.results
      ? props.spellData[selectedClass].results
      : [];


  // Filter the class-specific spells up to and including the selected level
  const filteredSpells = spellsForClass.filter(
    (spell) => spell.level <= Number(selectedSpellLevel) // Include spells up to selected level
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


    </>
        
  );
}

export default SpellManager