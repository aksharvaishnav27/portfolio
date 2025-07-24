"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);

    // In a real application, you would send the form data to your backend
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    //
    // if (response.ok) {
    //   setSubmitStatus('success');
    //   setFormData({ name: '', email: '', message: '' });
    // } else {
    //   setSubmitStatus('error');
    // }
    // setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white p-3 rounded-full">
                  <FiMail />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:vaishnavakshar0@gmail.com"
                    className="text-secondary-600 hover:underline"
                  >
                    vaishnavakshar0@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white p-3 rounded-full">
                  <FiPhone />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919724815626"
                    className="text-secondary-600 hover:underline"
                  >
                    +919724815626
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white p-3 rounded-full">
                  <FiMapPin />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p>Rajkot, Gujarat, India</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/akshar-vaishnav-47a25b263/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-200 dark:bg-primary-700 hover:bg-secondary-500 hover:text-white transition-colors p-3 rounded-full"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com/aksharvaishnav27"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-200 dark:bg-primary-700 hover:bg-secondary-500 hover:text-white transition-colors p-3 rounded-full"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://x.com/Akshar2710"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-200 dark:bg-primary-700 hover:bg-secondary-500 hover:text-white transition-colors p-3 rounded-full"
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>
              <a
                href="https://www.instagram.com/mr_aksharpatel_27?igsh=MWQ2N2Q1ZXI3cWk0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-200 dark:bg-primary-700 hover:bg-secondary-500 hover:text-white transition-colors p-3 rounded-full"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:bg-primary-800 dark:border-primary-700"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:bg-primary-800 dark:border-primary-700"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:bg-primary-800 dark:border-primary-700"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary-500 text-white py-3 px-4 rounded-md hover:bg-secondary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="mt-4 text-green-600 dark:text-green-400 text-center">
                  Your message has been sent successfully!
                </p>
              )}

              {submitStatus === "error" && (
                <p className="mt-4 text-red-600 dark:text-red-400 text-center">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
