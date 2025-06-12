import { useState } from "react";
import SpellFilter from "../components/SpellFilter";
import SpellRender from "../components/SpellRender";
import SpellCard from "../components/SpellCard";
import "./SpellManager.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SpellManager(props) {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSpellLevel, setSelectedSpellLevel] = useState(1);
  const [selectedSpellUrl, setSelectedSpellUrl] = useState(null);
  const [spellDetails, setSpellDetails] = useState(null);

  const spellsForClass =
    selectedClass && props.spellDataByClass[selectedClass]?.results
      ? props.spellDataByClass[selectedClass].results
      : [];

  const filteredSpells = spellsForClass.filter(
    (spell) => spell.level <= Number(selectedSpellLevel),
  );

  function handleSpellClick(url) {
    setSelectedSpellUrl(url);
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setSpellDetails(data);
        console.log(data);
      });
  }

  return (
    <Container fluid="md">
      <h1>Spellbook</h1>

      <Row>
        <Col className="left-panel">
          <div className="spell-filter">
            <SpellFilter
              selectedClass={selectedClass}
              selectedSpellLevel={selectedSpellLevel}
              onClassChange={setSelectedClass}
              onSpellLevelChange={setSelectedSpellLevel}
            />
          </div>
          <div className="spell-render">
            <SpellRender
              spells={filteredSpells}
              onSpellClick={handleSpellClick}
              loading={props.loading}
            />
          </div>
        </Col>

        <Col>
          <div className="sticky-card">
            <SpellCard spellDetails={spellDetails} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SpellManager;
