export interface Post {
  id?: string;
  title?: string;
  content?: { rendered: string, protected: boolean };
  [key: string]: any;
}
