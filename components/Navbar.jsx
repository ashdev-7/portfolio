"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons for navigation items
const icons = {
  home: (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path d="M9 22V12h6v10" />
    </svg>
  ),
  about: (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  work: (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  ),
  contact: (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  ),
};

// Navigation items
const navItems = [
  { label: "Home", path: "#hero", icon: icons.home },
  { label: "Work", path: "#work", icon: icons.work },
  { label: "Contact", path: "#contact", icon: icons.contact },
  { label: "About", path: "#about", icon: icons.about },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 right-0 h-auto w-full z-50 p-3 bg-gradient-to-l from-[#06060615] to-[#171717] backdrop-blur-2xl shadow-[#1111118d] shadow-2xl">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-6">
        {/* Yash logo wrapped in a Link to navigate to homepage */}
        <Link href="/" className="text-white font-bold text-3xl flex items-center">
          Yash<span className="text-[#f4d340]">.</span>
        </Link>

          <div className="flex gap-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300
                  ${
                    pathname === item.path
                      ? "text-white "
                      : "text-gray-400 hover:text-white"
                  }
                `}
              >
                <span>{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

