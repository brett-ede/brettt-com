import { Link } from 'react-router-dom'
import { site } from '../data'
import { usePageMeta } from '../usePageMeta'

export function NotFound() {
  usePageMeta(`Page not found — ${site.name}`)

  return (
    <section className="hero compact">
      <p className="kicker">404</p>
      <h1>
        That page
        <br />
        isn’t here.
      </h1>
      <div className="hero-body">
        <p>The link may be old. Try the work index, or get in touch.</p>
        <p className="hero-links">
          <Link to="/" className="button">
            Back to work
          </Link>
          <Link to="/contact" className="text-link">
            About
          </Link>
        </p>
      </div>
    </section>
  )
}
