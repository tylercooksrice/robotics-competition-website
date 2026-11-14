export default function Join() {
  return (
    <main className="text-[var(--background)] flex flex-col bg-white px-[3vw] font-thin pb-[5vw]">
        <h1 className="text-7xl my-7 text-center">Join Us</h1>
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/join.png`}
          alt="glitch mechanical photo"
          className="rounded-3xl h-[35vw] object-cover shrink-0">
        </img>
        <h2 className="font-bold text-3xl mt-[2vw] mx-[1vw]">
          Combat Robotics at Berkeley is open to all UC Berkeley students, regardless of major!
        </h2>
        <p className="mb-[2vw] mx-[1vw] text-[clamp(0.5rem,1vw,2.5vw)]">
          We are devoted to creating a welcoming community of students with a variety 
          of skills and backgrounds. If you have the passion, you will find your place 
          within CRB. For more information, we highly recommend coffee chatting a current lead.
        </p>
        <button className="bg-[var(--background)] text-white mx-auto px-4 py-2">'25/'26 Interest Form</button>
        <h3>
          IINSERT AIRTABLE
        </h3>
        <section className="flex flex-column"></section>
    </main>
  );
}