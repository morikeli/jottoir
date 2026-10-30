import { useState } from "react";
import { Plus, Trash2, Tag as TagIcon, Tag as TagLucide } from "lucide-react";
import useNoteStore from "../store/noteStore";

export default function TagsPage() {
  const { tags, createTag, deleteTag } = useNoteStore();
  const [newTagName, setNewTagName] = useState("");

  // Convert the store's Record<string, Tag> into an array for rendering
  const tagList = Object.values(tags);

  const handleAddTag = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (newTagName.trim()) {
      createTag(newTagName.trim());
      setNewTagName("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight dark:text-zinc-100">
          Manage Tags
        </h1>
        <p className="text-gray-500 mt-1">
          Create and organize custom tags to group your notes effectively.
        </p>
      </div>

      {/* Create Tag Form */}
      <form
        onSubmit={handleAddTag}
        className="bg-white border border-gray-200 dark:bg-zinc-900 dark:border-zinc-800 p-4 sm:p-6 rounded-2xl shadow-sm mb-8 flex flex-col sm:flex-row gap-3"
      >
        <div className="relative flex-1">
          <TagLucide className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={newTagName}
            onChange={(e) => setNewTagName(e.target.value)}
            placeholder="Enter new tag name (e.g., Ideas, Recipes)..."
            className="w-full pl-11 pr-4 py-3 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:focus:bg-zinc-800 dark:placeholder-zinc-500 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all text-gray-800 placeholder-gray-400"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-xl shadow-sm transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>Create Tag</span>
        </button>
      </form>

      {/* Tags List */}
      <div className="bg-white dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100 border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2 dark:text-zinc-100">
            <TagIcon className="w-4 h-4 text-amber-500" />
            Existing Tags ({tagList.length})
          </h2>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-zinc-800">
          {tagList.length === 0 ? (
            <div className="p-8 text-center text-gray-400 dark:text-zinc-500">
              No tags created yet. Add one above!
            </div>
          ) : (
            tagList.map((tag) => (
              <div
                key={tag.id}
                className="p-4 sm:px-6 flex items-center justify-between hover:bg-gray-50/60 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold">
                    #
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-zinc-100">
                      {tag.name}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => deleteTag(tag.id)}
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-lg transition-colors"
                  title="Delete tag"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
