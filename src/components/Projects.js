"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Virtual Credit Card Generator",
      description: (
        <ul className="list-disc pl-5 space-y-1 text-left">
          <li>
            Developed a full-stack app for generating secure one-time-use
            virtual credit cards.
          </li>
          <li>
            Implemented user authentication, card generation logic, spending
            limits, and merchant-specific restrictions.
          </li>
          <li>
            Designed a responsive dashboard using Tailwind CSS with real-time
            card tracking and transaction history.
          </li>
          <li>
            Used JWTs for session security and integrated PostgreSQL with Prisma
            for secure data storage and access.
          </li>
        </ul>
      ),
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      github: "https://github.com/aksharvaishnav27/Virtual-credit-card",
    },
    {
      title: "Job Portal",
      description: (
        <ul className="list-disc pl-5 space-y-1 text-left">
          <li>
            Developed a full-stack job portal enabling employers to post jobs
            and candidates to search and apply, with secure user authentication
            and role-based access.
          </li>
          <li>
            Built RESTful APIs with Node.js/Express and designed a responsive
            React frontend for seamless user experience.
          </li>
          <li>
            Implemented features such as job search filters, application
            tracking, and real-time notifications to enhance platform usability.
          </li>
        </ul>
      ),
      tags: ["Full Stack Web Application"],
      github: "https://github.com/aksharvaishnav27/job_portal",
    },
    {
      title: "Car Dealer Management System",
      description: (
        <ul className="list-disc pl-5 space-y-1 text-left">
          <li>
            Design and implement a database that creates a user-friendly car
            dealer management system for customers.
          </li>
          <li>
            This system aims to streamline the operations of a car dealership,
            improve customer experience, and enhance the efficiency of managing
            inventory and sales.
          </li>
          <li>Implemented using PostgreSQL and eclipse.</li>
        </ul>
      ),
      tags: ["HTML", "CSS", "JavaScript", "React.js", "PostgreSQL", "eclipse"],
      github: "https://github.com/aksharvaishnav27/Car-Management-System",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-20 bg-primary-50 dark:bg-primary-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects. Each project showcases
            different skills and technologies.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white dark:bg-primary-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-primary-100 dark:border-primary-800"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="text-primary-700 dark:text-primary-300 mb-4">
                  {project.description}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-700 dark:text-primary-300 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
