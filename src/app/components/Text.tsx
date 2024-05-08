import React, { FC } from "react";

type TextType = {
    label: string;
};

export const Subheader: FC<TextType> = ({ label }) => {
    return (
        <p className="tracking-[0.3em] text-lg font-semibold uppercase">
            {label}
        </p>
    );
};

export const Headline: FC<TextType> = ({ label }) => {
    return (
        <p className="font-bold leading-[.95] text-[48px] uppercase text-ellipsis overflow-hidden whitespace-nowrap">
            {label}
        </p>
    );
};

export const Badges: FC<TextType> = ({ label }) => {
    return (
        <p className="font-bold leading-[.95] uppercase bg-slate-300 w-fit py-2 px-4 text-sm">
            {label}
        </p>
    );
};
