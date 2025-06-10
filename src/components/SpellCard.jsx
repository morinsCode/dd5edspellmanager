function SpellCard({ spellDetails }) {
  return (
    <>
      <h1>Spell Card</h1>
      <h2>{spellDetails?.name || "Select a spell to see details"}
            
      </h2>
      <p>{spellDetails?.desc}</p>
    </>
  );
}


export default SpellCard