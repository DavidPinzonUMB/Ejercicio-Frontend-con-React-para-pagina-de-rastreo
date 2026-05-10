import { Link } from "react-router-dom"

import Footer from "../componentes/Footer"

function Home() {

  return (

    <div className="min-h-screen flex flex-col">

      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-6xl font-bold text-green-400 mb-6">

          Sistema de Rastreo

        </h1>

        <p className="text-xl text-gray-300 mb-10">

          Plataforma inteligente para gestión y rastreo de paquetes

        </p>

        <div className="flex gap-6 flex-wrap justify-center">

          <Link
            to="/rastreo"
            className="
              bg-green-500
              hover:bg-green-600
              px-6
              py-3
              rounded-xl
              text-black
              font-bold
              transition
            "
          >

            Rastrear Paquete

          </Link>

          <Link
            to="/admin"
            className="
              bg-black
              border
              border-green-500
              hover:bg-green-500
              hover:text-black
              px-6
              py-3
              rounded-xl
              transition
            "
          >

            Panel Admin

          </Link>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Home