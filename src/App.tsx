import "./App.css"
import { AuthContextProvider } from "./contexts/auth-context"
import router from "./router"
import { RouterProvider } from "react-router-dom"

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App
