import { useContext, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {  useNavigate } from 'react-router-dom'; 
import { UserContext } from '../context/UserContext';

function Input() {

  const [input, setInput] = useState(""); 
  const {setUser} = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = (e) => { 

    e.preventDefault(); 
     
    setUser(input);
    setInput("");
 
    navigate("/profile");

  }
 
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="grid items-center justify-center">
        <h1 className="text-4xl italic text-primary font-light text-center">Search Devs</h1>
        <form className="flex items-center w-[400px] text-center my-3">
          <input 
            type="text" 
            id="first_name" 
            className="bg-white border border-primary px-4 py-3 rounded-l-md block w-full h-[50px] font-light" placeholder="Digite o usuário:" 
            required 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
          />
          <button type="button" className="flex items-center gap-2 bg-primary rounded-r-md px-2 py-2 h-[50px] w-[120px] text-slate-400 font-light"><AiOutlineSearch className="text-xl" onClick={handleClick}/> Buscar</button> 
        </form>
      </div> 

    </div>
  )
}

export default Input