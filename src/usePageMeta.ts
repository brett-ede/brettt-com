import { useEffect } from 'react'
import { site } from './data'

export function usePageMeta(title: string, description = site.description) {
  useEffect(() => {
    document.title = title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)
  }, [title, description])
}
