import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet"

function MapaRastreo({ paquete }) {

  return (

    <div className="border border-green-500 rounded-2xl overflow-hidden">

      <MapContainer
        center={paquete.posicion}
        zoom={13}
        style={{
          height: "400px",
          width: "100%",
        }}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={paquete.posicion}>

          <Popup>

            Guía:
            {" "}
            {paquete.guia}

            <br />

            Estado:
            {" "}
            {paquete.estado}

          </Popup>

        </Marker>

      </MapContainer>

    </div>
  )
}

export default MapaRastreo