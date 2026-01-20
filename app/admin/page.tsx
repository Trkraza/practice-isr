'use client'
import { useState } from 'react'

export default function Admin() {
  const [slug, setSlug] = useState('isr-test')
  const [title, setTitle] = useState('ISR Test')
  const [content, setContent] = useState('# Hello ISR')

  async function save() {
    await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ slug, title, content }),
    })
    alert('Saved (create/edit)')
  }

  async function spotUpdate() {
    await fetch('/api/revalidate', {
      method: 'POST',
      body: JSON.stringify({ slug }),
    })
    alert('Spot update done')
  }

  return (
    <div>
      <input value={slug} onChange={e => setSlug(e.target.value)} />
      <input value={title} onChange={e => setTitle(e.target.value)} />

      <textarea
        rows={15}
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <button onClick={save}>Create / Edit</button>
      <button onClick={spotUpdate}>Spot Update</button>
    </div>
  )
}
