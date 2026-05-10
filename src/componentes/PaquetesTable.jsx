function PaquetesTable({ paquetes, setPaquetes }) {

  const cambiarEstado = (index, estado) => {

    const copia = [...paquetes]

    copia[index].estado = estado

    setPaquetes(copia)
  }

  return (
    <div className="bg-black/40 border border-green-500 p-6 rounded-2xl overflow-auto">

      <h2 className="text-3xl text-center text-green-400 mb-6">
        Lista de Paquetes
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-green-400">

            <th>Guía</th>
            <th>Remitente</th>
            <th>Destinatario</th>
            <th>Estado</th>
            <th>Acción</th>

          </tr>

        </thead>

        <tbody>

          {paquetes.map((p, index) => (

            <tr key={index} className="text-center border-t border-green-900">

              <td>{p.guia}</td>
              <td>{p.remitente}</td>
              <td>{p.destinatario}</td>
              <td>{p.estado}</td>

              <td>

                <select
                  value={p.estado}
                  onChange={(e) =>
                    cambiarEstado(
                      index,
                      e.target.value
                    )
                  }
                  className="bg-black border border-green-500 rounded p-2"
                >

                  <option>Pendiente</option>
                  <option>En ruta</option>
                  <option>Entregado</option>
                  <option>Retrasado</option>

                </select>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}

export default PaquetesTable