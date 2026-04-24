'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
      <Link href="/">Home</Link>
      <Link href="/events">Events</Link>
      <Link href="/help">Helpdesk</Link>
      <Link href="/reminders">Reminders</Link>
      <Link href="/settings">Settings</Link>
    </nav>
  )
}
