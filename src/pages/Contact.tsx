import { ContactForm } from '../components/ContactForm'
import { experience, expertise, site } from '../data'
import { usePageMeta } from '../usePageMeta'

export function Contact() {
  usePageMeta(`About — ${site.name}`, site.description)

  return (
    <article className="about">
      <header className="hero compact">
        <p className="eyebrow">About</p>
        <h1>Founder, product leader, and designer.</h1>
        <p className="lede">
          I’ve worked across every stage of company growth — from ideation to
          acquisition — with product, design, engineering, data, research,
          marketing, and sales. Fifteen-plus years of leading products and
          people to ship experiences that actually help someone.
        </p>
      </header>

      <section aria-labelledby="expertise-heading">
        <h2 id="expertise-heading">Areas of expertise</h2>
        <ul className="chip-list">
          {expertise.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience</h2>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={`${job.company}-${job.dates}`}>
              <p className="meta">{job.dates}</p>
              <h3>
                {job.role}{' '}
                <span className="company">@ {job.company}</span>
              </h3>
              <p>{job.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="contact-block" aria-labelledby="contact-heading">
        <div>
          <h2 id="contact-heading">Get in touch</h2>
          <p>
            Say hello at{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>, or send a note
            here.
          </p>
          <p className="hero-links">
            <a className="text-link" href={site.links.linkedin}>
              LinkedIn
            </a>
            <a className="text-link" href={site.links.dribbble}>
              Dribbble
            </a>
            <a className="text-link" href={site.links.github}>
              GitHub
            </a>
          </p>
        </div>
        <ContactForm />
      </section>
    </article>
  )
}
