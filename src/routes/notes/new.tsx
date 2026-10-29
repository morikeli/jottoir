import { createFileRoute } from '@tanstack/react-router'
import CreateOrUpdateNotePage from '../../pages/NotesCreateOrUpdatePage'

export const Route = createFileRoute('/notes/new')({
  component: CreateOrUpdateNotePage,
  context: () => ({title: "Add Note"})
})
