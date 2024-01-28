import logo from './logo.svg';
import { useState,useCallback, useEffect,useRef } from 'react';

function App() {
  const[length, setLength] = useState(8);
  const[numberAllowed, setNumberAllowed] = useState(false);
const [charAllowed, setCharAllowed] = useState(false);
const [password, setPassword] = useState("");

const passwordRef = useRef(null);


const passwordGenerator = useCallback(() => 
{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if(numberAllowed)
{
  str+="0123456789";
}
if(charAllowed)
{str+="!@#$%^&*()_+<>?/.,;:[]{}"}


for(let i=0;i<length;i++)
{
  console.log("length",length);
let char=Math.floor(Math.random() * str.length + 1);

pass=str.charAt(char) +pass;}

setPassword(pass);

},[length, numberAllowed, charAllowed,setPassword]);

const copyPasswordToClipboard =useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,4)
window.navigator.clipboard.writeText(password);
},[password]);

useEffect(() => {
  passwordGenerator();
},[length, numberAllowed, charAllowed,passwordGenerator])


  return (
    
      <div className="w-full max-w-md mx-auto shadow-md rounded-md
       px-10 my-12 text-orange-500 text-center bg-gray-800">
<h1 className=" my-4">Password Generator{console.log(password)}</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-0">
<input type ="text" value={password}
className="outline-none w-full py-1 my-5 px-3"
placeholder='password'
ref={passwordRef}
/>

<button onClick={copyPasswordToClipboard} className="bg-blue-700 px-3 my-5 py-1">Copy</button>

        </div>
        <div className="flex text-sm gap-x-2">
<div className="flex items-center gap-x-x1">
<input type="range"
min={6}
max={100}
value={length}
className="cursor-pointer"
onChange={(e)=>{setLength(e.target.value)}}
/>
<label>length:{length}</label>



<input  className="mx-3"type="checkbox"

defaultChecked={numberAllowed}
id="numberAllowed"
onClick={(e)=>{setNumberAllowed((prev)=>!prev)}}
/>
<label>Number</label>
<input className="mx-3"type="checkbox"

defaultChecked={charAllowed}
id="numberAllowed"
onClick={(e)=>{setCharAllowed((prev)=>!prev)}}
/>
<label>Characters</label>



</div>
        </div>
       </div>
    
  );
}

export default App;
