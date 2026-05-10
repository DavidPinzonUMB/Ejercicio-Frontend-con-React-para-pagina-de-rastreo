import { useEffect, useState } from "react"

import {
  obtenerPaquetes,
  guardarPaquetes,
} from "../servicios/storageService"

function usePackages() {

  const [paquetes, setPaquetes] = useState(
    obtenerPaquetes()
  )

  useEffect(() => {

    guardarPaquetes(paquetes)

  }, [paquetes])

  return {
    paquetes,
    setPaquetes,
  }
}

export default usePackages