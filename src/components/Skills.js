"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaPython,
  FaJava,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "C++",
      icon: <SiCplusplus className="text-4xl text-blue-700" />,
      level: 95,
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="text-4xl text-orange-500" />,
      level: 90,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-4xl text-blue-500" />,
      level: 85,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-4xl text-yellow-500" />,
      level: 85,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-4xl text-blue-600" />,
      level: 75,
    },
    {
      name: "React",
      icon: <FaReact className="text-4xl text-blue-400" />,
      level: 80,
    },
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl" />, level: 75 },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-4xl text-green-600" />,
      level: 70,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-4xl text-cyan-500" />,
      level: 85,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-4xl text-orange-600" />,
      level: 80,
    },
    {
      name: "SQL",
      icon: <FaDatabase className="text-4xl text-blue-800" />,
      level: 75,
    },
    {
      name: "Python",
      icon: <FaPython className="text-4xl text-blue-500" />,
      level: 70,
    },
    {
      name: "Payload CMS",
      icon: <FaDatabase className="text-4xl text-black" />,
      level: 65,
    },
    {
      name: "Medusa.js",
      icon: <FaDatabase className="text-4xl text-green-700" />,
      level: 60,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with. I&apos;m constantly
            learning and expanding my skillset.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="dark:bg-primary-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center border border-primary-100 dark:border-primary-800"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="font-medium text-lg mb-2">{skill.name}</h3>
              <div className="w-full bg-primary-100 dark:bg-primary-800 rounded-full h-2.5">
                <div
                  className="bg-primary-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="mt-2 text-sm text-primary-700 dark:text-primary-300">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
