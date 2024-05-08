import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section id="hero"></section>
            <section id="projects"></section>
            <section id="education"></section>
            <section id="work-experience"></section>
            <section id="footer"></section>
        </main>
    );
}
