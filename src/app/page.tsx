export default function Home() {
  return (
    <main className="flex flex-col">

      <section className="flex flex-col items-center justify-center gap-[2vw] bg-[url('/images/HomePageBanner.webp')]  bg-black/60 bg-blend-multiply bg-cover bg-center bg-no-repeat w-full aspect-[17/8]">
        <h1 className="font-bold italic leading-[1.05] text-center text-[clamp(2rem,11vw,18rem)] leading-none relative -top-[3vw]">
          Combat Robotics at Berkeley
        </h1>
        <button className="border-5 border-solid px-[3vw] py-[0.8vw] text-[clamp(1rem,2.5vw,3.5rem)] ">
          Join Us
        </button>
        <p className="text-center text-[clamp(0.875rem,2vw,3rem)] mt-2.5">
          UC Berkeley's Social &amp; Professional Combat Robotics Team
        </p>
      </section>

      <section className="flex flex-row items-center bg-white py-[10vw]">
        <h1 className="text-[clamp(2rem,3vw,8rem)] rotate-270 shrink-0 text-black">Who We Are</h1>
        <span className="border-2 border-black ml-5 p-5 text-(--background) rounded-xl">
          <h2 className="font-bold">
            About us
          </h2>
          <p>
            Combat Robotics at Berkeley (CRB) is a student-run, nonprofit organization 
            focused on developing hands-on engineering, marketing, and business skills 
            for undergraduate students at UC Berkeleys. With technical and non-technical 
            subteams, CRB hopes to inspire more students to get involved in 
            robotics—regardless of major. Join us in pushing the boundaries of engineering 
            and robotics, whether you’re working on a 15lb bot, a 1lb antweight, or the 
            operations team. At CRB, there’s a place for every aspiring roboticist!
          </p>
          <h2 className="font-bold">
            Our History
          </h2>
          <p>
            Combat Robotics at Berkeley (CRB) is a student-run, nonprofit organization 
            focused on developing hands-on engineering, marketing, and business skills for 
            undergraduate students at UC Berkeley. With technical and non-technical subteams, 
            CRB hopes to inspire more students to get involved in robotics—regardless of major. 
            Join us in pushing the boundaries of engineering and robotics, whether you’re 
            working on a 15lb bot, a 1lb antweight, or the operations team. At CRB, there’s a 
            place for every aspiring roboticist!
          </p>
        </span>
      </section>

      <section>
        <h1>Our Program</h1>
        <section className="flex flex-grid grid-cols-2 grid-rows-3">
          <picture></picture>
          <section>
            <h2>Onboarding Project</h2>
          </section>
          <section>
            <h2>Onboarding Project</h2>
          </section>
          <picture></picture>
          <picture></picture>
          <section>
            <h2>Onboarding Project</h2>
          </section>

        </section>
      </section>
      
    </main>
  );
}