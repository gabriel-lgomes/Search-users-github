import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import useFetch from "../hooks/useFetch";
import {PiUsersThree} from "react-icons/pi"
import {AiOutlineHeart, AiOutlineStar} from "react-icons/ai"
import {FaRegBuilding} from "react-icons/fa"
import {CiLocationOn} from "react-icons/ci"
import {TfiEmail} from "react-icons/tfi"
import {SlLink} from "react-icons/sl"
import {FiTwitter} from "react-icons/fi"
import { Link } from "react-router-dom";


function Aside() {
  const {user} = useContext(UserContext);
  const {data, error, loading} = useFetch(`https://api.github.com/users/${user}`);

  return (
    <>
      {data &&  
        <>
          <div className="bg-primary p-5 md:w-4/12 lg:w-4/12 sm:w-12/12">
            <div className="md:p-8 lg:p-8 pb-4">
              <img src={data.avatar_url} className="rounded-md" alt={data.login} />
            </div>
            <div>
              <h2 className="text-primary-grey italic font-light text-[26px]">{data.name}</h2>
              <p className="text-primary-grey italic font-light text-xl">@{data.login}</p>
            </div>
            <div className="py-3">
              <p className="text-slate-400 font-light text-sm">{data.bio}</p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-1">
                  <PiUsersThree className="text-primary-grey text-[22px]" /> <span className="text-primary-grey italic text-sm">{data.followers} followers</span>
              </div>
              <div className="flex items-center gap-1">
                  <AiOutlineHeart className="text-primary-grey text-[22px]" /> <span className="text-primary-grey italic text-sm">{data.following} following</span>
              </div>
              <div className="flex items-center gap-1">
                  <AiOutlineStar className="text-primary-grey text-[22px]" /> <span className="text-primary-grey italic text-sm">{data.public_gists} stars</span>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center gap-2 py-2">
                  <FaRegBuilding className="text-primary-grey text-[22px]" /> <span className="text-primary-grey italic text-lg font-light">{data.company} </span>
              </div>
              <div className="flex items-center gap-2 py-2">
                  <CiLocationOn className="text-primary-grey text-[22px]" /> <span className="text-primary-grey italic text-lg font-light">{data.location} </span>
              </div>
              <div className="flex items-center gap-2 py-2">
                  <TfiEmail className="text-primary-grey text-[22px]" /> <span className="text-primary-grey italic text-lg font-light">{data.email} </span>
              </div>
              <div className="flex items-center gap-2 py-2">
                  <SlLink className="text-primary-grey text-[22px]" /> <span className="text-primary-grey italic text-lg font-light">{data.blog} </span>
              </div>
              <div className="flex items-center gap-2 py-2">
                  <FiTwitter className="text-primary-grey text-[22px]" /> <span className="text-primary-grey italic text-lg font-light">@6abriiel</span>
              </div>
              <div className="py-10 text-center">
                <Link to="/" className="bg-light text-black italic font-light rounded-md px-16 py-3"> Voltar </Link>
              </div>
            </div>
          </div>  
        </>
      } 

      {error && <p className="bg-red-200 p-10 rounded-md text-red">{error}</p>}

      {loading && <p className="p-10 rounded-md text-primary">Carregando...</p>}
    </>

  )
}

export default Aside