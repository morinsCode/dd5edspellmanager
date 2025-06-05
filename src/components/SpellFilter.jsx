import { useState } from "react"

function SpellFilter() {

const [chosenClass, setChosenClass] = useState ("smurf class");
const [chosenSpellLevel, setChosenSpellLevel] = useState ("smurf level")

function handleClick(classButton) {
    setChosenClass(classButton);
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
  ))};

    

    <label>
        Choose Spell Level
        
    <select
            onChange = {(e) => setChosenSpellLevel(e.target.value) }
            value= {chosenSpellLevel}
    >
        <option>1</option>
        <option>2</option>
        <option>3</option>

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