export type name = string
export type errorCatch = {message: string}
export interface Notes {
  id: string,
  body: string,
  prevNotes?: Notes,
  oldNotes?: Notes,
  [key: string]: any
}

// export interface TaskProps {
//   title: string,
//   assignee: userInfo,
//   dueDate: string,
//   status: string,
//   priority: string,
//   id?: number,
//   createdAt: string,
//   description?: string,
// }