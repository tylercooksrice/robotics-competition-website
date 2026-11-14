export default function Sponsors() {
  return (
    <main className="text-[var(--background)] flex flex-col bg-white px-[3vw] font-thin pb-[5vw]">
        <h1 className="text-7xl my-7">Support the Team</h1>
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/team.png`}
          alt="glitch mechanical photo"
          className="rounded-3xl h-[35vw] object-cover shrink-0">
        </img>
        <h2 className="font-bold text-3xl mt-[2vw] mx-[1vw]">Combat Robotics at Berkeley is proudly made possible by our wonderful sponsors.</h2>
        <p className="mb-[2vw] mx-[1vw] text-[clamp(0.5rem,1vw,2.5vw)]">
          Please take the time to acknowledge their support of STEM education and the Berkeley engineering 
          community! If you’re interested in joining our network of sponsors or would like further information, 
          read more about the process in our Sponsor Packet and connect with our sponsorship team at sponsors@crberkeley.org.
        </p>
        <button className="bg-[var(--background)] text-white mx-auto px-4 py-2">Sponsor Packet</button>
        <section className="grid grid-rows-2 grid-cols-3 bg-[#D0CBD2] mt-[5vw]">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/rapid_axis.png`}
          alt="glitch mechanical photo"></img>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/online_metal.png`}
          alt="glitch mechanical photo"></img>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/mechanical_engineering.png`}
          alt="glitch mechanical photo"></img>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/bng.png`}
          alt="glitch mechanical photo"></img>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/berk_eng.png`}
          alt="glitch mechanical photo"></img>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/oshcut.png`}
          alt="glitch mechanical photo"></img>
        </section>
    </main>
  );
}