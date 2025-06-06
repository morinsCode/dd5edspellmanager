// src/App.jsx
import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SpellManager from "./pages/SpellManager";

function App() {

  


  const router = createHashRouter([
    {
      path: '/',
      element: <HomePage />
    },
    { 
      path: "spellmanager", element : <SpellManager />
    }
  ]);



  return <RouterProvider router={router} />;
}

export default App;
