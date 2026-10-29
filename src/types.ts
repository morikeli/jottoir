export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  // Captures current UTC time
  createdAt: Temporal.Instant;
  // Captures current time in user's specific time zone
  lastModifiedAt: Temporal.ZonedDateTime;
  // Sets a specific calendar date (Year, Month, Day)
  reminderDate: Temporal.PlainDate;
}

export interface Tag {
  id: string;
  name: string;
}

export interface NoteStore {
  notes: Record<string, Note>;
  tags: Record<string, Tag>;
}
