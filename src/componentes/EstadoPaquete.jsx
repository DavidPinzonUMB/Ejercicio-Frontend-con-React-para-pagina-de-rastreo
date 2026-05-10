function EstadoPaquete({ paquete }) {

  const colores = {
    Pendiente: "text-yellow-400",
    "En ruta": "text-blue-400",
    Entregado: "text-green-400",
    Retrasado: "text-red-400",
  }

  return (

    <div className="bg-black/40 border border-green-500 p-6 rounded-2xl">

      <h2 className="text-3xl text-center text-green-400 mb-6 font-bold">
        Información del Paquete
      </h2>

      <div className="space-y-4 text-center text-xl">

        <p>
          <span className="text-green-400 font-bold">
            Número de guía:
          </span>

          {" "}
          {paquete.guia}
        </p>

        <p>
          <span className="text-green-400 font-bold">
            Remitente:
          </span>

          {" "}
          {paquete.remitente}
        </p>

        <p>
          <span className="text-green-400 font-bold">
            Destinatario:
          </span>

          {" "}
          {paquete.destinatario}
        </p>

        <p className={colores[paquete.estado]}>
          <span className="font-bold">
            Estado:
          </span>

          {" "}
          {paquete.estado}
        </p>

      </div>

    </div>
  )
}

export default EstadoPaquete