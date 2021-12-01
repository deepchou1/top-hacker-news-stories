export interface StoryType {
  url: string;
  id: number;
  title: string;
  time: number;
  score: number;
  by: string;
  user: UserType;
}

export interface UserType {
  id: string;
  karma: number;
}