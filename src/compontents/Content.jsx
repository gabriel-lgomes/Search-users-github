import { useContext } from "react"
import useFetch from "../hooks/useFetch"
import { UserContext } from "../context/UserContext";
import { AiOutlineStar } from "react-icons/ai";

function Content() {

  const {user} = useContext(UserContext);
  const {data, error, loading} = useFetch(`https://api.github.com/users/${user}/repos`);

  const formatData = (value) => {

    const dataISO = value;

    const data = new Date(dataISO);

    const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
    const dataFormatada = data.toLocaleString('pt-BR', options);

    return dataFormatada;

  }

  return (
    <div className="bg-white md:w-7/12 lg:w-7/12 sm:w-12/12 md:p-12 lg:p-12 py-6 md:overflow-y-auto lg:md:overflow-y-auto md:h-screen lg:h-screen">
      { data && 
        data.map((item) => (
          <div key={item.id} className="mb-3">
            <p className="text-[22px] italic text-primary font-thin capitalize">{item.name}</p>
            <p className="text-primary font-light text-[14px]">
              {item.description === null ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui justo, semper nec porta ac, vehicula id lacus. Phasellus porta dolor a urna tempus, et pulvinar sem accumsan." : item.description}  
            </p> 
            <div className="flex gap-2">
              <div className="flex items-center gap-1">
                  <AiOutlineStar className="text-slate-400 text-[22px]" /> <span className="text-slate-400  italic text-md font-light">{item.stargazers_count} stars</span>
              </div> 
              <div className="flex items-center gap-1">
                  <span className="text-[22px]  text-slate-400">•</span> <span className="text-slate-400 italic text-md font-light">Update {formatData(item.updated_at)}</span>
              </div> 
            </div>
            <hr className="my-3" />
          </div>
        ))
      }

      {error && <p className="bg-red-200 p-10 rounded-md text-red">{error}</p>}

      {loading && <p className="p-10 rounded-md text-primary">Carregando...</p>}

    </div>
  )
}

export default Content