import { Link, Outlet } from "react-router-dom"

const Navigation = () => {
  return (
    <>
      <h2>App 2</h2>
      <nav>
        <ul>
          <li>
            <Link to="feature/5">Feature 5</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation
