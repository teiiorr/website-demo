// app/components/projects/ProjectsSection.tsx
"use client";

import Container from "../core/Container";
import Section from "../core/Section";
import Heading from "../core/Heading";
import Text from "../core/Text";
import ProjectsSlider from "./ProjectsSlider";

export default function ProjectsSection() {
  return (
    <Section id="projects" className="bg-noise">
      <Container>
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Heading as="h2" className="mb-4">
              Xabarlar va loyihalar
            </Heading>
            <Text muted>
              Bu bo‘limda rejadagi, jarayondagi va tugallangan loyihalarimiz haqida
              qisqa, aniq va ishonchli ma’lumotlar beriladi.
            </Text>
          </div>

         
        </div>

        <ProjectsSlider />
      </Container>
    </Section>
  );
}
