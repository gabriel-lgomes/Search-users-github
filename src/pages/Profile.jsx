import Aside from "../compontents/Aside"
import Content from "../compontents/Content"

function Profile() {
  return (
     <div className="md:flex lg:flex sm:block">
      <Aside />
      <Content />
     </div>
  )
}

export default Profile