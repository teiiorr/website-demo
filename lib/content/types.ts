export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  publishedAt: string;
  readTime: string;
  category: string;
  cover: string;
};

export type Project = {
  id: string;
  name: string;
  summary: string;
  status: "active" | "pilot" | "planned";
};

export type Partner = {
  id: string;
  name: string;
  focus: string;
};
