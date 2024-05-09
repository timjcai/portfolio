"use client";
import React, { FC, useState } from "react";
import { Subheader } from "./Text";
import { ExpCategoryType, ExpData } from "../types";

export const Experiences: FC = () => {
    const [experienceTab, setExperienceTab] =
        useState<ExpCategoryType>("education");

    function handleTabClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault();
        console.log(e);
        setExperienceTab(e.currentTarget.id as ExpCategoryType);
    }

    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <Subheader label="education & work experience" />
            <div id="experience-nav" className="flex flex-row">
                <div
                    className={`${
                        experienceTab === "education"
                            ? "bg-orange-700"
                            : "bg-slate-700"
                    } px-6 py-3`}
                    id="education"
                    onClick={(e) => handleTabClick(e)}
                >
                    <Subheader label="education" />
                </div>
                <div
                    className={`${
                        experienceTab === "work experience"
                            ? "bg-orange-700"
                            : "bg-slate-700"
                    } px-6 py-3`}
                    id="work experience"
                    onClick={(e) => handleTabClick(e)}
                >
                    <Subheader label="work experience" />
                </div>
                <div
                    className={`${
                        experienceTab === "freelance"
                            ? "bg-orange-700"
                            : "bg-slate-700"
                    } px-6 py-3`}
                    id="freelance"
                    onClick={(e) => handleTabClick(e)}
                >
                    <Subheader label="freelance" />
                </div>
                <div
                    className={`${
                        experienceTab === "entrepreneurship"
                            ? "bg-orange-700"
                            : "bg-slate-700"
                    } px-6 py-3`}
                    id="entrepreneurship"
                    onClick={(e) => handleTabClick(e)}
                >
                    <Subheader label="entrepreneurship" />
                </div>
            </div>
            <div>{experienceTab}</div>
        </div>
    );
};

export const ExperienceRow: FC<ExpData> = ({
    startDate,
    endDate,
    logoSRC,
    companyName,
    description,
    location,
    achievements,
}) => {
    return (
        <div className="flex flex-row">
            <div></div>
            <div id="logo"></div>
            <h2 id="companyName"></h2>
            <p>{location}</p>
            <button>
                Learn more
                <Icon />
            </button>
        </div>
    );
};
