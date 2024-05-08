import Image from "next/image";
import { ProjectCard, Subheader } from "./components";

export default function Home() {
    const placeholderProjects = [
        {
            projectName: "Wot Supp",
            projectDescription:
                "I'm developing a supplement comparison app to merge my SEO expertise with web development, creating a playground for building growth-related tools. This project allows me to experiment with both fields, refining my skills and creating a valuable resource for users seeking supplement information.",
            projectOneLiner: "Supplement Comparison App",
            githubRepo: "https://github.com/timjcai/portfolio",
            liveURL: "http://google.com",
        },
        {
            projectName: "PAYZO",
            projectDescription:
                "I created the Invoice Generator tool to streamline invoicing for contracting jobs. Adding bulk invoice generation will save users even more time by creating multiple invoices at once. I'm excited to enhance the tool for fellow contractors.",
            projectOneLiner: "Invoice Generator Tool",
            githubRepo: "https://github.com/timjcai/portfolio",
            liveURL: "http://google.com",
        },
        {
            projectName: "Color Picker",
            projectDescription:
                "I created the RGB color picker to learn React, practice state management, and explore pointer events. I plan to expand it into a suite of color pickers and branding tools. This project is a fun way for me to experiment and develop my skills in a practical setting.",
            projectOneLiner: "RGB Color Picker",
            githubRepo: "https://github.com/timjcai/portfolio",
            liveURL: "http://google.com",
        },
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12 w-screen gap-[300px]">
            <div>Navbar</div>
            <section id="hero" className="grid grid-cols-3 w-[80vw]">
                <div className="flex flex-col col-span-1 items-end text-right p-4 justify-center gap-12">
                    <Subheader label={"Web Developer"} />
                    <h2 className="text-[132px] font-bold leading-[.95] uppercase">
                        Tim Cai
                    </h2>
                    <div className="flex flex-row gap-2 items-center">
                        <p className="text-md w-[256px] leading-tight">
                            Building Web apps with Typescript & NextJS
                        </p>
                        <div className="border-2 border-white rounded-full w-12 h-12 flex justify-center items-center">
                            I
                        </div>
                    </div>
                </div>
                <div className="flex flex-col col-span-2 justify-center items-center border-white border-2 h-[640px] p-4">
                    Image
                </div>
            </section>
            <section
                id="projects"
                className="flex flex-col items-center gap-20"
            >
                <Subheader label={"Projects"} />
                <div className="grid grid-cols-3">
                    {placeholderProjects.map((items, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                index={index}
                                projectName={items.projectName}
                                projectOneLiner={items.projectOneLiner}
                                projectDescription={items.projectDescription}
                                githubRepo={items.githubRepo}
                                liveURL={items.liveURL}
                            />
                        );
                    })}
                </div>
            </section>
            <section id="education"></section>
            <section id="work-experience"></section>
            <section id="footer"></section>
        </main>
    );
}
