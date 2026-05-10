import Particles from "react-tsparticles"

function ParticleBackground() {

  return (
    <Particles
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },

        particles: {
          number: {
            value: 50,
          },

          color: {
            value: "#00ff99",
          },

          links: {
            enable: true,
            color: "#00ff99",
          },

          move: {
            enable: true,
            speed: 1,
          },

          size: {
            value: 2,
          },
        },
      }}
    />
  )
}

export default ParticleBackground