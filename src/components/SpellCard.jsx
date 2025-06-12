import { Container, Row, Col } from "react-bootstrap";


function SpellCard({ spellDetails }) {
  return (
    <>
    <Container>
      {spellDetails && (
        <>
          <Row>
            <Col>
          <h1>{spellDetails?.name}</h1>
          </Col>
          <Col>
          <p>
            <h2>School:</h2> {spellDetails?.school?.name}</p>
            </Col>
          </Row>

          {/* General Info */}
          <p>Spell Level: {spellDetails?.level}</p>
          <p>Casting Time: {spellDetails?.casting_time}</p>
          <p>Range: {spellDetails?.range}</p>
          <p>Duration: {spellDetails?.duration}</p>

          {/* Components */}
          <p>Components: {spellDetails?.components?.join(", ")}</p>
          {spellDetails?.material && (
            <p>Materials: {spellDetails.material}</p>
          )}

          {/* Flags */}
          {spellDetails?.ritual && <p>Ritual</p>}
          {spellDetails?.concentration && <p>Concentration</p>}

          {/* Combat-related */}
          {spellDetails?.attack_type && (
            <p>Attack Type: {spellDetails.attack_type}</p>
          )}
          {spellDetails?.dc?.dc_type?.name && (
            <p>Save: {spellDetails.dc.dc_type.name} ({spellDetails.dc.success_type})</p>
          )}
          {spellDetails?.damage?.damage_type?.name && (
            <p>Damage Type: {spellDetails.damage.damage_type.name}</p>
          )}
          {spellDetails?.damage?.damage_at_slot_level && (
            <>
              <p>Damage by Slot Level:</p>
              <ul>
                {Object.entries(spellDetails.damage.damage_at_slot_level).map(([slot, dmg]) => (
                  <li key={slot}>Level {slot}: {dmg}</li>
                ))}
              </ul>
            </>
          )}
          {spellDetails?.damage?.damage_at_character_level && (
            <>
              <p>Damage by Character Level:</p>
              <ul>
                {Object.entries(spellDetails.damage.damage_at_character_level).map(([lvl, dmg]) => (
                  <li key={lvl}>Level {lvl}: {dmg}</li>
                ))}
              </ul>
            </>
          )}

          {spellDetails?.heal_at_slot_level && (
            <>
              <p>Healing by Slot Level:</p>
              <ul>
                {Object.entries(spellDetails.heal_at_slot_level).map(([slot, heal]) => (
                  <li key={slot}>Level {slot}: {heal}</li>
                ))}
              </ul>
            </>
          )}

          {/* Area of Effect */}
          {spellDetails?.area_of_effect && (
            <p>
              Area: {spellDetails.area_of_effect.size} ft {spellDetails.area_of_effect.type}
            </p>
          )}

          {/* Classes */}
          <p>
            Classes: {spellDetails?.classes?.map(c => c.name).join(", ")}
          </p>
          {spellDetails?.subclasses?.length > 0 && (
            <p>
              Subclasses: {spellDetails.subclasses.map(s => s.name).join(", ")}
            </p>
          )}

          {/* Descriptions */}
          <p>{spellDetails?.desc?.join(" ")}</p>
          {spellDetails?.higher_level?.[0] && (
            <p>At higher levels: {spellDetails.higher_level.join(" ")}</p>
          )}
        </>
      )}
      </Container>
    </>
  );
}

export default SpellCard;

