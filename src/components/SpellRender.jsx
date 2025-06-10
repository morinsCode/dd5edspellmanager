import { useState } from "react";

function SpellRender(props) {
  const { spells, loading } = props;
  const [showSpells, setShowSpells] = useState(false); // Local state to toggle visibility

  return (



<div>

     <button onClick={() => setShowSpells(true)}>
  {props.loading ? "Loading…" : "Summon Spells"}
</button>
 

      {/* Debug: show current spell count */}
      {props.spells.length > 0
  ? <table>{/* render spells */}</table>
  : <p>No spells available at this level.</p>
}

      <p>Spells available: {spells.length}</p>

      {/* Show spells in a table after button click */}
      {showSpells && spells.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Level</th>
              <th>Url</th>
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
               {/*  <td>{spell.url}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );



}

export default SpellRender;
