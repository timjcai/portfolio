import React, { FC } from "react";
import { Badges, Headline } from "./Text";

type ProjectProps = {
    index: number;
    projectName: string;
    projectDescription: string;
    projectOneLiner: string;
    githubRepo: string;
    liveURL: string;
};

export const ProjectCard: FC<ProjectProps> = ({
    index,
    projectName,
    projectDescription,
    projectOneLiner,
    githubRepo,
    liveURL,
}) => {
    return (
        <div className="flex flex-col gap-8 col-span-1 bg-slate-400 p-12 m-1 hover:border-2 hover:border-white h-fit min-h-[840px]">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <p className="text-[32px] -mb-2">0{index + 1}</p>
                    <p className="uppercase tracking-tighter font-bold text-ellipsis overflow-hidden whitespace-nowrap">
                        {projectOneLiner}
                    </p>
                </div>
                <div className="border-2 border-white flex justify-center items-center h-16 w-16">
                    Icon
                </div>
            </div>
            <div className="w-full h-[400px] border-2 border-white">IMAGE</div>
            <Headline label={projectName} />
            <p className="line-clamp-3 text-ellipsis overflow-hidden hover:line-clamp-none hover:h-fit">
                {projectDescription}
            </p>
            <div id="badges">
                <Badges label="NextJS" />
            </div>
        </div>
    );
};
