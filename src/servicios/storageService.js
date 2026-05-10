const KEY = "paquetes"

export const obtenerPaquetes = () => {

  const data = localStorage.getItem(KEY)

  return data ? JSON.parse(data) : []
}

export const guardarPaquetes = (paquetes) => {

  localStorage.setItem(
    KEY,
    JSON.stringify(paquetes)
  )
}