import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
function App(){
  const  [alertVisible,setAlertVisiblility] =useState(false);
  return (
    <div >
      {alertVisible&&<Alert onClose={()=>setAlertVisiblility(false)}>My Alert</Alert>}
      <Button color="primary" onClick={()=>setAlertVisiblility(true)}>My Button</Button>
    </div>
  )
}
export default App;