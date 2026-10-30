import { Link } from "@tanstack/react-router";
import { PenTool, Heart, Vault, NotebookPen, Tag } from "lucide-react";

export default function FooterComponent() {
  return (
    <footer className="mt-auto bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              to="/"
              className="flex items-center gap-2 text-amber-500 dark:text-amber-400 font-bold text-xl"
            >
              <PenTool className="w-5 h-5" />
              <span>Jottoir</span>
            </Link>
            <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1">
              Your personal markdown-friendly vault for thoughts and notes.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-zinc-400">
            <Link
              to="/vault"
              className="flex items-center gap-1.5 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              <Vault className="w-4 h-4" />
              <span>Vault</span>
            </Link>
            <Link
              to="/notes"
              className="flex items-center gap-1.5 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              <NotebookPen className="w-4 h-4" />
              <span>Notes</span>
            </Link>
            <Link
              to="/tags"
              className="flex items-center gap-1.5 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              <Tag className="w-4 h-4" />
              <span>Tags</span>
            </Link>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 dark:text-zinc-500 gap-2">
          <p>© {new Date().getFullYear()} Jottoir. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{" "}
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />{" "}
            using Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
