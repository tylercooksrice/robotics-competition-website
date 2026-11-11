export default function Navbar() {
    return(
    <nav className="text-[1.25rem] flex justify-between mt-3 mb-3">
        <a className = "ml-5" href="/"><img className="w-24 h-auto" src="/images/CRB_Logo.jpg" alt="CRB Logo"></img></a>
        <ul className= "flex gap-4 items-center">
            <li><a href="/">About</a></li>
            <li><a href="/teams/">Team</a></li>
            <li><a href="/sponsors/">Sponsors</a></li>
            <li><a href="/contact">Contact</a></li>
            <li className = "px-2.5 py-1 mr-5 border-2 border-solid"><a href="/join/">Join Us</a></li>
        </ul>
    </nav>)
}

// need 6 items