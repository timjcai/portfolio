export type ExpData = {
    startDate: Date;
    endDate: Date | "Present";
    logoSRC: string;
    companyName: string;
    description: string;
    location: string;
    achievements: string[];
};

export type ExpCategoryType =
| "education"
| "work experience"
| "freelance"
| "entrepreneurship";