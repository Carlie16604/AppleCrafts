import { useState } from 'react';
import './input.css';
import NavBar from './Components/NavBar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className='container'>
        <p className='flex justify-center color-blue'>test</p>
      </div>
    </>
  )
}

export default App
