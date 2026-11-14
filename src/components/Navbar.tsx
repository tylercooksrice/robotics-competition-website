import Link from 'next/link'

export default function Navbar() {
    return(
    <nav className="text-[1.25rem] flex justify-between mt-3 mb-3">
        <a className = "ml-5" href="/"><img className="w-24 h-auto" src="/images/CRB_Logo.jpg" alt="CRB Logo"></img></a>
        <ul className= "flex gap-4 items-center">
            <li><Link href="/">About</Link></li>
            <li><Link href="/teams">Team</Link></li>
            <li><Link href="/sponsors">Sponsors</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li className = "px-2.5 py-1 mr-5 border-2 border-solid"><Link href="/join">Join Us</Link></li>
        </ul>
    </nav>)
}

// need 6 items
