import {useState}  from 'react';
import './App.css';
import ToggleDarkMode from './components/ToggleDarkMode.jsx';
import Navbar from 'react-bootstrap/Navbar';


function App() {
	const [mode, changeMode] = useState("light");
console.log(mode)
  function toggle() {
    if(mode == "light"){
      // console.log("====", document.body.style.backgroundColor )
      document.body.style.backgroundColor = '#1a1919';
      changeMode("dark")
    }
    if(mode == "dark"){
      // console.log("====1", document.body.style.backgroundColor )
      // // return document.body.classList.add("dark")
      document.body.style.backgroundColor = '#FFFFFF';
      changeMode("light")
    }
  }

  return (
    
    <div >
    	<Navbar collapseOnSelect expand="lg" bg="primary" variant="primary">
		  	<Navbar.Brand> Anoop </Navbar.Brand>
		  <button className="btn btn-primary" onClick={()=> toggle() } > Toggle </button>
		</Navbar>
      <ToggleDarkMode />
    </div>
  );
}

export default App;
