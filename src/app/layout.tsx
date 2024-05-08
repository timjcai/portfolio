import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dm = DM_Mono({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
    title: "Tim Cai | Portfolio",
    description: "Web Developer Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={dm.className}>{children}</body>
        </html>
    );
}
