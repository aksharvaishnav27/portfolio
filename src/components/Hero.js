"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowDown, FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="block text-primary-400">Akshar Vaishnav</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6">
            Aspiring Software Engineer
          </h2>
          <p className="text-lg mb-8 max-w-md mx-auto md:mx-0">
            Crafting innovative web solutions using modern technologies, with a
            strong focus on performance, scalability, and clean design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-secondary-500 rounded-full flex items-center justify-center gap-2 hover:bg-secondary-500 hover:text-background transition-colors"
              download
            >
              <FiDownload /> Download Resume
            </a>
            <Link
              href="#projects"
              className="px-6 py-3 border border-secondary-500 rounded-full flex items-center justify-center gap-2 hover:bg-secondary-500 hover:text-background transition-colors"
            >
              <FiArrowDown /> View Projects
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg shadow-primary-200 dark:shadow-primary-900">
            <Image
              src="/profile.jpeg"
              alt="Profile Photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
