"use client";
import React, { FC, useState } from "react";
import { Subheader } from "./Text";
import { ExpCategoryType, ExpData } from "../types";
import { Icon } from "./Icon";
import { shortMonths } from "../utils";
import Image from "next/image";

const educationData: ExpData[] = [
    {
        startDate: new Date(2023, 0),
        endDate: new Date(2023, 2),
        logoSRC: "/logos/lewagon.jpeg",
        companyName: "Le Wagon Australia",
        role: "Full Stack Web Developer Bootcamp",
        description: "Bachelor of Commerce",
        location: "Richmond, VIC",
    },
    {
        startDate: new Date(2014, 6),
        endDate: new Date(2018, 5),
        logoSRC: "/logos/unimelb.jpg",
        companyName: "University of Melbourne",
        role: "Bachelor of Commerce",
        description: "Major: Economics & Finance",
        location: "Parkville, VIC",
    },
    {
        startDate: new Date(2014, 6),
        endDate: new Date(2018, 5),
        logoSRC: "/logos/unimelb.jpg",
        companyName: "University of Melbourne",
        role: "Diploma in Languages",
        description: "Major: Chinese - Mandarin",
        location: "Parkville, VIC",
    },
    {
        startDate: new Date(2017, 0),
        endDate: new Date(2017, 6),
        logoSRC: "/logos/uscmarshall.jpg",
        companyName:
            "University of Southern California - Marshall School of Business",
        role: "Exchange Semester",
        description: "Exchange Semester",
        location: "Los Angeles, CA",
    },
];

const workData: ExpData[] = [];

const freelanceData: ExpData[] = [];

const entrepreneurshipData: ExpData[] = [];

export const Experiences: FC = () => {
    const [experienceTab, setExperienceTab] =
        useState<ExpCategoryType>("education");

    function handleTabClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault();
        console.log(e);
        setExperienceTab(e.currentTarget.id as ExpCategoryType);
    }

    let experiences;

    switch (experienceTab) {
        case "education":
            experiences = educationData;
            break;
        case "work experience":
            experiences = workData;
            break;
        case "freelance":
            experiences = freelanceData;
            break;
        case "entrepreneurship":
            experiences = entrepreneurshipData;
            break;
        default:
            experiences = educationData;
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
            <div className="flex flex-col w-full px-10 gap-6">
                {experiences.map((allData, index) => {
                    return <ExperienceRow key={index} {...allData} />;
                })}
            </div>
        </div>
    );
};

export const ExperienceRow: FC<ExpData> = ({
    startDate,
    endDate,
    logoSRC,
    companyName,
    role,
    description,
    location,
    achievements,
}) => {
    return (
        <div className="flex flex-row justify-between w-[80vw] h-fit items-center">
            <div className="flex flex-row gap-4 justify-center items-center">
                <div className="flex flex-col">
                    <p>{`${
                        shortMonths[startDate.getMonth()]
                    } ${startDate.getFullYear()}`}</p>
                    <p>{`${
                        shortMonths[endDate.getMonth()]
                    } ${endDate.getFullYear()}`}</p>
                </div>
                <div id="logo">
                    <Image
                        src={logoSRC}
                        width={80}
                        height={80}
                        alt={logoSRC}
                        className="rounded-md"
                    />
                </div>
            </div>
            <div className="flex flex-col w-[500px]">
                <h2
                    id="companyName"
                    className="text-2xl font-bold tracking-tighter textwrap"
                >
                    {companyName}
                </h2>
                <Subheader label={role} />
            </div>

            <p className="w-[150px] place-content-center">{location}</p>
            <button className="flex flex-row justify-center items-center">
                Learn more
                <Icon label="learnmore" />
            </button>
        </div>
    );
};
