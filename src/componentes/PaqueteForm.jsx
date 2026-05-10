import { useState } from "react"

function PaqueteForm({ paquetes, setPaquetes }) {

  const [form, setForm] = useState({
    remitente: "",
    destinatario: "",
    dimensiones: "",
  })

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if (
      !form.remitente ||
      !form.destinatario ||
      !form.dimensiones
    ) {
      alert("Completa todos los campos")
      return
    }

    const nuevoPaquete = {
      guia: Date.now(),
      ...form,
      estado: "Pendiente",
      posicion: [
        4.6097 + Math.random() * 0.1,
        -74.0817 + Math.random() * 0.1,
      ],
    }

    setPaquetes([
      ...paquetes,
      nuevoPaquete,
    ])

    setForm({
      remitente: "",
      destinatario: "",
      dimensiones: "",
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black/40 border border-green-500 p-6 rounded-2xl"
    >

      <h2 className="text-3xl text-center text-green-400 mb-6">
        Registrar Paquete
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <input
          type="text"
          name="remitente"
          placeholder="Remitente"
          value={form.remitente}
          onChange={handleChange}
          className="p-3 rounded bg-black border border-green-500"
        />

        <input
          type="text"
          name="destinatario"
          placeholder="Destinatario"
          value={form.destinatario}
          onChange={handleChange}
          className="p-3 rounded bg-black border border-green-500"
        />

        <input
          type="text"
          name="dimensiones"
          placeholder="Dimensiones"
          value={form.dimensiones}
          onChange={handleChange}
          className="p-3 rounded bg-black border border-green-500"
        />

      </div>

      <div className="flex justify-center mt-6">

        <button className="bg-green-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-green-400">
          Registrar
        </button>

      </div>

    </form>
  )
}

export default PaqueteForm