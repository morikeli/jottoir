import { Link } from "@tanstack/react-router";
import {
  Plus,
  FileText,
  ChevronRight,
  Search,
  NotebookPen,
  Tag,
} from "lucide-react";
import useNoteStore from "../store/noteStore";
import { useState } from "react";

export default function NotesListPage() {
  const { notes } = useNoteStore();
  const [searchNotes, setSearchNotes] = useState("");

  // sort notes in descending order safely resolving possible null/undefined/string types
  const myNotes = Object.values(notes).sort((a, b) => {
    const dateA = a.lastModifiedAt
      ? typeof a.lastModifiedAt === "string"
        ? Temporal.ZonedDateTime.from(a.lastModifiedAt)
        : a.lastModifiedAt
      : Temporal.Now.zonedDateTimeISO();

    const dateB = b.lastModifiedAt
      ? typeof b.lastModifiedAt === "string"
        ? Temporal.ZonedDateTime.from(b.lastModifiedAt)
        : b.lastModifiedAt
      : Temporal.Now.zonedDateTimeISO();

    return Temporal.ZonedDateTime.compare(dateB, dateA);
  });

  // Filter notes based on search query
  const filteredNotes = myNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchNotes.toLowerCase()) ||
      note.content.toLowerCase().includes(searchNotes.toLowerCase()),
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-zinc-100">
            All Notes
          </h1>
          <p className="text-gray-500 dark:text-zinc-400 mt-1">
            A streamlined list view of your complete note history.
          </p>
        </div>
        <Link
          to="/notes/new"
          className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-sm transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>Add Note</span>
        </Link>
      </div>

      {/* Filter / Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-zinc-500" />
        <input
          type="text"
          placeholder="Filter notes..."
          onChange={(e) => setSearchNotes(e.target.value)}
          value={searchNotes}
          className="w-full pl-11 pr-4 py-2.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white dark:focus:bg-zinc-900 text-gray-800 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 shadow-sm transition-all"
        />
      </div>

      {/* Empty notes Placeholder */}
      {filteredNotes.length === 0 && myNotes.length === 0 && (
        <div className="flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-zinc-900/50 border border-dashed border-gray-200 dark:border-zinc-800 rounded-2xl my-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-500 dark:text-amber-400 mb-4">
            <NotebookPen className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-zinc-100 mb-1">
            Your vault is empty
          </h3>
          <p className="text-sm text-gray-500 dark:text-zinc-400 max-w-sm mb-6 leading-relaxed">
            You haven't added any notes to your vault yet. Capture your
            thoughts, ideas, or reminders to get started.
          </p>
          <Link
            to="/notes/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 text-white font-medium text-sm rounded-xl transition-all shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Create Your First Note</span>
          </Link>
        </div>
      )}

      {/* List Feed */}
      <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100 dark:divide-zinc-800/80">
        {filteredNotes.map((note) => {
          const maxVisibleTags = 2;
          const tagsList = note.tags || [];
          const visibleTags = tagsList.slice(0, maxVisibleTags);
          const overflowCount = tagsList.length - maxVisibleTags;

          return (
            <Link
              key={note.id}
              to={`/notes/$noteId`}
              params={{ noteId: note.id }}
              className="p-5 flex items-center justify-between hover:bg-gray-50/80 dark:hover:bg-zinc-800/50 transition-colors group"
            >
              <div className="flex items-start gap-4 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors truncate">
                      {note.title}
                    </span>
                    {visibleTags.map((tagName) => (
                      <span
                        key={tagName}
                        className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 rounded-md"
                      >
                        <Tag className="w-3 h-3" />
                        {tagName}
                      </span>
                    ))}

                    {overflowCount > 0 && (
                      <span
                        title={tagsList.slice(maxVisibleTags).join(", ")}
                        className="inline-flex items-center text-xs font-medium px-2 py-0.5 bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 rounded-md cursor-help"
                      >
                        +{overflowCount} more
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-zinc-400 truncate">
                    {note.content}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-4">
                <span className="text-xs text-gray-400 dark:text-zinc-500 hidden sm:inline">
                  {note.createdAt ? new Date().toLocaleDateString() : ""}
                </span>
                <ChevronRight className="w-5 h-5 text-gray-300 dark:text-zinc-600 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
