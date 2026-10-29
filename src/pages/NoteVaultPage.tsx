import { Link } from "@tanstack/react-router";
import { Plus, Search, FileText, Calendar, NotebookPen } from "lucide-react";
import useNoteStore from "../store/noteStore";

export default function NoteVaultPage() {
  const { notes, tags } = useNoteStore();

  // sort notes in descending order
  const myNotes = Object.values(notes).sort((a, b) =>
    Temporal.ZonedDateTime.compare(b.lastModifiedAt, a.lastModifiedAt),
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50 dark:bg-zinc-950 min-h-screen transition-colors">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold font-brand text-gray-900 dark:text-white tracking-tight">
            My Vault
          </h1>
          <p className="text-gray-500 dark:text-zinc-400 mt-1">
            Manage, organize, and search through all your jots.
          </p>
        </div>
        {/* Only show top button if there are notes in the vault */}
        {myNotes.length > 0 && (
          <Link
            to="/notes/new"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-sm transition-all"
          >
            <Plus className="w-5 h-5" />
            <span>Add Note</span>
          </Link>
        )}
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-zinc-500" />
        <input
          type="text"
          placeholder="Search notes by title or content..."
          className="w-full pl-11 pr-4 py-3 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-sm text-gray-800 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500"
        />
      </div>

      {/* Empty notes Placeholder */}
      {filteredNotes.length === 0 && myNotes.length === 0 && (
        <div className="flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-zinc-900/50 border border-dashed border-gray-200 dark:border-zinc-800 rounded-2xl my-6">
          {/* Visual Icon Anchor */}
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-500 dark:text-amber-400 mb-4">
            <NotebookPen className="w-6 h-6" />
          </div>

          {/* Primary Heading */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-zinc-100 mb-1">
            Your vault is empty
          </h3>

          {/* Readable Secondary Copy */}
          <p className="text-sm text-gray-500 dark:text-zinc-400 max-w-sm mb-6 leading-relaxed">
            You haven't added any notes to your vault yet. Capture your
            thoughts, ideas, or reminders to get started.
          </p>

          {/* Direct Action Link */}
          <Link
            to="/notes/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 text-white font-medium text-sm rounded-xl transition-all shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Create Your First Note</span>
          </Link>
        </div>
      )}
      
      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {myNotes.map((note) => (
          <Link
            key={note.id}
            to={`/notes/$noteId`}
            params={{ noteId: note.id }}
            className="group bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-amber-300 dark:hover:border-amber-500/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 rounded-lg">
                  <FileText className="w-3.5 h-3.5" />
                  {note.tags.map((tagId) => tags[tagId].title)}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-zinc-500">
                  <Calendar className="w-3.5 h-3.5" />
                  {note.createdAt}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-2">
                {note.title}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 text-sm line-clamp-2 leading-relaxed">
                {note.content}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between text-xs font-medium text-amber-600 dark:text-amber-400">
              <span>Read more</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
