import { useState } from 'react';
import './input.css';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Crafts from './Crafts.jsx';
import Info from './Info.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Crafts />
      <Info />
      <Contact />
    </>
  )
}

export default App
