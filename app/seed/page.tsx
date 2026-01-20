// app/seed/page.tsx
'use client'

export default function SeedPage() {
  async function seed() {
    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        slug: 'isr-test',
        title: 'ISR Test',
        content: '# Hello ISR\n\nThis is VERSION ONE.',
      }),
    })
    alert('Post saved!')
  }

  async function update() {
    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        slug: 'isr-test',
        title: 'ISR Test',
        content: '# Hello ISR\n\nThis is VERSION TWO 🚀',
      }),
    })
    alert('Post updated!')
  }

  return (
    <main>
      <button onClick={seed}>Create Post</button>
      <br />
      <button onClick={update}>Update Post</button>
    </main>
  )
}
