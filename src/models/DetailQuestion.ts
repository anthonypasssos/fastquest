import type { Comment } from "./Comment.ts";
import type { Answer, Source, Subject, Topic } from "./Question.ts";
import type { User } from "./User.ts";

export interface DetailQuestion {
  ID: number,
  created_at: string,
  updated_at: string,
  statement: string,
  subject: Subject,
  topic: Topic,
  user: User,
  source: Source,
  answers: Array<Answer>,
  comments: Array<Comment>
}
