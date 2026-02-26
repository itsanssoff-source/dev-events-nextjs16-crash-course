'use client';
import Link from "next/link"
import Image from 'next/image';
import posthog from 'posthog-js';

const Navbar = () => {
  return (
    <header>
        <nav className="logo">
            <Link href='/' className="logo">
            <Image src="/icons/logo.png" alt="logo" width={24} height={24}/>
            <p>DevEvent</p>
            </Link>
            <ul>
                <Link href='/'>Home</Link>
                <Link href='/' onClick={() => posthog.capture('nav_events_clicked')}>Events</Link>
                <Link href='/' onClick={() => posthog.capture('nav_create_event_clicked')}>Create Event</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar