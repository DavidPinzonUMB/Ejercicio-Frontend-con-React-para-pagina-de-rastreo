function FormularioRastreo({
  guia,
  setGuia,
  buscar,
}) {

  return (

    <div className="bg-black/40 border border-green-500 p-6 rounded-2xl">

      <h2 className="text-3xl text-center text-green-400 mb-6 font-bold">
        Buscar Paquete
      </h2>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">

        <input
          type="text"
          placeholder="Ingrese número de guía"
          value={guia}
          onChange={(e) =>
            setGuia(e.target.value)
          }
          className="
            w-full
            md:w-[500px]
            p-4
            rounded-xl
            bg-black
            text-white
            border
            border-green-500
            outline-none
            focus:ring-2
            focus:ring-green-400
            placeholder:text-gray-400
          "
        />

        <button
          onClick={buscar}
          className="
            bg-green-500
            hover:bg-green-400
            text-black
            font-bold
            px-8
            py-4
            rounded-xl
            transition
          "
        >
          Buscar
        </button>

      </div>

    </div>
  )
}

export default FormularioRastreo