import './App.css';
import { useEffect, useState, useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import Worlde from './components/Worlde';
import Navbar from './components/Navbar'
import SwitchTheme from './components/SwitchTheme';

function App() {
  const [solution,setSolution] = useState(null)
  
  const port = process.env.PORT || 8000 

  useEffect(() => {
    fetch(`http://localhost:${port}/solutions`)
    .then(res => res.json())
    .then(json => {
      // random number btw 0 and 14
      const ranSoln = json[Math.floor(Math.random() * json.length)]
      setSolution(ranSoln.word)
    })
  }, [setSolution])

  const { dark } = useContext(ThemeContext);
  return (
    <>
    <div className='header'>
    <div className='switch-div'>
                <SwitchTheme />
                <button>{!dark ? 'Light theme' : 'Dark Theme'}</button>
    </div>
      <Navbar />
    </div>
      <div style={{textAlign: 'center'}} className="App">
      {solution && <Worlde solution={solution}/>}
    </div>

    <div>Made with Love ❤❤ By Ayo Aduwo</div>
    </>

  );
}

export default App;
