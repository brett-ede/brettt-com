import { Link } from 'react-router-dom'
import { site, work } from '../data'
import { usePageMeta } from '../usePageMeta'

export function Home() {
  usePageMeta(site.title)

  return (
    <>
      <section className="hero">
        <p className="eyebrow">Hi, I’m Brett</p>
        <h1>
          Product leader and designer in British Columbia.
        </h1>
        <p className="lede">
          Right now I’m building product at{' '}
          <a href="https://www.7shifts.com" rel="noreferrer">
            7shifts
          </a>
          . Before that: Clio, Vividly, TextNow, Eventbrite, and Picatic — the
          event platform I co-founded and sold to Eventbrite in 2018.
        </p>
        <p className="hero-links">
          <Link to="/contact" className="button">
            About & contact
          </Link>
          <a className="text-link" href={site.links.linkedin}>
            LinkedIn
          </a>
        </p>
      </section>

      <section className="work-index" aria-labelledby="work-heading">
        <div className="section-head">
          <h2 id="work-heading">Selected work</h2>
          <p>A few products I led from strategy through launch.</p>
        </div>
        <ul className="work-grid">
          {work.map((project) => (
            <li key={project.slug}>
              <Link to={project.href} className="work-card">
                <div className="work-card-media">
                  <img src={project.cover} alt="" />
                </div>
                <div className="work-card-copy">
                  <p className="meta">{project.dates}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
