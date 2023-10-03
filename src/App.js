import { useState } from 'react';
import ColorSearch from "./ColorSearch";
import Typebox from "./Typebox";

function App() {
  const [colorValue,setColorValue]=useState('')
  return (
    <div>
   <ColorSearch 
   colorValue={colorValue}
   />
   <Typebox
 colorValue={colorValue}
 setColorValue={setColorValue}
   />
  </div>
  );
}

export default App;
