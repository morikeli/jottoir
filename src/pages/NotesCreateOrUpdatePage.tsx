import { useState } from "react";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, Save, FileText, Tag } from "lucide-react";
import useNoteStore from "../store/noteStore";

export default function CreateOrUpdateNotePage() {
  const { notes, tags } = useNoteStore();
  const myTags = Object.values(tags);

  const navigate = useNavigate();
  // State for the form (can be pre-filled if editing an existing note)
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("Work");
  const [content, setContent] = useState("");
  const params = useParams({ strict: false });
  const isEditing = Boolean(params.noteId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add save/update logic here
    console.log({ title, tag, content });
    navigate({ to: "/" });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Vault</span>
        </Link>
      </div>

      {/* Form Container */}
      <div className="bg-white border dark:bg-zinc-900 border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
        <div className="mb-6 pb-4 border-b border-gray-100">
          <h1 className="text-2xl dark:text-zinc-100 font-bold text-gray-900">
            {isEditing ? "Edit Note" : "Add Note"}
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {isEditing
              ? "Update your existing jot and save changes."
              : "Write down a new thought, idea, or reminder."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
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

          {/* Tag Selector */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Category Tag
            </label>
            <div className="relative">
              <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="w-full pl-11 pr-4 py-3 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:focus:bg-zinc-800 dark:placeholder-zinc-500 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all text-gray-900 appearance-none"
              >
                {myTags.length > 0 ? (
                  myTags.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name}
                    </option>
                  ))
                ) : (
                  // Fallback if no tags exist
                  <option value="General">General</option>
                )}
              </select>
            </div>
          </div>

          {/* Content Area */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
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
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <Link
              to="/"
              className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-2.5 rounded-xl shadow-sm transition-all"
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
