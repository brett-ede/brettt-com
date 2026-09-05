import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const body = new URLSearchParams()
    for (const [key, value] of data.entries()) {
      if (typeof value === 'string') body.append(key, value)
    }
    setStatus('sending')

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!response.ok) throw new Error('Request failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p className="form-success" role="status">
        Thanks — I’ll get back to you soon.
      </p>
    )
  }

  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="honeypot">
        <label>
          Don’t fill this out
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <label>
        Name
        <input type="text" name="name" required autoComplete="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" required autoComplete="email" />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit" className="button" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'error' ? (
        <p className="form-error" role="alert">
          Something went wrong. Email me directly instead.
        </p>
      ) : null}
    </form>
  )
}
