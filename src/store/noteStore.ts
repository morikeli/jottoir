import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { NoteStore } from "../types";

const useNoteStore = create<NoteStore>()(
  persist(
    (set) => ({
      notes: {},
      tags: {},
      addNote: (title, content, tags) => {
        const id = crypto.randomUUID();
        const createdAt = Temporal.Now.instant();

        set((state) => ({
          notes: {
            ...state.notes,
            [id]: { id, title, content, tags, createdAt },
          },
        }));

        return id;
      },

    
    }),
    {name: "Jottoir"}
  )
);

export default useNoteStore