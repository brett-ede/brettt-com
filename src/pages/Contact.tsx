import { ContactForm } from '../components/ContactForm'
import { experience, expertise, site } from '../data'
import { usePageMeta } from '../usePageMeta'

export function Contact() {
  usePageMeta(`About — ${site.name}`, site.description)

  return (
    <article className="about">
      <header className="hero compact">
        <p className="kicker">About</p>
        <h1>
          Founder, product
          <br />
          leader, designer.
        </h1>
        <div className="hero-body">
          <p>
            I’ve worked across every stage of company growth — from ideation to
            acquisition — with product, design, engineering, data, research,
            marketing, and sales. Twenty years of leading products and
            people to ship experiences that actually improve people’s lives.
          </p>
        </div>
      </header>

      <section aria-labelledby="expertise-heading">
        <div className="section-head">
          <p className="kicker">01 / Practice</p>
          <h2 id="expertise-heading">Areas of expertise</h2>
        </div>
        <p className="expertise-run">{expertise.join('  ·  ')}</p>
      </section>

      <section aria-labelledby="experience-heading">
        <div className="section-head">
          <p className="kicker">02 / History</p>
          <h2 id="experience-heading">Experience</h2>
        </div>
        <ol className="history">
          {experience.map((job) => (
            <li key={`${job.company}-${job.dates}`}>
              <p className="meta">{job.dates}</p>
              <h3>
                {job.role}<span className="company">
                  , <a href={job.href} target="_blank" rel="noreferrer">{job.company}</a>
                </span>
              </h3>
              <p>{job.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="contact-block" aria-labelledby="contact-heading">
        <div>
          <p className="kicker">03 / Contact</p>
          <h2 id="contact-heading">Get in touch</h2>
          <p>
            Say hello at{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>, or send a note
            here.
          </p>
          <p className="hero-links">
            <a
              className="text-link"
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-link"
              href={site.links.dribbble}
              target="_blank"
              rel="noreferrer"
            >
              Dribbble
            </a>
            <a
              className="text-link"
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
        <ContactForm />
      </section>
    </article>
  )
}
