import { Link } from "@tanstack/react-router";
import { Moon, NotebookPen, PenTool, Sun, Tag, Vault } from "lucide-react";
import { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleTheme, setToggleTheme] = useDarkMode();

  return (
    <nav className="bg-amber-500 dark:bg-zinc-900 shadow-md relative transition-colors">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Name - Fixed alignment using flex & items-center */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white text-xl font-bold"
          activeProps={{
            className:
              "text-amber-500 dark:text-amber-400 font-semibold bg-amber-600/30 md:bg-transparent",
          }}
          inactiveProps={{ className: "text-white" }}
        >
          <PenTool className="w-6 h-6" />
          <span>Jottoir</span>
        </Link>

        <div className="ml-auto flex items-center gap-3">
          {/*Theme switch pill*/}
          <button
            onClick={() => setToggleTheme(!toggleTheme)}
            className="relative inline-flex items-center h-8 w-16 rounded-full bg-amber-600/40 dark:bg-zinc-800 p-1 transition-colors focus:outline-none border border-amber-600/30 dark:border-zinc-700"
            aria-label="Toggle dark mode"
          >
            {/* Sliding Thumb */}
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-zinc-900 shadow-md transform transition-transform duration-300 ease-in-out ${
                toggleTheme ? "translate-x-8" : "translate-x-0"
              }`}
            >
              {toggleTheme ? (
                <Moon className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-amber-600" />
              )}
            </div>
          </button>

          {/* Hamburger Menu Button for mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none md:hidden p-1 rounded-lg hover:bg-amber-600 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <div
            className={`absolute md:relative top-full left-0 w-full md:w-auto bg-amber-500 dark:bg-zinc-900 md:bg-transparent shadow-lg md:shadow-none flex flex-col md:flex-row md:items-center md:space-x-2 p-4 md:p-0 transition-all duration-300 ease-in-out z-50 ${
              isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible md:opacity-100 md:visible"
            }`}
          >
            <Link
              to="/vault"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-2 px-4 rounded-lg transition hover:bg-amber-600 dark:hover:bg-zinc-800 md:hover:bg-transparent md:inline-flex"
              activeProps={{
                className:
                  "text-amber-950 dark:text-amber-400 font-semibold bg-amber-600/30 dark:bg-zinc-800 md:bg-transparent",
              }}
              inactiveProps={{ className: "text-white" }}
            >
              <Vault className="w-6 h-6" />
              <span>Vault</span>
            </Link>
            <Link
              to="/notes"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-2 px-4 rounded-lg transition hover:bg-amber-600 dark:hover:bg-zinc-800 md:hover:bg-transparent md:inline-flex"
              activeProps={{
                className:
                  "text-amber-950 dark:text-amber-400 font-semibold bg-amber-600/30 dark:bg-zinc-800 md:bg-transparent",
              }}
              inactiveProps={{ className: "text-white" }}
            >
              <NotebookPen className="w-6 h-6" />
              <span>Notes</span>
            </Link>
            <Link
              to="/tags"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-2 px-4 rounded-lg transition hover:bg-amber-600 dark:hover:bg-zinc-800 md:hover:bg-transparent md:inline-flex"
              activeProps={{
                className:
                  "text-amber-950 dark:text-amber-400 font-semibold bg-amber-600/30 dark:bg-zinc-800 md:bg-transparent",
              }}
              inactiveProps={{ className: "text-white" }}
            >
              <Tag className="w-6 h-6" />
              <span>Tags</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
