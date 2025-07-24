import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Akshar Vaishnav</h3>
            <p className="mt-2 text-gray-400">Aspiring Software Engineer</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/aksharvaishnav27"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/akshar-vaishnav-47a25b263/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://x.com/Akshar2710"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary-400 transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/mr_aksharpatel_27?igsh=MWQ2N2Q1ZXI3cWk0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary-400 transition-colors"
              aria-label="Instagram"
            >
              <FiInstagram size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex gap-6">
              <li>
                <a
                  href="#"
                  className="hover:text-secondary-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-secondary-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
