/* 
# This is the main page where the spell manager component go
# SpellFilter, SpellListRendering, SpellCards
*/
import SpellFilter from "../components/SpellFilter";
/* import SpellRender from "../pages/SpellRender"; */

function SpellManager (props) {
    console.log (props.spellData)


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
{/*     <div>
        { <SpellRender /> }
    </div> */}

    </>
        
  );
}

export default SpellManager