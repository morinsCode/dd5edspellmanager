import { useState } from "react";

function SpellRender(props) {
  const { spells, loading } = props;
  const [showSpells, setShowSpells] = useState(false); 

  return (



<div>

     <button onClick={() => setShowSpells(true)}>
  {props.loading ? "Loading…" : "Summon Spells"}
</button>
 

      {/* Debug */}
      {props.spells.length > 0
  ? <table>{/* render spells */}</table>
  : <p>No spells available at this level.</p>
}


      <p>Spells available: {spells.length}</p>


      {showSpells && spells.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Level</th>

            </tr>
          </thead>
          <tbody>
            {spells.map((spell) => (
              <tr 
              key={spell.index}
              onClick={() => props.onSpellClick(`https://www.dnd5eapi.co${spell.url}`)}
              >
                <td>{spell.name}</td>
                <td>{spell.level}</td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );



}

export default SpellRender;
