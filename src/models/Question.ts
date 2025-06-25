export interface Question {
  ID: number
  id?: number
  CreatedAt: string
  UpdatedAt: string | null
  DeletedAt: string | null
  Statement: string
  SubjectID: number
  UserID: number
}

export interface Answer {
  ID: number
  Text: string
  Is_correct: boolean
  QuestionID: number
}

export interface Subject {
  ID: number,
  Name: string
}

export interface Topic {
  ID: number,
  Name: string,
  SubjectID: number
}

export interface Source {
  ID: number,
  Name: string,
  Type: string,
  Metadata: Record<string, string | number>
}
