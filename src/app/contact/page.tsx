import ExecutiveCard, {execs, projectManagers} from "@/components/ExecutiveCard";

export default function Contact() {
  return (
    <main className="text-[var(--background)] text-black flex flex-col bg-white px-[3vw] font-thin pb-[5vw]">
        <h1 className="text-7xl my-7 font-normal text-[var(--background)]">Contact Us</h1>
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/contact.png`}
          alt="glitch mechanical photo"
          className="rounded-3xl h-[35vw] object-cover shrink-0">
        </img>

        <h2 className="text-5xl my-[3vw] text-center font-normal">Executive Board</h2>
        <ExecutiveCard data={execs}/>
        <h2 className="text-5xl my-[3vw] text-center font-normal">Project Manager</h2>
        <ExecutiveCard data={projectManagers}/>
    </main>
  );
}