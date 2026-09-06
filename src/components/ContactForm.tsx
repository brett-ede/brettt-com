import { useState, type FormEvent } from 'react'
import { site } from '../data'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (String(data.get('bot-field') ?? '').trim()) {
      setStatus('sent')
      form.reset()
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          _subject: 'New message from brettt.com',
          _replyto: data.get('email'),
          _template: 'box',
          _captcha: 'false',
        }),
      })
      if (!response.ok) throw new Error('Request failed')
      const result = (await response.json()) as {
        success?: boolean | string
        message?: string
      }
      const rejected =
        (result.success === false || result.success === 'false') &&
        !/activat|confirm/i.test(result.message ?? '')
      if (rejected) throw new Error(result.message ?? 'Request failed')
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
    <form className="contact-form" onSubmit={onSubmit}>
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
          Something went wrong.{' '}
          <a href={`mailto:${site.email}`}>Email {site.email}</a> instead.
        </p>
      ) : null}
    </form>
  )
}
