interface Executive {
    title: string;
    name: string;
    major: string;
    contact: string;
    imagePath: string;
}

interface ExecutiveCardProps {
    data: Executive[];
}

export const execs = [
    {
        title: "Co-President",
        name: "August Anderson",
        major: "English & Economics",
        contact: "augustanderson@berkeley.edu | LinkedIn",
        imagePath: ""
    }, {
        title: "Co-President",
        name: "August Anderson",
        major: "English & Economics",
        contact: "augustanderson@berkeley.edu | LinkedIn",
        imagePath: ""
    } , {
        title: "VP, External",
        name: "August Anderson",
        major: "English & Economics",
        contact: "augustanderson@berkeley.edu | LinkedIn",
        imagePath: ""
    } , {
        title: "VP, Internal",
        name: "August Anderson",
        major: "English & Economics",
        contact: "augustanderson@berkeley.edu | LinkedIn",
        imagePath: ""
    } , {
        title: "VP, Mechanical",
        name: "August Anderson",
        major: "English & Economics",
        contact: "augustanderson@berkeley.edu | LinkedIn",
        imagePath: ""  
    } , {
        title: "VP, Electrical",
        name: "August Anderson",
        major: "English & Economics",
        contact: "augustanderson@berkeley.edu | LinkedIn",
        imagePath: ""  
    }
]

export const projectManagers = [
    {
        title: "Co-Manager, 15LB",
        name: "August Anderson",
        major: "English & Economics",
        contact: "augustanderson@berkeley.edu | LinkedIn",
        imagePath: ""  
    }, {
        title: "Co-Manager, 15LB",
        name: "August Anderson",
        major: "English & Economics",
        contact: "augustanderson@berkeley.edu | LinkedIn",
        imagePath: ""
    }, {
        title: "Co-Manager, 1LB",
        name: "August Anderson",
        major: "English & Economics",
        contact: "augustanderson@berkeley.edu | LinkedIn",
        imagePath: ""  
    }, {
        title: "Co-Manager, 1LB",
        name: "August Anderson",
        major: "English & Economics",
        contact: "augustanderson@berkeley.edu | LinkedIn",
        imagePath: ""  
    }
]

export default function ExecutiveCard({ data }: ExecutiveCardProps) {
    return (
        <section className="grid grid-cols-3 gap-[6vw]">
            {data.map((array, i) => (
                <div key={i} className="bg-[#D9D9D9] p-[3%] pb-6">
                    <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/exec_photo_1.png`}
                        alt={`${array.name} headshot`}
                        className="w-full aspect-square object-cover"
                    />

                    <h1 className="text-3xl font-bold text-center">
                        {array.name}
                    </h1>

                    <h2 className="text-center font-extralight text-2xl">
                        {array.title}
                    </h2>

                    <p className="text-center">{array.major}</p>
                    <p className="text-center">{array.contact}</p>
                </div>
            ))}
        </section>
    );
}