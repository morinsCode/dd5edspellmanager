

function SpellFilter(props) {

const { selectedClass,selectedSpellLevel, onClassChange, onSpellLevelChange } = props;




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

const spellLevels = [0,1,2,3,4,5,6,7,8,9]

    return (
    <>
   {/*  <h2>{props.title}</h2> */}
    <div>Choose your spell caster class</div>
      {classes.map((cls) => (
    <input
      key={cls}
      type="button"
      value={cls}
      onClick={() => onClassChange(cls)}
    />
  ))}

    

    <label>
        Choose Spell Level
        
    <select
            onChange = {(e) => onSpellLevelChange(e.target.value) }
            value= {selectedSpellLevel}
    >
        {spellLevels.map((lvl) => (
            <option key={lvl}>{lvl}</option>

        ))}


    </select>
    </ label>
    <div>
        Class: { selectedClass }
    </div>

    <div>
        Spell Level: { selectedSpellLevel }
    </div>
    
    </>
    )


}

export default SpellFilter