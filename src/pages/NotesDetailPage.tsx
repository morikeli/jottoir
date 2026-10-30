import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, Edit3, Trash2, Calendar, Tag, FileX } from "lucide-react";
import useNoteStore from "../store/noteStore";

export default function NotesDetailPage() {
  const { notes, deleteNote } = useNoteStore();
  const { noteId } = useParams({ strict: false });
  const navigate = useNavigate();
  const note = noteId ? notes[noteId] : null;

  // return to homepage if note is deleted or doesn't exist
  if (!note) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center flex flex-col items-center">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-500 dark:text-amber-400 mb-4">
          <FileX className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-zinc-200 mb-2">
          Oh snap! We couldn't find the note you are looking for.
        </h2>
        <p className="text-gray-500 dark:text-zinc-400 mb-6">
          This note may have been deleted or no longer exists.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium text-sm rounded-xl transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Vault</span>
        </Link>
      </div>
    );
  }

  const maxVisibleTags = 5;
  const noteTags = note!.tags || [];
  const visibleTags = noteTags.slice(0, maxVisibleTags);
  const overflowCount = noteTags.length - maxVisibleTags;

  const handleDelete = () => {
    deleteNote(note.id);
    navigate({ to: "/" });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back and Action Toolbar */}
      <div className="flex items-center justify-between mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Vault</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            to="/notes/$noteId/edit"
            params={{ noteId: note.id }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit</span>
          </Link>
          <button
            onClick={handleDelete}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 text-sm font-medium transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="dark:bg-zinc-900 dark:border-zinc-800 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-10">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {visibleTags.map((tagName) => (
              <span
                key={tagName}
                className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 rounded-lg"
              >
                <Tag className="w-3.5 h-3.5" />
                {tagName}
              </span>
            ))}

            {overflowCount > 0 && (
              <span
                title={noteTags.slice(maxVisibleTags).join(", ")}
                className="inline-flex items-center text-xs font-medium px-2 py-0.5 bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 rounded-md cursor-help"
              >
                +{overflowCount} more
              </span>
            )}
          </div>

          <span className="inline-flex items-center gap-1 text-xs text-gray-400">
            <Calendar className="w-3.5 h-3.5" />
            {note.createdAt ? new Date().toLocaleDateString() : ""}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-6">
          {note.title}
        </h1>

        <div className="prose max-w-none text-gray-700 dark:text-zinc-400 whitespace-pre-line leading-relaxed border-t border-gray-100 pt-6">
          {note.content}
        </div>
      </div>
    </div>
  );
}
