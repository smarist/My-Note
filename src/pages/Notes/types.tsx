import { ReactNode } from "react"

export type AuthWrapperProps = {
  children: ReactNode,
  onClick?: () => void,
  type?: string,
  rightComponent?: any,
}

export type Notes = {
  id: string,
  body: string,
  prevNotes?: Notes,
  oldNotes?: Notes,
  [key: string]: any
}