// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import Background from './components/navbar/background'
// import Button from 'react-bootstrap/Button';
import Card from './components/List/buyList'

function App() {
  return (
   <> 
   {/* <button className='btn btn-danger'> click</button>
   <Button variant="primary">Primary</Button> */}

   <Background /> 
   <Card/>
   </>
   
  );
}

export default App;
