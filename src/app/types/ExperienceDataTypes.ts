export type ExpData = {
    startDate: Date;
    endDate: Date;
    logoSRC: string;
    companyName: string;
    role: string;
    description: string;
    location: string;
    achievements?: string[];
};

export type ExpCategoryType =
| "education"
| "work experience"
| "freelance"
| "entrepreneurship";