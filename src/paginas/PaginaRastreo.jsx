import { useState } from "react"

import Navbar from "../componentes/Navbar"
import Footer from "../componentes/Footer"

import ParticleBackground from "../componentes/ParticleBackground"

import FormularioRastreo from "../componentes/FormularioRastreo"
import EstadoPaquete from "../componentes/EstadoPaquete"
import MapaRastreo from "../componentes/MapaRastreo"

import usePackages from "../hooks/usePackages"

function PaginaRastreo() {

  const { paquetes } = usePackages()

  const [guia, setGuia] = useState("")
  const [resultado, setResultado] = useState(null)

  const buscar = () => {

    const encontrado = paquetes.find(
      (p) =>
        String(p.guia) === guia
    )

    if (!encontrado) {

      alert("Paquete no encontrado")

      return
    }

    setResultado(encontrado)
  }

  return (

    <div className="relative min-h-screen overflow-hidden flex flex-col">

      <ParticleBackground />

      <div className="relative z-10 flex flex-col flex-1">

        <Navbar />

        <div className="p-8 space-y-8 flex-1">

          <h1 className="text-5xl text-center text-green-400 font-bold">

            Rastreo de Paquetes

          </h1>

          <FormularioRastreo
            guia={guia}
            setGuia={setGuia}
            buscar={buscar}
          />

          {resultado && (
            <>
              <EstadoPaquete
                paquete={resultado}
              />

              <MapaRastreo
                paquete={resultado}
              />
            </>
          )}

        </div>

        <Footer />

      </div>

    </div>
  )
}

export default PaginaRastreo