import Link from "next/link";
import ThemeToggle from "./themetoggle";

function NavBar() {
  return (
    <nav className="flex gap-4 p-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <ThemeToggle />
    </nav>
  );
}

export default NavBar;
