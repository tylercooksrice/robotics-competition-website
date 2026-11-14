"use client";

import { useState } from "react";

interface ProjectCard {
    title: string;
    summary: string;
    description: string;
    imagePath: string;
}

const projectCards: ProjectCard[] = [
    {
        title: "1st Semester",
        summary: "Onboarding Project",
        description: "During this semester long program, work with a team of five to design and build a 1lb combat robot under the guidance of current CRB members and leadership.",
        imagePath: "/images/club_picture.png"

    },

    {
        title: "2nd Semester",
        summary: "12lb Project",
        description: "Using your acquired skills and knowledge from the Onboarding Project, work with a team of five members to build a unique 12lb combat robot.",
        imagePath: "/images/teamwork.png"
    },

    {
        title: "3rd Semester and Onwards",
        summary: "Independent Project",
        description: "It's all up to you! CRB members with 3 or more semesters of experience may pitch their own project ideas and/or rebuild a previous combat robot.",
        imagePath: "/images/robot_body.png"
    }
]

export default function ProgramCarousel() {
    const [count, setCount] = useState(0);
    
    return (
        <div className="flex w-[32vw] shrink-0 flex-col justify-center">
          <h2 className="text-center text-[clamp(0.75rem,1.2vw,3rem)]">{projectCards[count].title}</h2>
          <h1 className="text-center font-bold text-[clamp(1.25rem,2.4vw,2.5rem)]">{projectCards[count].summary}</h1>
          <p className="mt-[0.5vw] text-justify text-[clamp(0.75rem,1.2vw,1.5rem)]">
            {projectCards[count].description}
          </p>
          <div className= "flex flex-row justify-center mt-[3vh]">
            <button onClick={() => count>0 ? setCount(count - 1) : setCount(2)} className="cursor-pointer  mr-[3vw]">
                <svg viewBox="0 0 24 24" className="w-[clamp(1rem,1.6vw,2rem)]" fill="none"
                    stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 4 7 12l8 8" />
                </svg>
            </button>
            <div className="flex items-center gap-[0.7vw]">
            {projectCards.map((_, i) => (
                <button
                key={i}
                onClick={() => setCount(i)}
                aria-label={`Go to project ${i + 1}`}
                aria-current={i === count}
                className={`aspect-square w-[clamp(0.5rem,0.8vw,1rem)] cursor-pointer rounded-full transition-colors ${
                    i === count ? "bg-white" : "bg-white/50"
                }`}
                />
            ))}
            </div>
            <button onClick={() => count<2 ? setCount(count + 1) : setCount(0)} className="cursor-pointer ml-[3vw]">
                <svg viewBox="0 0 24 24" className="w-[clamp(1rem,1.6vw,2rem)]" fill="none"
                    stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 4 8 8-8 8" />
                </svg>
            </button>
          </div>
        </div>
    );
}

// if button clicked increment value, when hit 2, reset to 0, if button clicked decrement value, when hit 0, reset to 2 useState to keep track of the current card being displayed.