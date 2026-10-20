export default function Home() {
  return (
    <main className="flex flex-col">

      <section className="flex flex-col items-center">
        <h1 className="text-9xl text-center" >Combat Robotics @ Berkeley</h1>
        <button className="border-2 border-solid">Join Us</button>
        <p className="text-center">UC Berkeley's Social & Professional Combat Robotics Team</p>
      </section>

      <section className="flex flex-row items-center mx-5">
        <h1 className="rotate-270 shrink-0">Who We Are</h1>
        <span className="ml-5 p-5 bg-white text-(--background) rounded-xl">
          <h2>
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
          <h2>
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