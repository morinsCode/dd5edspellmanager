import { useState } from "react"

function SpellFilter() {

const [chosenClass, setChosenClass] = useState ("smurf class");
const [chosenSpellLevel, setChosenSpellLevel] = useState ("smurf level")

const [selectedClassAndSpellLevel, setSelectedClassAndSpellLevel] = useState ({
    selectedClass: null,
    selectedLevel: null
})

function handleClick(classButton) {
    setChosenClass(classButton);
    setSelectedClassAndSpellLevel.selectedClass(classButton);
}

const classes = [
  "Bard",
  "Cleric",
  "Druid",
  "Paladin",
  "Ranger",
  "Sorcerer",
  "Warlock",
  "Wizard",
];

const spellLvl = [1,2,3,4,5,6,7,8,9]

    return (
    <>
    <div>Choose your spell caster class</div>
      {classes.map((cls) => (
    <input
      key={cls}
      type="button"
      value={cls}
      onClick={() => handleClick(cls)}
    />
  ))}

    

    <label>
        Choose Spell Level
        
    <select
            onChange = {(e) => setChosenSpellLevel(e.target.value) }
            value= {chosenSpellLevel}
    >
        {spellLvl.map((spl) => (
            <option>{spl}</option>

        ))}


    </select>
    </ label>
    <div>
        Class: { chosenClass }
    </div>

    <div>
        Spell Level: { chosenSpellLevel }
    </div>
    
    </>
    )


}

export default SpellFilter