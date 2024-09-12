import { Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import FeaturePage from "../components/FeaturePage"

const getApp2Router = () => {
  return (
    <Route path="" element={<Navigation />}>
      <Route path="feature/:id" element={<FeaturePage />} />
    </Route>
  )
}

export default getApp2Router
