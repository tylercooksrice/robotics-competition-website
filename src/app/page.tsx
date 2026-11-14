import ProgramCarousel from "@/components/ProgramCarousel";

export default function Home() {
  return (
    <main className="flex flex-col">

      <section style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/HomePageBanner.webp)`,}} 
      className="flex flex-col items-center justify-center bg-black/50 bg-blend-multiply bg-cover bg-center bg-no-repeat w-full aspect-[17/8]">
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

      <section className="flex flex-row items-center bg-white py-[8vw] pr-[10vw]">
        <h1 className="text-[clamp(2rem,3vw,8rem)] rotate-270 shrink-0 text-black">Who We Are</h1>

        <span className="border-2 border-black ml-5 p-5 text-(--background) text-[clamp(0.875rem,1vw,2rem)] rounded-xl">
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
            CRB was originally created to compete in BattleBots—the primetime televised 
            international robot fighting competition. BattleBots was an intense 2 weeks of 
            combat with a rigorous application process. To this day, only 2 other college clubs 
            have been selected to participate, WPI and MIT. Glitch was our BattleBots entry, which 
            emerged as a breakout rookie during our Season 6 run. The design centered around a 
            powerful vertically spinning weapon and a stealth bomber shaped chassis.
          </p>
        </span>
      </section>

      <section className="flex flex-row items-center justify-center gap-[6vw] bg-[#00B7BD] px-[3vw] py-[5vw]">
        <ProgramCarousel />

        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/club_picture.png`}
          alt="Club Picture"
          className="w-[50vw] shrink-0 aspect-[17/10] object-cover border-white border-5 rounded-xl"
        />
      </section>

      <section className="bg-black pt-[3vw] pb-[12vw]">
        <h1 className="text-[clamp(2rem,5vw,5rem)] text-center">Our Robots</h1>
        <div className="flex flex-row items-center justify-center gap-[25vw]">
          <figure>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/glitch.png`}
              alt="glitch robot"
              className="w-[30vw] aspect-[17/10] object-cover "></img>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/glitch_text.png`}
              alt="coming soon"
              className="mx-auto w-[15vw]">
            </img>
          </figure>
          <figure>Coming Soon</figure>

        </div>

      </section>
      
    </main>
  );
}