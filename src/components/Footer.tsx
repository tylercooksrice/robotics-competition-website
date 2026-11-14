export default function Footer() {
    return(<footer className="m-5">
            <h1 className="text-xl font-bold">Berkeley Competitive Robotics</h1>
            <h2 className="italic">Building, learning, and competing through hands-on robotics engineering.</h2>
            <hr className="mt-4"></hr>
            <section className="flex flex-row gap-[2vw] justify-between py-[2vw]">
                <aside>
                    <h1 className="text-lg font-bold">Get in Touch</h1>
                    <p>Questions about membership, projects, or collaboration? We'd love to hear from you.</p>
                    <p>Contact: blahblah@example.com</p>
                </aside>
                <nav>
                    <h1 className="text-sm text-white/85">Explore</h1>
                    <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/teams">Team</a></li>
                        <li><a href="/sponsors">Sponsors</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/join-us">Join Us</a></li>
                    </ul>
                </nav>
                <nav>
                    <h1 className="text-sm text-white/85">Website Information</h1>
                    <ul className= "">
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Accessibility</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </nav>
            </section>
            Site by woah
    </footer>
    );
}