import Navbar from "../componentes/Navbar"
import ParticleBackground from "../componentes/ParticleBackground"

import PaqueteForm from "../componentes/PaqueteForm"
import PaquetesTable from "../componentes/PaquetesTable"
import MapaRepartidores from "../componentes/MapaRepartidores"

import usePackages from "../hooks/usePackages"

function AdminDashboard() {

  const {
    paquetes,
    setPaquetes,
  } = usePackages()

  return (
    <div className="relative min-h-screen overflow-hidden">

      <ParticleBackground />

      <div className="relative z-10">

        <Navbar />

        <div className="p-8 space-y-8">

          <h1 className="text-5xl text-center text-green-400 font-bold">

            Panel Administrativo

          </h1>

          <PaqueteForm
            paquetes={paquetes}
            setPaquetes={setPaquetes}
          />

          <PaquetesTable
            paquetes={paquetes}
            setPaquetes={setPaquetes}
          />

          <MapaRepartidores
            paquetes={paquetes}
          />

        </div>

      </div>

    </div>
  )
}

export default AdminDashboard