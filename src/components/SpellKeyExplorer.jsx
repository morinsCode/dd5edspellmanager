/*
! Detta är inte min kod, jag använder bara denna koden för att
! identifiera alla möjliga key-value pairs som en spell kunde ha
! eftersom det skilde sig mellan olika spells.
*/

import { useEffect, useState } from "react";

// Build a tree structure from dot-notated paths
function insertIntoTree(tree, path) {
  const [head, ...rest] = path.split(".");
  if (!tree[head]) tree[head] = {};
  if (rest.length > 0) insertIntoTree(tree[head], rest.join("."));
}

// Recursive render of the key tree
function renderTree(tree) {
  return (
    <ul>
      {Object.entries(tree).map(([key, subtree]) => (
        <li key={key}>
          {key}
          {Object.keys(subtree).length > 0 && renderTree(subtree)}
        </li>
      ))}
    </ul>
  );
}

function SpellKeyExplorer() {
  const [keyTree, setKeyTree] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAndBuildTree() {
      try {
        const res = await fetch("https://www.dnd5eapi.co/api/2014/spells");
        const { results } = await res.json();

        const tree = {};

        for (const { url } of results) {
          const spellRes = await fetch(`https://www.dnd5eapi.co${url}`);
          const spell = await spellRes.json();

          collectNestedPaths(spell).forEach((path) =>
            insertIntoTree(tree, path),
          );
        }

        setKeyTree(tree);
      } catch (error) {
        console.error("Failed to build key tree:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAndBuildTree();
  }, []);

  // Collect all dot-paths from nested object
  function collectNestedPaths(obj, prefix = "") {
    const paths = [];
    for (const key in obj) {
      const path = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];
      if (value && typeof value === "object" && !Array.isArray(value)) {
        paths.push(...collectNestedPaths(value, path));
      } else {
        paths.push(path);
      }
    }
    return paths;
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Spell Key Paths (Nested View)</h2>
      {renderTree(keyTree)}
    </div>
  );
}

export default SpellKeyExplorer;
