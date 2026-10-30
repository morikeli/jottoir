import { useState } from "react";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, Save, FileText, Tag as TagIcon } from "lucide-react";
import useNoteStore from "../store/noteStore";

export default function CreateOrUpdateNotePage() {
  const { notes, tags, addNote, updateNote } = useNoteStore();
  const navigate = useNavigate();
  const params = useParams({ strict: false });
  const isEditing = Boolean(params.noteId);
  const noteId = params.noteId
  const note = noteId ? notes[noteId] : null;
  const [title, setTitle] = useState(note?.title || "");
  const [selectedTags, setSelectedTags] = useState<string[]>(note?.tags || []);
  const [content, setContent] = useState(note?.content || "");

  const dynamicTags = Object.values(tags);

  // Toggle tag selection handler
  const toggleTag = (tagName: string) => {
    setSelectedTags(
      (prev) =>
        prev.includes(tagName)
          ? prev.filter((t) => t !== tagName) // Remove if already selected
          : [...prev, tagName], // Add if not selected
    );
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault(); // don't refresh page after submitting form

    if (title.trim() && content.trim()) {
      if (note) {
        updateNote(noteId, { title, content, tags: selectedTags });
        navigate({to: `/notes/${noteId}`})
      } else {
        const newNoteId = addNote(title, content, selectedTags);
        navigate({to: `/notes/${newNoteId}`})
      }
    }
    navigate({ to: "/" });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Vault</span>
        </Link>
      </div>

      {/* Form Container */}
      <div className="bg-white border dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm p-6 sm:p-8">
        <div className="mb-6 pb-4 border-b border-gray-100 dark:border-zinc-800">
          <h1 className="text-2xl dark:text-zinc-100 font-bold text-gray-900">
            {isEditing ? "Edit Note" : "Add Note"}
          </h1>
          <p className="text-sm text-gray-500 dark:text-zinc-400 mt-0.5">
            {isEditing
              ? "Update your existing jot and save changes."
              : "Write down a new thought, idea, or reminder."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
              Note Title
            </label>
            <div className="relative">
              <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Q3 Product Strategy..."
                required
                className="w-full pl-11 pr-4 py-3 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:focus:bg-zinc-800 dark:placeholder-zinc-500 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Dynamic Multi-Select Tag Buttons */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
              Category Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {dynamicTags.length > 0 ? (
                dynamicTags.map((t) => {
                  const isSelected = selectedTags.includes(t.name);
                  return (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => toggleTag(t.name)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                        isSelected
                          ? "bg-amber-500 text-white shadow-sm ring-2 ring-amber-400/50"
                          : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700 border border-gray-200/60 dark:border-zinc-700/60"
                      }`}
                    >
                      <TagIcon className="w-3.5 h-3.5" />
                      <span>{t.name}</span>
                    </button>
                  );
                })
              ) : (
                <p className="text-xs text-gray-400 dark:text-zinc-500 italic">
                  No tags created yet. Add some in the Tags tab!
                </p>
              )}
            </div>
          </div>

          {/* Content Area */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              placeholder="Start writing your note here..."
              required
              className="w-full p-4 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:focus:bg-zinc-800 dark:placeholder-zinc-500 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-zinc-800">
            <Link
              to="/"
              className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-zinc-300 font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 text-white font-medium px-6 py-2.5 rounded-xl shadow-sm transition-all"
            >
              <Save className="w-4 h-4" />
              <span>{isEditing ? "Save Changes" : "Create Note"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
