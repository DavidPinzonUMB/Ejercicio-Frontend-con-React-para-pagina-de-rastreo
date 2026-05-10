import { Link } from "react-router-dom"

function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">

      <h1 className="text-6xl font-bold text-green-400 mb-6">
        Sistema de Rastreo
      </h1>

      <p className="text-xl text-gray-300 mb-10">
        Plataforma inteligente para gestión y rastreo de paquetes
      </p>

      <div className="flex gap-6">

        <Link
          to="/rastreo"
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl text-black font-bold"
        >
          Rastrear Paquete
        </Link>

        <Link
          to="/admin"
          className="bg-black border border-green-500 hover:bg-green-500 hover:text-black px-6 py-3 rounded-xl"
        >
          Panel Admin
        </Link>

      </div>

    </div>
  )
}

export default Home