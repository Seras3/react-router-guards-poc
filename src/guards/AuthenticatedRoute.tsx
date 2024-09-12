import { useEffect, useState } from "react"
import ProtectedRoute, { ProtectedRouteProps } from "./PrivateRoute"
import { useAuthContext } from "../contexts/auth-context"

interface AuthenticatedRouteProps
  extends Omit<ProtectedRouteProps, "isAllowed"> {
  isAuthenticated?: boolean
}

export const AuthenticatedRoute = (props: AuthenticatedRouteProps) => {
  const { isAuthenticated = true, ...rest } = props

  const [isAllowed, setIsAllowed] = useState<boolean>()

  const { user, isLoading: isLoadingUser } = useAuthContext()

  const isLoading = isLoadingUser || isAllowed === undefined

  useEffect(() => {
    if (isLoadingUser) return

    if (isAuthenticated && !user) {
      setIsAllowed(false)
      return
    }

    if (!isAuthenticated && user) {
      setIsAllowed(false)
      return
    }

    setIsAllowed(true)
  }, [user, isAuthenticated, isLoadingUser])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <ProtectedRoute isAllowed={isAllowed} {...rest} />
}
