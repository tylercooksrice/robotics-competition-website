import Link from 'next/link'

export default function Footer() {
    return(<footer className="m-5">
            <h1 className="text-xl font-bold">Berkeley Competitive Robotics</h1>
            <h2 className="italic">Building, learning, and competing through hands-on robotics engineering.</h2>
            <hr className="mt-4"></hr>
            <section className="flex flex-row gap-[2vw] justify-between py-[2vw]">
                <aside>
                    <h1 className="text-lg font-bold">Get in Touch</h1>
                    <p>Questions about membership, projects, or collaboration? We'd love to hear from you.</p>
                    <p>Contact: sponsors@crberkeley.org</p>
                </aside>
                <nav>
                    <h1 className="text-sm text-white/85">Explore</h1>
                    <ul>
                        <li><Link href="/">About Us</Link></li>
                        <li><Link href="/teams">Team</Link></li>
                        <li><Link href="/sponsors">Sponsors</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/join">Join Us</Link></li>
                    </ul>
                </nav>
                <nav>
                    <h1 className="text-sm text-white/85">Website Information</h1>
                    <ul className= "">
                        <li><Link href="/">Privacy Policy</Link></li>
                        <li><Link href="/">Accessibility</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>
                </nav>
            </section>
            Site by woah
    </footer>
    );
}