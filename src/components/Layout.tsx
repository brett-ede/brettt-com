import { NavLink, Outlet } from 'react-router-dom'
import { site } from '../data'

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link is-active' : 'nav-link'

export function Layout() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <NavLink to="/" className="wordmark">
          {site.name}
        </NavLink>
        <nav aria-label="Primary">
          <NavLink to="/" className={navClass} end>
            Work
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            About
          </NavLink>
        </nav>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>
          {site.name} · {site.location}
        </p>
        <p className="footer-links">
          <a href={site.links.linkedin}>LinkedIn</a>
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.links.dribbble}>Dribbble</a>
        </p>
      </footer>
    </div>
  )
}
