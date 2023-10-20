export interface Post {
  id?:  string;
  title?: { rendered: string };
  content?: { rendered: string, protected: boolean };
  date?: Date;
  slug?: string;
  excerpt?:  { rendered?: string, protected?: boolean };
  [key: string]: any;
}
