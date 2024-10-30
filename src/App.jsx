import { useState } from 'react';
import './input.css';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Crafts from './Crafts.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Crafts />
      <Contact />
    </>
  )
}

export default App
