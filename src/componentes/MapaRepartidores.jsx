import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet"

function MapaRepartidores({ paquetes }) {

  return (
    <MapContainer
      center={[4.6097, -74.0817]}
      zoom={11}
      style={{
        height: "500px",
        width: "100%",
      }}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {paquetes.map((p, index) => (

        <Marker
          key={index}
          position={p.posicion}
        >

          <Popup>

            <strong>
              Guía:
            </strong> {p.guia}
            <br />

            <strong>
              Estado:
            </strong> {p.estado}

          </Popup>

        </Marker>

      ))}

    </MapContainer>
  )
}

export default MapaRepartidores