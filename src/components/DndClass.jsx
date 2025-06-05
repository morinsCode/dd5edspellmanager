import { useState } from "react";

function dndClass() {
   /*  const [dndClass, setDndClass] = useState({}) */

   /* todo: useEffect for all APIs 
      todo: render spells depending on class&level


   */



    return (
    <>
    <div>Spells by class</div>
    <input type="button" value="Barbarian"/>
{/*     <select name="Class">
        <option value="Barbarian">Barbarian</option>
        <option value="Bard">Bard</option>
        <option value="Cleric">Cleric</option>
        <option value="Druid">Druid</option>
        <option value="Fighter">Fighter</option>
        <option value="Monk">Monk</option>
        <option value="Paladin">Paladin</option>
        <option value="Ranger">Ranger</option>
        <option value="Rogue">Rogue</option>
        <option value="Sorcerer">Sorcerer</option>
        <option value="Warlock">Warlock</option>
        <option value="Wizard">Wizard</option>
</select> */}
    <div>Choose Spell Level</div>
    <select name="Level">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
    </select>
    
    </>
    )
        
    

}

export default dndClass