// src/App.jsx
import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SpellManager from "./pages/SpellManager";
import { useEffect, useState } from 'react';

function App() {
  const [spellDataByClass, setSpellDataByClass] = useState({});
  const [loading, setLoading ] = useState (true);

  const classEndpoints = {
    Bard: 'https://www.dnd5eapi.co/api/2014/classes/bard/spells',
    Cleric: 'https://www.dnd5eapi.co/api/2014/classes/cleric/spells',
    Druid: 'https://www.dnd5eapi.co/api/2014/classes/druid/spells',
    Paladin: 'https://www.dnd5eapi.co/api/2014/classes/paladin/spells',
    Ranger: 'https://www.dnd5eapi.co/api/2014/classes/ranger/spells',
    Sorcerer: 'https://www.dnd5eapi.co/api/2014/classes/sorcerer/spells',
    Warlock: 'https://www.dnd5eapi.co/api/2014/classes/warlock/spells',
    Wizard: 'https://www.dnd5eapi.co/api/2014/classes/wizard/spells',
  };

  useEffect(() => {
    function fetchAllClasses() {
      const entries = Object.entries(classEndpoints);
      const fetchPromises = entries.map(([className, url]) => {
        return fetch(url)
          .then((res) => {
            if (!res.ok) {
              return { className, data: null };
            }
            return res.json().then((data) => ({ className, data }));
          })
          .catch(() => ({ className, data: null }));
      });

      Promise.all(fetchPromises).then((results) => {
        const dataByClass = {};
        results.forEach(({ className, data }) => {
          if (data) {
            dataByClass[className] = data;
          }
        });
        console.log('Fetched spell data for all classes:', dataByClass);
        setSpellDataByClass(dataByClass);
        setLoading(false);
      });
    }

    fetchAllClasses();
  }, []); 
  
  




  const router = createHashRouter([
    {
      path: '/',
      element: <HomePage />
    },
    { 
      path: "spellmanager", 
      element : <SpellManager spellData = {spellDataByClass} />
    }
  ]);



  return <RouterProvider router={router} />;
}

export default App;
