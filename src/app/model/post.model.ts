export interface Post {
  id?:  string;
  title?: { rendered: string };
  content?: { rendered: string, protected: boolean };
  [key: string]: any;
}
