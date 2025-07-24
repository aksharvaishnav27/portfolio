"use client";

import { motion } from "framer-motion";
import { FiAward, FiCheckCircle } from "react-icons/fi";
import Image from "next/image";

const Achievements = () => {
  const achievements = [
    {
      title: "MINEd Hackathon 2025",
      issuer: "Centre of Excellence in Data Science, Nirma University",
      date: "January 30 - February 1, 2025",
      description:
        "Participated in the 5th Edition of the national-level MINEd Hackathon organized by the Centre of Excellence in Data Science, Department of Computer Science and Engineering at Nirma University. Akshar competed under the Intech Creative Services track, addressing the problem statement titled 'Smart Route Optimizer'.",
    },
    {
      title: "Smart India Hackathon 2024 – Local Round",
      issuer: "E-Cell, Nirma University",
      date: "16th September 2024",
      description:
        "Received a Certificate of Appreciation for participation in the Smart India Hackathon 2024 Local Round, conducted by E-Cell, Nirma University on 16th September 2024. This round was part of a national initiative by the Ministry of Education, Government of India, aimed at promoting innovation and entrepreneurship.",
    },
    {
      title: "Cubix 2023 – Codepid Event",
      issuer: "Computer Society of India (CSI), Nirma University",
      date: "2023",
      description:
        "Actively contributed to the Codepid programming competition under Cubix 2023, hosted by the Computer Society of India (CSI) at Nirma University. The event recognized Akshar’s enthusiastic involvement in collaborative and competitive coding challenges.",
    },
  ];

  const otherAchievements = [
    "Winner of Handwriting Competition",
    "Winner – Drawing Competition (Camel & District Level)",
    "Participant in Speech Competitions",
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="achievements"
      className="py-20 bg-primary-50 dark:bg-primary-950"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-700 dark:text-primary-300">
            A collection of my professional certifications and notable
            achievements.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <FiAward className="mr-2 text-secondary-500" /> Certifications
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {achievements.map((cert, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white dark:bg-primary-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex gap-4 border border-primary-100 dark:border-primary-800"
              >
                <div>
                  <h4 className="font-bold text-lg">{cert.title}</h4>
                  <p className="text-secondary-600 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">
                    {cert.date}
                  </p>
                  <p className="text-primary-700 dark:text-primary-300">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <FiCheckCircle className="mr-2 text-secondary-500" /> Other
            Achievements
          </h3>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {otherAchievements.map((achievement, index) => (
              <motion.li
                key={index}
                variants={item}
                className="flex items-start gap-2 text-primary-700 dark:text-primary-300"
              >
                <FiCheckCircle className="text-secondary-500 mt-1 flex-shrink-0" />
                <span>{achievement}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
