import React from 'react';
import {add,sub,mult,div} from "./Calculator";

function App(){
    return(
        <>
  <ul>
    <li>Sum  of two no. is{add(40,4)}</li>
    <li>Sub  of two no. is{sub(40,4)}</li>
    <li>Mult of two no. is{mult(40,4)}</li>
    <li>Div  of two no. is{div(40,3)}</li>
  </ul>
  </>
 );
}

export default App;