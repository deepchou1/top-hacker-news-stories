export interface StoryType {
  url: string;
  id: number;
  title: string;
  score: number;
  by: string;
  user: UserType;
}

export interface UserType {
  id: string;
  karma: number;
}