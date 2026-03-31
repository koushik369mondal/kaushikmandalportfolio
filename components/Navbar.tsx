"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between py-6">
      <h1 className="text-xl font-bold">Koushik</h1>
      <div className="space-x-6">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
