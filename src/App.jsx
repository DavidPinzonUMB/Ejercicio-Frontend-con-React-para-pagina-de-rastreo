import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Home from "./paginas/Home"
import AdminDashboard from "./paginas/AdminDashboard"
import PaginaRastreo from "./paginas/PaginaRastreo"

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/rastreo"
          element={<PaginaRastreo />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App