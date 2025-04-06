const Footer = () => {
  return (
    <footer className="bg-transparent text-neutral-400 text-sm z-10 w-full relative">
      {/* Gradient background overlay */}
      <div className="absolute bottom-0 inset-0 bg-black pointer-events-none" />

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-10 border-t border-neutral-900">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Section: Branding or Copyright */}
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Yash.
          </p>

          {/* Center Section: Navigation Links */}
          <div className="flex gap-6 text-neutral-400">
            <a
              href="#about"
              className="hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#work"
              className="hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Right Section: Social Links */}
          <div className="flex gap-5">
            {/* GitHub Link */}
            <a
              href="https://github.com/ashdev-7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-400 hover:text-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 4.301 2.788 7.945 6.652 9.229.486.09.664-.211.664-.471 0-.233-.009-.848-.013-1.665-2.705.588-3.276-1.305-3.276-1.305-.442-1.124-1.08-1.423-1.08-1.423-.883-.605.067-.593.067-.593 1.013.072 1.548 1.04 1.548 1.04.867 1.486 2.276 1.057 2.833.808.088-.628.34-1.057.62-1.299-2.161-.246-4.432-1.081-4.432-4.814 0-1.063.379-1.931 1-2.611-.1-.247-.433-1.237.095-2.58 0 0 .817-.261 2.677 1 .777-.216 1.613-.324 2.442-.328.829.004 1.665.112 2.443.328 1.859-1.261 2.676-1 2.676-1 .529 1.343.196 2.333.096 2.58.622.68 1 1.548 1 2.611 0 3.741-2.274 4.565-4.44 4.806.351.302.662.897.662 1.806 0 1.303-.012 2.354-.012 2.674 0 .262.176.564.67.468C19.963 19.942 22.75 16.3 22.75 12c0-5.385-4.365-9.75-9.75-9.75z"
                />
              </svg>
            </a>
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/yashty"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-400 hover:text-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 34 34"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M34,2.75A2.75,2.75,0,0,0,31.25,0H2.75A2.75,2.75,0,0,0,0,2.75V31.25A2.75,2.75,0,0,0,2.75,34H31.25A2.75,2.75,0,0,0,34,31.25V2.75ZM10.12,29H5.38V12.79h4.74Zm-2.37-18a2.75,2.75,0,1,1,2.75-2.75A2.75,2.75,0,0,1,7.75,11ZM29,29H24.26V20.54c0-2-.71-3.37-2.49-3.37a2.7,2.7,0,0,0-2.54,1.79,3.41,3.41,0,0,0-.16,1.21V29H14.32s.06-15.58,0-17.21h4.73v2.43a4.65,4.65,0,0,1,4.28-2.36c3.13,0,5.67,2,5.67,6.32Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
