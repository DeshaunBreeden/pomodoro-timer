import { useState } from 'react'
import Ptimer from "./Components/PTimer"
import Labels from './Components/Labels';

function App() {
  const [selectedControl, setSectedControl] = useState(0);
  return (
    <>
    <Labels 
    selected={selectedControl}
    handleEvent={(e) => {
      setSectedControl(e);
    }}
    />
    <Ptimer selected={selectedControl} />
    </>
  );
}

export default App
