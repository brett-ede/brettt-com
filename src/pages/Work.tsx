import { Link, Navigate, useParams } from 'react-router-dom'
import { getWork, site, work } from '../data'
import { usePageMeta } from '../usePageMeta'

export function Work() {
  const { slug = '' } = useParams()
  const project = getWork(slug)

  usePageMeta(
    project ? `${project.title} — ${site.name}` : site.title,
    project?.summary ?? site.description,
  )

  if (!project) return <Navigate to="/" replace />

  const index = work.findIndex((item) => item.slug === project.slug)
  const others = work.filter((item) => item.slug !== project.slug)

  return (
    <article className="case">
      <header className="hero compact">
        <p className="kicker">
          {String(index + 1).padStart(2, '0')} / {project.dates}
        </p>
        <h1>{project.title}</h1>
        <div className="hero-body">
          <p>{project.summary}</p>
          {project.website ? (
            <p className="hero-links">
              <a
                className="button"
                href={project.website}
                target="_blank"
                rel="noreferrer"
              >
                {project.websiteLabel ?? 'Visit the website'}
              </a>
            </p>
          ) : null}
        </div>
      </header>

      <figure className="case-hero-image">
        <img src={project.images[0].src} alt={project.images[0].alt} />
      </figure>

      <div className="case-prose">
        {project.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="result">
          <span className="kicker">Result</span>
          {project.result}
        </p>
      </div>

      <div className="case-gallery">
        {project.images.slice(1).map((image) => (
          <figure key={image.src}>
            <img src={image.src} alt={image.alt} />
          </figure>
        ))}
      </div>

      <nav className="more-work" aria-label="More work">
        <p className="kicker">Next</p>
        <h2>More work</h2>
        <ol>
          {others.map((item) => {
            const otherIndex = work.findIndex((entry) => entry.slug === item.slug)
            return (
              <li key={item.slug}>
                <Link to={item.href}>
                  <span className="num">
                    {String(otherIndex + 1).padStart(2, '0')}
                  </span>
                  <span>{item.title}</span>
                  <span className="meta">{item.dates}</span>
                </Link>
              </li>
            )
          })}
        </ol>
      </nav>
    </article>
  )
}
