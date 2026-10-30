import { createFileRoute } from '@tanstack/react-router'
import NotesCreateOrUpdatePage from '../../../pages/NotesCreateOrUpdatePage'

export const Route = createFileRoute('/notes/$noteId/edit')({
  component: NotesCreateOrUpdatePage,
  context: () => ({title: "Update Note", formHeader: "Edit Note"})
})

