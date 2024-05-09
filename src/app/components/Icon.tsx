import React, { FC } from "react";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconType } from "../types";
import {
    faBackspace,
    faDownload,
    faForward,
    faMoon,
    faPlay,
    faPlus,
    faSave,
    faSun,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

type IconProps = {
    label: IconType;
    style?: {};
};

const iconMapping: { [key in IconType]: IconDefinition } = {
    delete: faXmark,
    light: faSun,
    dark: faMoon,
    add: faPlus,
    back: faBackspace,
    next: faForward,
    download: faDownload,
    learnmore: faPlay,
    save: faSave,
};

export const Icon: FC<IconProps> = ({ label, style }) => {
    const icon = iconMapping[label];
    return (
        <FontAwesomeIcon
            className="flex self-center mx-2"
            icon={icon}
            style={style}
        />
    );
};
