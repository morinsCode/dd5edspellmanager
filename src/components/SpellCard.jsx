function SpellCard({ spellDetails }) {
  return (
    <>
      <h1>Spell Card</h1>
      <h2>
        {spellDetails?.name || "Select a spell to see details"}         
      </h2>
      <p>Spell Level: {spellDetails?.level}</p>

        {spellDetails?.damage?.damage_type?.name && (
      <p>Damage: {spellDetails?.damage?.damage_type.name} </p>
    )}

      <p>Casting Time: {spellDetails?.casting_time}</p>
      <p>Range: {spellDetails?.range}</p>
      <p>Components: {spellDetails?.components?.join(" ")}</p>

        {spellDetails?.concentration && (
            <p>Concentration</p>
        )}

                {spellDetails?.ritual && (
            <p>Ritual</p>
        )}

      <p>School: {spellDetails?.school.name}</p>
      <p>{spellDetails?.desc}</p>

      {spellDetails?.higher_level[0] && (
        <p>At higher levels: {spellDetails?.higher_level}</p>
      )}
      
    </>
  );
}


export default SpellCard