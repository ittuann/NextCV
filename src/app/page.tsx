import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import fs from "fs";
import yaml from "js-yaml";
import path from "path";
import { ResumeData } from "@/data/types";
import { FolderOpen, Trophy } from "lucide-react";
import {
  Header,
  Summary,
  EducationComponent as Education,
  ExperienceComponent as Experience,
  NormalComponent as Normal,
  SkillsComponent as Skills,
  Footer,
} from "@/components";

const resumePath = path.join(process.cwd(), "cv.yaml");
const resumeData = yaml.load(fs.readFileSync(resumePath, "utf8")) as ResumeData;

export const metadata: Metadata = {
  title: resumeData.info[0].name,
  description: `Resume of ${resumeData.info[0].name}`,
};

export default function Page() {
  const { info, education, experience, projects, awards, skills } = resumeData;

  return (
    <main className="font-sans bg-black text-gray-300 min-h-screen">
      <div className="container mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
        <Header info={info[0]} />

        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-2 space-y-12">
            <Summary summary={info[0].summary} />
            <Education education={education} />
            <Experience experience={experience} />
            <Normal normal={projects} name="Projects" icon={FolderOpen} />
            <Normal normal={awards} name="Awards" icon={Trophy} />
          </div>

          <div className="col-span-1 space-y-12">
            <div className="flex justify-center">
              <Image
                src="/avatar.png"
                className="rounded-2xl shadow-xl border-2 border-gray-700 bg-gray-900 object-cover hover:scale-105 transition-transform duration-300"
                alt="Profile Picture"
                width={420}
                height={420}
              />
            </div>
            <Skills skills={skills} />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
