export default function Join() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main className="text-black flex flex-col bg-white px-[3vw] font-thin pb-[5vw]">
      <h1 className="my-7 text-[clamp(2.5rem,5vw,6rem)] text-[var(--background)]">Join Us</h1>
      <img
        src={`${base}/images/join.png`}
        alt="glitch mechanical photo"
        className="rounded-3xl h-[35vw] object-cover shrink-0"
      />
      <h2 className="mt-[2vw] mx-[1vw] font-bold text-[clamp(1.25rem,2.2vw,2.5rem)]">
        Combat Robotics at Berkeley is open to all UC Berkeley students, regardless of major!
      </h2>
      <p className="mt-[1vw] mb-[2vw] mx-[1vw] text-[clamp(0.875rem,1.3vw,1.75rem)]">
        We are devoted to creating a welcoming community of students with a variety
        of skills and backgrounds. If you have the passion, you will find your place
        within CRB. For more information, we highly recommend coffee chatting a current lead.
      </p>
      <button className="mx-auto my-[1vw] cursor-pointer bg-[var(--background)] text-white px-[2.5vw] py-[1vw] text-[clamp(1rem,1.8vw,2rem)]">
        '25/'26 Interest Form
      </button>
      <h3 className="my-[5vw] text-center text-[clamp(2rem,4vw,4.5rem)]">INSERT AIRTABLE</h3>

      <section className="flex flex-col items-center gap-[3vw]">
        <div className="flex w-full flex-row gap-[3vw]">
          <img
            src={`${base}/images/joining_crb.png`}
            alt="CRB members at an introductory meeting"
            className="w-[34vw] shrink-0 aspect-[17/10] object-cover rounded-3xl border-4 border-solid border-black"
          />
          <aside className="min-w-0 flex-1 text-[clamp(0.875rem,1.25vw,1.5rem)]">
            <h2 className="mb-[0.8vw] font-bold text-[clamp(1.25rem,2vw,2.25rem)]">Joining CRB</h2>
            <p className="mb-[1.5vw]">
              CRB does not have an application process! Once students
              attend our introductory meetings at the beginning of the school year,
              they will become an official member of CRB.
            </p>
            <p>
              Please fill out the interest form above to be updated when we
              finalize info sessions and introductory meeting times for the 2025/'26 academic year!
            </p>
          </aside>
        </div>

        <div className="flex w-full flex-row gap-[3vw]">
          <img
            src={`${base}/images/req.png`}
            alt="CRB members working on a robot"
            className="w-[34vw] shrink-0 aspect-[17/10] object-cover rounded-3xl border-4 border-solid border-black"
          />
          <aside className="min-w-0 flex-1 text-[clamp(0.875rem,1.25vw,1.5rem)]">
            <h2 className="mb-[0.8vw] font-bold text-[clamp(1.25rem,2vw,2.25rem)]">Requirements</h2>
            <p>To be a member of CRB, all students must meet the following requirements:</p>
            <ul className="mt-[1.5vw] list-disc list-outside pl-[2vw]">
              <li>Students must be currently enrolled at UC Berkeley</li>
              <li>Students must meet the expected work hours for their subteam role (10+ hrs/wk for engineering roles and 3+hrs/wk for non-engineering roles)</li>
              <li>Students must meet project and subteam deadlines</li>
            </ul>
          </aside>
        </div>

        <div className="flex w-full flex-row gap-[3vw]">
          <img
            src={`${base}/images/membership.png`}
            alt="CRB members with their 1lb robots"
            className="w-[34vw] shrink-0 aspect-[17/10] object-cover rounded-3xl border-4 border-solid border-black"
          />
          <aside className="min-w-0 flex-1 text-[clamp(0.875rem,1.25vw,1.5rem)]">
            <h2 className="mb-[0.8vw] font-bold text-[clamp(1.25rem,2vw,2.25rem)]">Membership</h2>
            <p className="mb-[1.5vw]">
              New members will take part in a three-month development track where they will build a 1lb robot with support and
              guidance from CRB. In November, CRB will host an internal 1lb competition for new members to battle!
            </p>
            <p>Afterwards, members may move on to higher weight classes or continue redesigning and improving their 1lb robots.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}