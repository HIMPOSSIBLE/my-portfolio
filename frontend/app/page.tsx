import Image from "next/image";
import Greeting from "./components/Greeting";
import About from "./about/page";
import Projects from "./projects/page";


export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Tolu</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Write one or two sentences about yourself here.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">What I'm working on</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Replace this with something you're building</li>
          <li>Replace this with something you're learning</li>
        </ul>
      </section>
       <Greeting name="Tolu" />
          <About />
          <Projects />
    </main>
  );
}
