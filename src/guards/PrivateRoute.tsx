import { Navigate, Outlet } from "react-router-dom"

export interface ProtectedRouteProps {
  isAllowed: boolean
  redirectPath?: string
  children?: JSX.Element
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { isAllowed, redirectPath, children } = props

  if (!isAllowed) {
    return <Navigate to={redirectPath ?? "/404"} replace />
  }

  return children ? children : <Outlet />
}

export default ProtectedRoute
