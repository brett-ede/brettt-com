import { Link } from 'react-router-dom'
import { site, work } from '../data'
import { usePageMeta } from '../usePageMeta'

export function Home() {
  usePageMeta(site.title)

  return (
    <>
      <section className="hero">
        <p className="kicker">01 / Intro</p>
        <h1>
          Brett Ede –
          <br />
          <em>
            Product leader
            <br />
            and designer
            <br />
            in Canada 🍁
          </em>
        </h1>
        <div className="hero-body">
          <p>
            Right now I’m building product at{' '}
            <a href="https://www.7shifts.com" target="_blank" rel="noreferrer">
              7shifts
            </a>{' '}
            👨🏻‍🍳. Before that:{' '}
            <a href="https://www.clio.com" target="_blank" rel="noreferrer">
              Clio
            </a>{' '}
            👨🏻‍⚖️,{' '}
            <a href="https://www.govividly.com" target="_blank" rel="noreferrer">
              Vividly
            </a>{' '}
            🍫,{' '}
            <a href="https://www.textnow.com" target="_blank" rel="noreferrer">
              TextNow
            </a>{' '}
            🤙,{' '}
            <a href="https://www.eventbrite.com" target="_blank" rel="noreferrer">
              Eventbrite
            </a>{' '}
            🎟️, and co-founded{' '}
            <a
              href="https://www.eventbrite.com/blog/press/press-releases/eventbrite-acquires-picatic/"
              target="_blank"
              rel="noreferrer"
            >
              Picatic
            </a>{' '}
            (acquired by Eventbrite, 2018).
          </p>
          <p className="hero-links">
            <Link to="/contact" className="button">
              About & contact
            </Link>
            <a
              className="text-link"
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>

      <section className="work-index" aria-labelledby="work-heading">
        <div className="section-head">
          <p className="kicker">02 / Work</p>
          <h2 id="work-heading">Selected work</h2>
        </div>
        <ol className="work-list">
          {work.map((project, index) => (
            <li key={project.slug}>
              <Link to={project.href} className="work-row">
                <span className="num">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="work-copy">
                  <div className="work-title-row">
                    <h3>{project.title}</h3>
                    <p className="meta">{project.dates}</p>
                  </div>
                  <p>{project.summary}</p>
                </div>
                <div className="work-media">
                  <img src={project.cover} alt="" />
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
