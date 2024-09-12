import { createContext, ReactNode, useContext, useState } from "react"

export const userRoles = ["ADMIN", "SUPERVISOR", "APP_1", "APP_2"] as const

export type UserRole = (typeof userRoles)[number]

interface AuthContextData {
  user?: {
    email: string
    roles: UserRole[]
  }
  isLoading: boolean
  login: (roles: Array<UserRole>) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextData>({
  isLoading: false,
  login: () => {},
  logout: () => {},
})

export const useAuthContext = () => useContext(AuthContext)

type Props = {
  children: ReactNode
}

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AuthContextData["user"]>()
  const [isLoading, setIsLoading] = useState(false)

  const login: AuthContextData["login"] = async (roles) => {
    setIsLoading(true)

    const authenticate = () => {
      setUser({
        email: "user@gmail.com",
        roles,
      })

      setIsLoading(false)
    }

    const timeout = setTimeout(authenticate, 3000)
    return () => clearTimeout(timeout)
  }

  const logout = () => setUser(undefined)

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
