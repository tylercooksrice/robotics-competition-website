export default function Teams() {
  return (
    <main className="text-[var(--background)] flex flex-col bg-white px-[3vw] font-thin pb-[5vw]">
        <h1 className="text-7xl my-7">Our Subteams</h1>
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/mechanical.png`}
          alt="glitch mechanical photo"
          className="rounded-3xl h-[35vw] object-cover shrink-0">
        </img>
        <h2 className="font-bold text-3xl mt-[2vw] mx-[1vw]">Combat Robotics at Berkeley has three subteams—Mechanical, EECS, and Operations.</h2>
        <p className="mb-[2vw] mx-[1vw] text-[clamp(0.5rem,1vw,2.5vw)]">
          During their first semester, all new members are required to learn the 
          basic skills of each team in order to build their 1lb robot. Members may then apply 
          to join a subteam during spring semester elections. Each subteam has specific responsibilities 
          and expectations for its members. Read more to see which team is the right fit for you!
        </p>

        <article className="flex flex-col gap-[3vw] justify-center items-center mx-[10vw] w-[70vw]">
          <section className="flex flex-row bg-[#D9D6D9] rounded-3xl w-full">
            <h1
              style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/mechanical.png)` }}
              className="flex w-1/2 shrink-0 aspect-[17/8] items-center justify-center rounded-3xl bg-black/30 bg-blend-multiply 
              bg-cover bg-center bg-no-repeat text-[4vw] text-white">
              Mechanics
            </h1>
            <p className="self-center px-[2vw] text-justify text-[clamp(0.875rem,1.4vw,1.75rem)]">
              The mechanical engineering subteam is responsible for the structural/strategic design 
              choices of the robot. This includes CAD Design, Stress Simulations, and Manufacturing. 
              Mechanical is divided into the Frame, Armor/Forks, Drive, and Weapon subteams.
            </p>
          </section>

          <section className="flex flex-row bg-[#D9D6D9] rounded-3xl w-full">
            <h1
              style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/mechanical.png)` }}
              className="flex w-1/2 shrink-0 aspect-[17/8] items-center justify-center rounded-3xl bg-black/30 bg-blend-multiply 
              bg-cover bg-center bg-no-repeat text-[4vw] text-white">
              EECS
            </h1>
            <p className="self-center px-[2vw] text-justify text-[clamp(0.875rem,1.4vw,1.75rem)]">
              The EECS subteam is responbile for all the electrical systems. Members will work with high 
              power BLDC motors, speed controllers, and batteries. EECS works in the Drive and Weapon subteams.
            </p>
          </section>

          <section className="flex flex-row bg-[#D9D6D9] rounded-3xl w-full">
            <h1
              style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/mechanical.png)` }}
              className="flex w-1/2 shrink-0 aspect-[17/8] items-center justify-center rounded-3xl bg-black/30 bg-blend-multiply 
              bg-cover bg-center bg-no-repeat text-[4vw] text-white">
              Operations
            </h1>
            <p className="self-center px-[2vw] text-justify text-[clamp(0.875rem,1.4vw,1.75rem)]">
              The Operations subteam is responsible for all the behind the scences! Members do a wide range of task 
              such as graphic design, web development, photography, socials, and finances.
            </p>
          </section>

        </article>
    </main>
  );
}