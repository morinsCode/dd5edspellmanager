/* 
# This is the main page where the spell manager component go
# SpellFilter, SpellListRendering, SpellCards
*/
import SpellFilter from "../components/SpellFilter";

function SpellManager () {


  return (
    <>
    <div>
        <h1>
        Spellbook
        </h1>
    </div>
    <div>
        
        { <SpellFilter />}
        
    </div>
    </>
        
  );
}

export default SpellManager