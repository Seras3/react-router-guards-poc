import { Link, Outlet } from "react-router-dom"
import { useAuthContext, UserRole, userRoles } from "../contexts/auth-context"
import { useState } from "react"

const TopNavigation = () => {
  const { user, isLoading, login, logout } = useAuthContext()

  const [roles, setRoles] = useState<Array<UserRole>>([])

  const renderRoleCheckbox = (role: UserRole) => (
    <div key={role}>
      <input
        key={role}
        type="checkbox"
        value={role}
        name={role}
        checked={roles.includes(role)}
        onChange={(e) => {
          if (e.target.checked) {
            setRoles([...roles, role])
          } else {
            setRoles(roles.filter((r) => r !== role))
          }
        }}
      />
      <label htmlFor={role}>{role}</label>
    </div>
  )

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app1">App 1</Link>
          </li>
          <li>
            <Link to="/app2">App 2</Link>
          </li>
        </ul>
      </nav>
      {isLoading ? (
        <div>Loading...</div>
      ) : user ? (
        <>
          <h1>Welcome: {user.email}</h1>
          <p>With roles: {`[${user.roles.join(", ")}]`}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h3>Roles:</h3>
          {userRoles.map(renderRoleCheckbox)}
          <br />
          <button onClick={() => login(roles)}>Login</button>
        </>
      )}

      <Outlet />
    </>
  )
}

export default TopNavigation
