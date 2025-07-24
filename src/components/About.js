"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiUser } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary-50 dark:bg-primary-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-lg overflow-hidden shadow-xl border-2 border-secondary-300 dark:border-secondary-700">
              <Image
                src="/profile.jpeg"
                alt="About Me Image"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am ?</h3>
            <p className="text-lg mb-4">
              I'm a passionate software developer with a deep enthusiasm for web
              technologies and building intuitive, user-focused experiences. My
              journey into programming began in college, and since then, I’ve
              been on a continuous path of learning, growth, and exploration in
              the world of tech.
            </p>
            <p className="text-lg mb-6">
              With a solid foundation in computer science, I thrive on solving
              challenging problems and bringing innovative ideas to life through
              clean, efficient code. Outside of coding, I enjoy staying ahead of
              the curve by experimenting with new technologies, contributing to
              open-source projects, and spending time outdoors to recharge and
              get inspired.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <FiUser className="text-primary-600" />
                <span>
                  <strong>Name:</strong> Akshar Vaishnav
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FiUser className="text-primary-600" />
                <span>
                  <strong>Education:</strong> CSE Engineer
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FiUser className="text-primary-600" />
                <span>
                  <strong>Location:</strong> Rajkot
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FiUser className="text-primary-600" />
                <span>
                  <strong>Experience:</strong> 2 Months(internship)
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
