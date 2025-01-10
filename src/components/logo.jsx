import { Link } from "react-router-dom"
const Logo = () => {
  return (
    <div className="logo">
        <Link to="/">
            <img src="./logo.png" alt="" className="w-20" />
        </Link>
    </div>
  )
}

export default Logo