export default function Navbar() {
    return(<nav className="flex justify-between mt-3">
        <div className = "ml-5">Logo</div>
        <ul className= "flex gap-4">
            <li><a href="/">About</a></li>
            <li><a href="/teams/">Team</a></li>
            <li><a href="/sponsors/">Sponsors</a></li>
            <li><a href="/contact">Contact</a></li>
            <li className = "px-2 mr-5 border-2 border-solid"><a href="/join/">Join Us</a></li>
        </ul>
    </nav>)
}

// need 6 items