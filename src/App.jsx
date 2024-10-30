import { useState } from 'react';
import './input.css';
import Home from './Home.jsx';
import About from './About.jsx';
import Crafts from './Crafts.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <About />
      <Crafts />
    </>
  )
}

export default App
