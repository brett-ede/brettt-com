import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { site } from '../data'

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link is-active' : 'nav-link'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export function Layout() {
  return (
    <div className="page">
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <NavLink to="/" className="wordmark" end>
          brettt
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
        <p>{site.name} — Made in Canada 🇨🇦</p>
        <p className="footer-links">
          <a href={site.links.linkedin}>LinkedIn</a>
          <a href={site.links.dribbble}>Dribbble</a>
          <a href={site.links.github}>GitHub</a>
          <a href={`mailto:${site.email}`}>Email</a>
        </p>
      </footer>
    </div>
  )
}
