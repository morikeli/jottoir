// src/pages/LandingPage.tsx
import { Link } from "@tanstack/react-router";
import {
  PenTool,
  Vault,
  Tag,
  ArrowRight,
  Sparkles,
  Search,
  Moon,
  Lock,
  Layers,
  Smile,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 transition-colors flex flex-col justify-between">
      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-16 sm:py-24 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-6 shadow-sm border border-amber-200/50 dark:border-amber-800/50">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Your personal markdown-friendly vault</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl font-bold font-brand tracking-tight max-w-2xl mb-6 leading-tight">
          Capture your thoughts with{" "}
          <span className="text-amber-500 dark:text-amber-400">Jottoir</span>.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-zinc-400 max-w-xl mb-10 leading-relaxed">
          A lightning-fast, beautifully minimal note-taking web app designed to
          organize your ideas, code snippets, and daily reminders effortlessly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            to="/vault"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 text-white font-medium px-7 py-3.5 rounded-2xl shadow-sm transition-all text-base"
          >
            <Vault className="w-5 h-5" />
            <span>Open Vault</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>

          <Link
            to="/tags"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-200 font-medium px-7 py-3.5 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-sm transition-all text-base"
          >
            <Tag className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            <span>Manage Tags</span>
          </Link>
        </div>

        {/* Cards Grid Outlining App Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 w-full text-left">
          {/* Card 1 */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm hover:border-amber-300 dark:hover:border-amber-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Private & Local First
            </h3>
            <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
              Your notes stay right on your device. Enjoy complete privacy with
              persistent local storage that keeps your thoughts safe.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm hover:border-amber-300 dark:hover:border-amber-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
              <PenTool className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Multi-Tag Organization
            </h3>
            <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
              Categorize notes effortlessly using custom tags, clean overflow
              badges, and quick interactive category filtering.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm hover:border-amber-300 dark:hover:border-amber-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Search</h3>
            <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
              Find any idea in seconds. Filter through all your jots instantly
              by title or content with real-time vault querying.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm hover:border-amber-300 dark:hover:border-amber-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Clean Markdown Writing
            </h3>
            <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
              A distraction-free writing space optimized for notes, code
              snippets, project roadmaps, and daily journals.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm hover:border-amber-300 dark:hover:border-amber-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
              <Moon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Warm Dark Mode</h3>
            <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
              Easy on the eyes day or night with a gorgeous, custom amber-themed
              dark mode built for late-night thinking.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm hover:border-amber-300 dark:hover:border-amber-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
              <Smile className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Intuitive & Friendly</h3>
            <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
              Designed with thoughtful empty states, smooth navigation, and a
              delightful user experience from start to finish.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
