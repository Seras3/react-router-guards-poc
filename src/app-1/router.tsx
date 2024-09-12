import { Route } from "react-router-dom"
import { RoleCheckRoute } from "../guards/RoleCheckRoute"
import FeaturePage from "../components/FeaturePage"
import AdminPage from "../components/AdminPage"
import SupervisorPage from "../components/SupervisorPage"
import Navigation from "./components/Navigation"

const getApp1Router = () => {
  return (
    <Route path="" element={<Navigation />}>
      <Route path="feature/:id" element={<FeaturePage />} />
      <Route
        path="admin"
        element={
          <RoleCheckRoute roles={["ADMIN"]}>
            <AdminPage />
          </RoleCheckRoute>
        }
      />
      <Route
        path="supervisor"
        element={
          <RoleCheckRoute roles={["SUPERVISOR"]}>
            <SupervisorPage />
          </RoleCheckRoute>
        }
      />
    </Route>
  )
}

export default getApp1Router
