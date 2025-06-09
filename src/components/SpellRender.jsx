import { useState } from "react";

function SpellRender(props) {
  const { spells, loading } = props;
  const [showSpells, setShowSpells] = useState(false); // Local state to toggle visibility

  return (

/*    
    <div>
      <h2>Spell List</h2>

      <button
        onClick={() => setShowSpells(true)}
        disabled={loading}
        >
        Show Spells
      </button>


      <p>Spells available: {spells.length}</p>


      {showSpells && (
          <ul>
          {spells.map((spell) => (
              <li key={spell.index}>{spell.name}</li>

            ))}
        </ul>
      )}
    </div>
 */

<div>
      <h2>Filtered Spells</h2>
      {/* Disable button only if loading is true */}
      <button
        onClick={() => setShowSpells(true)}
        disabled={loading}
      >
        Show Spells
      </button>

      {/* Debug: show current spell count */}
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
              <tr key={spell.index}>
                <td>{spell.name}</td>
                <td>{spell.level}</td>
                <td>{spell.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );



}

export default SpellRender;
