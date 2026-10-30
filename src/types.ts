interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  // Captures current UTC time
  createdAt: Temporal.Instant;
  // Captures current time in user's specific time zone
  lastModifiedAt?: Temporal.ZonedDateTime | string | null;
  // Sets a specific calendar date (Year, Month, Day)
  reminderDate?: Temporal.PlainDate | string | null;
}

interface Tag {
  id: string;
  name: string;
}

export interface NoteStore {
  notes: Record<string, Note>;
  tags: Record<string, Tag>;
  addNote: (title: string, content: string, tags: string[]) => string;
  updateNote: (noteId: string, updates: Partial<Omit<Note, "id">>) => void;
  createTag: (name: string) => string;
  deleteTag: (id: string) => void
}
