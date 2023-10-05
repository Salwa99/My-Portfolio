import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoPostgresql,
} from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import {
  SiTypescript,
  SiRubyonrails,
  SiJest,
  SiWebpack,
  SiRedux,
  SiPostman,
} from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import "./Skills.css";

const Skills = () => {
  const SkillsA = [
    {
      _id: 1,
      html: <AiFillHtml5 />,
      css: <BiLogoCss3 />,
      tailwind: <BiLogoTailwindCss />,
      javascript: <TbBrandJavascript />,
      react: <BiLogoReact />,
      redux: <SiRedux />,
      typescript: <SiTypescript />,
      webpack: <SiWebpack />,
      jest: <SiJest />,
      ruby: <DiRuby />,
      rubyonrails: <SiRubyonrails />,
      sql: <BsFiletypeSql />,
      postgres: <BiLogoPostgresql />,
      postman: <SiPostman />,
      github: <AiFillGithub />,
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-20 lg:pl-32 pl-3 pr-4 font-titleFont border-b-2 border-yellow-400"
    >
      <h1 className="text-3xl text-center sm:text-5xl text-gray-600 font-bold capitalize">
        Technologies I use
      </h1>

      <div>
        {SkillsA.map((data) => (
          <div key={data._id} className="grid grid-cols-1 p-16">
            <div className="mt-12 grid grid-cols-3 gap-8 text-5xl lg:text-6xl text-gray-500 cursor-pointer">
              <h2
                className="flex items-center justify-center hover:text-yellow-400 animate-move"
                title="HTML"
              >
                {data.html}
              </h2>
              <h2
                className="flex items-center justify-center hover:text-yellow-400 animate-move"
                title="CSS"
              >
                {data.css}
              </h2>
              <h2
                className="flex items-center justify-center hover:text-yellow-400 animate-move"
                title="JavaScript"
              >
                {data.javascript}
              </h2>
              <h2
                className="flex items-center justify-center hover:text-yellow-400 animate-move"
                title="React"
              >
                {data.react}
              </h2>
              <h2
                className="flex items-center justify-center hover:text-yellow-400 animate-move"
                title="Redux"
              >
                {data.redux}
              </h2>
              <h2
                className="flex items-center justify-center hover:text-yellow-400 animate-move"
                title="TypeScript"
              >
                {data.typescript}
              </h2>
              <h2
                className="flex items-center justify-center hover:text-yellow-400 animate-move"
                title="Webpack"
              >
                {data.webpack}
              </h2>
              <h2
                className="flex items-center justify-center hover:text-yellow-400 animate-move"
                title="Jest"
              >
                {data.jest}
              </h2>
              <h2
                className="flex items-center justify-center hover:text-yellow-400 animate-move"
                title="Ruby"
              >
                {data.ruby}
              </h2>
              <h2
                className="flex items-center justify-center hover:text-yellow-400 animate-move"
                title="Ruby on Rails"
              >
                {data.rubyonrails}
              </h2>
              <h2
                className="flex items-center justify-center hover:text-yellow-400 animate-move"
                title="SQL"
              >
                {data.sql}
              </h2>
              <h2
                className="flex items-center justify-center hover:text-yellow-400 animate-move"
                title="Postgres"
              >
                {data.postgres}
              </h2>
              <h2
                className="flex items-center justify-center hover:text-yellow-400 animate-move"
                title="Postman"
              >
                {data.postman}
              </h2>
              <h2
                className="flex items-center justify-center hover:text-yellow-400 animate-move"
                title="GitHub"
              >
                {data.github}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
