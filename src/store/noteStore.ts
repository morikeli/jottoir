import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { NoteStore } from "../types";

const useNoteStore = create<NoteStore>()(
  persist(
    (set) => ({
      notes: {},
      tags: {}
    }),
    {name: "Jottoir"}
  )
);

export default useNoteStore