import { createFileRoute } from '@tanstack/react-router'
import NotesDetailPage from '../../../pages/NotesDetailPage'

export const Route = createFileRoute('/notes/$noteId/')({
  component: NotesDetailPage,
  context: () => ({title: "Note Details"})
})
