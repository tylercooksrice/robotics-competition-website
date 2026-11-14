export default function Contact() {
  return (
    <main className="text-[var(--background)] flex flex-col bg-white px-[3vw] font-thin pb-[5vw]">
        <h1 className="text-7xl my-7 text-center">Contact Us</h1>
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/contact.png`}
          alt="glitch mechanical photo"
          className="rounded-3xl h-[35vw] object-cover shrink-0">
        </img>
        <h2 className="text-3xl mt-[2vw] mx-[1vw] text-center">Executive Board</h2>
        <h2 className="text-3xl mt-[2vw] mx-[1vw] text-center">Project Managers</h2>
    </main>
  );
}