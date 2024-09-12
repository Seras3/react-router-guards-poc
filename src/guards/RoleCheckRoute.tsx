import { useState, useEffect } from "react"
import { UserRole, useAuthContext } from "../contexts/auth-context"
import { AuthenticatedRoute } from "./AuthenticatedRoute"
import ProtectedRoute, { ProtectedRouteProps } from "./PrivateRoute"

interface RoleCheckRouteProps extends Omit<ProtectedRouteProps, "isAllowed"> {
  roles: Array<UserRole>
}

export const RoleCheckRoute = (props: RoleCheckRouteProps) => {
  const { roles, ...rest } = props

  const [isAllowed, setIsAllowed] = useState<boolean>()

  const { user, isLoading: isLoadingUser } = useAuthContext()

  const isLoading = isLoadingUser || isAllowed === undefined

  useEffect(() => {
    if (isLoadingUser || !user) return

    const userRolesSet = new Set(user.roles)

    if (roles.some((role) => !userRolesSet.has(role))) {
      setIsAllowed(false)
      return
    }

    setIsAllowed(true)
  }, [user, roles, isLoadingUser])

  const renderContent = () => {
    if (isLoading) {
      return <div>Loading...</div>
    }

    return <ProtectedRoute isAllowed={isAllowed} {...rest} />
  }

  return <AuthenticatedRoute>{renderContent()}</AuthenticatedRoute>
}
