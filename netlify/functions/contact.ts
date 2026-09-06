import type { Config } from '@netlify/functions'
import { site } from '../../src/data'

type ContactBody = {
  name?: unknown
  email?: unknown
  message?: unknown
  'bot-field'?: unknown
}

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export default async (request: Request) => {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  let body: ContactBody
  try {
    body = (await request.json()) as ContactBody
  } catch {
    return new Response('Invalid request', { status: 400 })
  }

  if (asTrimmedString(body['bot-field'])) {
    return new Response(null, { status: 204 })
  }

  const name = asTrimmedString(body.name)
  const email = asTrimmedString(body.email)
  const message = asTrimmedString(body.message)

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response('Invalid request', { status: 400 })
  }

  const forwarded = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: 'New message from brettt.com',
      _replyto: email,
      _template: 'box',
    }),
  })

  if (!forwarded.ok) {
    return new Response('Could not send message', { status: 502 })
  }

  return new Response(null, { status: 204 })
}

export const config: Config = {
  path: '/api/contact',
  method: ['POST'],
}
