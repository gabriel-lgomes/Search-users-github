import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Profile() {

  const {user} = useContext(UserContext)
 

  return (
    <div>{user}</div>
  )
}

export default Profile