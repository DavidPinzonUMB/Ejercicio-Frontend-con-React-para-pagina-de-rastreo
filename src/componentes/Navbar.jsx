import { Link } from "react-router-dom"

function Navbar() {

  return (
    <nav className="bg-black/40 backdrop-blur-md p-4 flex justify-center gap-6 border-b border-green-500">

      <Link
        to="/"
        className="text-green-400 hover:text-white text-lg"
      >
        Inicio
      </Link>

      <Link
        to="/rastreo"
        className="text-green-400 hover:text-white text-lg"
      >
        Rastreo
      </Link>

      <Link
        to="/admin"
        className="text-green-400 hover:text-white text-lg"
      >
        Admin
      </Link>

    </nav>
  )
}

export default Navbar