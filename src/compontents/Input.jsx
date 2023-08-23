import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function Input() {

  const [input, setInput] = useState('');
  const [valueInput, setValueInput] = useState('');

  const handleClick = (e) => {
    e.preventDefault(); 
    setInput(valueInput);
    
  }

  console.log(valueInput);
  console.log(input);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="grid items-center justify-center">
        <h1 className="text-4xl italic text-primary font-light text-center">Search Devs</h1>
        <div className="flex items-center w-[400px] text-center my-3">
          <input 
            type="text" 
            id="first_name" 
            className="bg-white border border-primary px-4 py-3 rounded-l-md block w-full h-[50px] font-light" placeholder="Digite o usuário:" 
            required 
            value={valueInput} 
            onChange={(e) => setValueInput(e.target.value)} 
          />
          <button className="flex items-center gap-2 bg-primary rounded-r-md px-2 py-2 h-[50px] w-[120px] text-slate-400 font-light"><AiOutlineSearch className="text-xl" onClick={handleClick} /> Buscar</button> 
        </div>
      </div>
    </div>
  )
}

export default Input