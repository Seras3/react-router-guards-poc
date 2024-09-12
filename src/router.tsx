import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import getApp1Router from "./app-1/router"
import getApp2Router from "./app-2/router"

import { RoleCheckRoute } from "./guards/RoleCheckRoute"
import NotFoundPage from "./components/NotFoundPage"
import HomePage from "./components/HomePage"
import TopNavigation from "./components/TopNavigation"

const getRouter = () => {
  return (
    <>
      <Route path="/" element={<TopNavigation />}>
        <Route index element={<HomePage />} />

        <Route path="app1" element={<RoleCheckRoute roles={["APP_1"]} />}>
          {getApp1Router()}
        </Route>

        <Route path="app2" element={<RoleCheckRoute roles={["APP_2"]} />}>
          {getApp2Router()}
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </>
  )
}

const router = createBrowserRouter(createRoutesFromElements(getRouter()))

export default router
