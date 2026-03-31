"use client";

import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper className="max-w-3xl">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-400">
        I am a Computer Science student passionate about solving real-world problems
        through code. I enjoy building scalable applications and exploring new
        technologies.
      </p>
    </SectionWrapper>
  );
}
